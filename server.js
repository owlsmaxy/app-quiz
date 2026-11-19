const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const crypto = require('node:crypto');

const PORT = Number(process.env.PORT || 8000);
const ROOT = __dirname;
const APP_ORIGIN = process.env.APP_ORIGIN || `http://localhost:${PORT}`;
const requestWindowMs = 60_000;
const requestLimit = 120;
const aiRequestLimit = 12;
const requestCounters = new Map();
const aiRequestCounters = new Map();

function clientAddress(request) {
  return request.socket.remoteAddress || 'unknown';
}

function withinRateLimit(store, key, limit) {
  const now = Date.now();
  const current = store.get(key) || [];
  const recent = current.filter(timestamp => now - timestamp < requestWindowMs);
  if (recent.length >= limit) {
    store.set(key, recent);
    return false;
  }
  recent.push(now);
  store.set(key, recent);
  return true;
}

function securityHeaders() {
  return {
    'Access-Control-Allow-Origin': APP_ORIGIN,
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, apikey, x-client-info',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Vary': 'Origin',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'same-origin',
    'Content-Security-Policy': "default-src 'self'; connect-src 'self' https://*.supabase.co https://fonts.googleapis.com https://fonts.gstatic.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; script-src 'self'; frame-ancestors 'none'"
  };
}

function loadBrowserModule(fileName) {
  const source = fs.readFileSync(path.join(ROOT, fileName), 'utf8');
  const storage = new Map();
  const window = {};
  const context = vm.createContext({
    window,
    globalThis: { crypto },
    localStorage: {
      getItem: key => storage.get(key) || null,
      setItem: (key, value) => storage.set(key, String(value)),
      removeItem: key => storage.delete(key)
    },
    console
  });
  vm.runInContext(source, context, { filename: fileName });
  return window;
}

const education = loadBrowserModule('education-data.js').AtlasEducation;
const questionBank = loadBrowserModule('question-bank.js').AtlasQuestionBank;

function sendJson(response, status, payload) {
  response.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    ...securityHeaders()
  });
  response.end(JSON.stringify(payload));
}

function publicQuestion(question) {
  const { correctAnswer, ...safeQuestion } = question;
  return safeQuestion;
}

function parseBody(request) {
  return new Promise((resolve, reject) => {
    let body = '';
    request.on('data', chunk => {
      body += chunk;
      if (body.length > 256_000) {
        reject(new Error('Request body too large.'));
        request.destroy();
      }
    });
    request.on('end', () => {
      if (!body) return resolve({});
      try { resolve(JSON.parse(body)); } catch { reject(new Error('Request body must be valid JSON.')); }
    });
    request.on('error', reject);
  });
}

function validateAiRequest(body) {
  const actions = new Set(['explain-question', 'get-hint', 'explain-answer', 'guided-problem-solving', 'follow-up', 'discover-topic']);
  if (!body || typeof body !== 'object' || !actions.has(body.action)) return 'Unsupported AI action.';
  const textFields = ['question', 'context', 'problem', 'subject', 'query', 'newQuestion'];
  for (const field of textFields) {
    if (body[field] !== undefined && (typeof body[field] !== 'string' || body[field].length > 8_000)) return 'AI request contains invalid text.';
  }
  if (body.level !== undefined && !['beginner', 'intermediate', 'advanced'].includes(body.level)) return 'Unsupported explanation level.';
  if (body.conversationHistory !== undefined && (!Array.isArray(body.conversationHistory) || body.conversationHistory.length > 20)) return 'Conversation history is too large.';
  return null;
}

function filteredQuestions(searchParams) {
  const filters = Object.fromEntries([
    'countryId', 'curriculumId', 'educationLevelId', 'gradeId',
    'subjectId', 'topicId', 'difficulty', 'type'
  ].filter(key => searchParams.has(key)).map(key => [key, searchParams.get(key)]));
  const limit = Math.min(Math.max(Number(searchParams.get('limit') || 50), 1), 200);
  return questionBank.questions.filter(question => questionBank.matches(question, filters))
    .slice(0, limit).map(publicQuestion);
}

function serveStatic(request, response, pathname) {
  const relative = pathname === '/' ? 'index.html' : pathname.slice(1);
  const filePath = path.resolve(ROOT, relative);
  if (!filePath.startsWith(ROOT + path.sep) || !fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    return sendJson(response, 404, { error: 'Not found.' });
  }
  const extension = path.extname(filePath).toLowerCase();
  const contentTypes = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.json': 'application/json' };
  response.writeHead(200, { 'Content-Type': `${contentTypes[extension] || 'application/octet-stream'}; charset=utf-8` });
  fs.createReadStream(filePath).pipe(response);
}

const server = http.createServer(async (request, response) => {
  const url = new URL(request.url, `http://${request.headers.host || 'localhost'}`);
  if (request.method === 'OPTIONS') return sendJson(response, 204, {});

  const address = clientAddress(request);
  if (!withinRateLimit(requestCounters, address, requestLimit)) {
    return sendJson(response, 429, { error: 'Too many requests. Please try again shortly.' });
  }

  try {
    if (url.pathname === '/api/health' && request.method === 'GET') {
      return sendJson(response, 200, { ok: true, service: 'atlas-learn-api', timestamp: new Date().toISOString() });
    }
    if (url.pathname === '/api/education' && request.method === 'GET') {
      return sendJson(response, 200, { countries: education.countries, levels: education.levels, curricula: education.curricula, grades: education.grades, subjects: education.subjects, faculties: education.faculties });
    }
    if (url.pathname === '/api/questions' && request.method === 'GET') {
      return sendJson(response, 200, { questions: filteredQuestions(url.searchParams) });
    }
    if (url.pathname.startsWith('/api/questions/') && request.method === 'GET') {
      const id = decodeURIComponent(url.pathname.split('/').pop());
      const question = questionBank.questions.find(item => item.id === id);
      return question ? sendJson(response, 200, { question: publicQuestion(question) }) : sendJson(response, 404, { error: 'Question not found.' });
    }
    if (url.pathname === '/api/quiz/grade' && request.method === 'POST') {
      const body = await parseBody(request);
      const question = questionBank.questions.find(item => item.id === body.questionId);
      if (!question) return sendJson(response, 404, { error: 'Question not found.' });
      return sendJson(response, 200, { questionId: question.id, correct: questionBank.gradeAnswer(question, body.answer) });
    }
    if (url.pathname === '/api/ai' && request.method === 'POST') {
      const providerEndpoint = process.env.AI_ENDPOINT;
      const providerKey = process.env.AI_API_KEY;
      if (!providerEndpoint || !providerKey) {
        return sendJson(response, 503, { error: 'AI service is not configured on the server.' });
      }
      const body = await parseBody(request);
      const validationError = validateAiRequest(body);
      if (validationError) return sendJson(response, 400, { error: validationError });
      if (!withinRateLimit(aiRequestCounters, address, aiRequestLimit)) {
        return sendJson(response, 429, { error: 'AI request limit reached. Please try again shortly.' });
      }
      const upstream = await fetch(providerEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${providerKey}` },
        body: JSON.stringify(body)
      });
      const text = await upstream.text();
      response.writeHead(upstream.status, {
        'Content-Type': upstream.headers.get('content-type') || 'application/json; charset=utf-8',
        ...securityHeaders()
      });
      return response.end(text);
    }
    return serveStatic(request, response, url.pathname);
  } catch (error) {
    const status = error.message === 'Request body too large.' || error.message === 'Request body must be valid JSON.' ? 400 : 500;
    return sendJson(response, status, { error: status === 400 ? error.message : 'Internal server error.' });
  }
});

server.listen(PORT, () => {
  console.log(`Atlas Learn API running at http://localhost:${PORT}`);
});
