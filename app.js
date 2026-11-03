const icons = {
  home: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10Z"/></svg>',
  explore: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m16 16 4 4M8 11h6m-3-3v6"/></svg>',
  categories: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="8" height="8" rx="2"/><rect x="13" y="3" width="8" height="8" rx="2"/><rect x="3" y="13" width="8" height="8" rx="2"/><rect x="13" y="13" width="8" height="8" rx="2"/></svg>',
  premium: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 2.4 5 5.5.8-4 3.9.9 5.5-4.8-2.6-4.8 2.6.9-5.5-4-3.9 5.5-.8L12 3Z"/></svg>',
  rewards: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="5"/><path d="m8 12-1 9 5-3 5 3-1-9"/></svg>',
  leaderboard: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 20V10h4v10M10 20V4h4v16m1 0v-8h4v8M3 20h18"/></svg>',
  profile: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
  settings: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="m19.4 15 .1.1 1.4 1.1-1.4 2.4-1.7-.7a8 8 0 0 1-1.7 1l-.3 1.8h-2.8l-.3-1.8a8 8 0 0 1-1.7-1l-1.7.7-1.4-2.4 1.4-1.1a7 7 0 0 1 0-2l-1.4-1.1 1.4-2.4 1.7.7a8 8 0 0 1 1.7-1l.3-1.8h2.8l.3 1.8a8 8 0 0 1 1.7 1l1.7-.7 1.4 2.4-1.4 1.1a7 7 0 0 1 0 2Z" transform="translate(-1 -2)"/></svg>',
  search: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m16 16 4 4"/></svg>',
  clock: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>',
  bolt: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m13 2-9 12h7l-1 8 10-13h-7l1-7Z"/></svg>',
  trophy: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 21h8m-4-4v4m-6-18h12v5a6 6 0 0 1-12 0V3Zm0 3H3v2a4 4 0 0 0 4 4m10-6h4v2a4 4 0 0 1-4 4"/></svg>',
  check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>',
  lock: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 1 1 8 0v3"/></svg>'
};

const categories = [
  { id: 'math', name: 'Mathematics', emoji: '∑', description: 'Patterns, numbers & logic' },
  { id: 'code', name: 'Programming', emoji: '</>', description: 'Code, concepts & computing' },
  { id: 'science', name: 'Science', emoji: '⚗', description: 'Discover how the world works' },
  { id: 'history', name: 'History', emoji: '⌛', description: 'People, places & the past' }
];

const quizzes = [
  { id: 'math-foundations', title: 'Math Foundations', category: 'math', difficulty: 'Easy', duration: 5, description: 'Build confidence with everyday numbers and patterns.', questions: [
    { prompt: 'What is 15% of 200?', options: ['20', '30', '35', '40'], answer: 1, explanation: '10% of 200 is 20 and 5% is 10, so 15% is 30.' },
    { prompt: 'Which number is a prime number?', options: ['21', '27', '29', '33'], answer: 2, explanation: '29 has no divisors other than 1 and itself.' },
    { prompt: 'A rectangle is 8 cm long and 5 cm wide. What is its area?', options: ['13 cm²', '26 cm²', '40 cm²', '80 cm²'], answer: 2, explanation: 'Area is length multiplied by width: 8 × 5 = 40 cm².' },
    { prompt: 'What is the next number in the sequence: 3, 6, 12, 24, …?', options: ['30', '36', '42', '48'], answer: 3, explanation: 'Each number doubles, so the next number is 24 × 2 = 48.' },
    { prompt: 'What is 7 × 8?', options: ['54', '56', '58', '64'], answer: 1, explanation: '7 multiplied by 8 equals 56.' }
  ] },
  { id: 'math-algebra', title: 'Algebra Essentials', category: 'math', difficulty: 'Medium', duration: 6, description: 'Put your equation-solving skills to the test.', questions: [
    { prompt: 'If 3x + 4 = 19, what is x?', options: ['3', '4', '5', '6'], answer: 2, explanation: 'Subtract 4 to get 3x = 15, then divide by 3. x = 5.' },
    { prompt: 'Which expression is equivalent to 2(a + 3)?', options: ['2a + 3', '2a + 6', 'a + 6', '5a'], answer: 1, explanation: 'Distribute 2 across both terms: 2 × a + 2 × 3 = 2a + 6.' },
    { prompt: 'What is the value of y when y/4 = 7?', options: ['11', '21', '28', '32'], answer: 2, explanation: 'Multiply both sides by 4: y = 28.' },
    { prompt: 'Which is the slope of the line y = 5x - 2?', options: ['-2', '2', '5', '-5'], answer: 2, explanation: 'In y = mx + b, the coefficient m is the slope. Here, m = 5.' },
    { prompt: 'Solve: 2x - 6 = 10.', options: ['2', '4', '8', '16'], answer: 2, explanation: 'Add 6 to both sides to get 2x = 16, then x = 8.' }
  ] },
  { id: 'code-basics', title: 'Coding Fundamentals', category: 'code', difficulty: 'Easy', duration: 5, description: 'Explore the building blocks behind everyday software.', questions: [
    { prompt: 'What does a variable do in a program?', options: ['Stores a value', 'Deletes a file', 'Draws a picture', 'Connects to Wi-Fi'], answer: 0, explanation: 'A variable is a named place to store a value a program can use.' },
    { prompt: 'Which is commonly used to repeat a block of code?', options: ['A loop', 'A comment', 'A string', 'A constant'], answer: 0, explanation: 'A loop repeats its block while a condition is met or for a set number of times.' },
    { prompt: 'What is HTML primarily used to describe?', options: ['Page structure', 'Image editing', 'Network routing', 'Database backups'], answer: 0, explanation: 'HTML provides the structure and meaning of content on a web page.' },
    { prompt: 'What does a Boolean value represent?', options: ['A whole number', 'True or false', 'A paragraph', 'A date and time'], answer: 1, explanation: 'A Boolean has one of two values: true or false.' },
    { prompt: 'Which symbol commonly begins a single-line comment in JavaScript?', options: ['//', '<!--', '**', '##'], answer: 0, explanation: 'In JavaScript, // begins a single-line comment.' }
  ] },
  { id: 'code-web', title: 'How the Web Works', category: 'code', difficulty: 'Medium', duration: 6, description: 'From browser requests to the pages you see.', questions: [
    { prompt: 'What does HTTPS add to HTTP?', options: ['Encrypted communication', 'Larger images', 'Faster typing', 'Offline storage'], answer: 0, explanation: 'HTTPS uses TLS to encrypt data exchanged between the browser and server.' },
    { prompt: 'What does a DNS lookup help a browser find?', options: ['A server IP address', 'A password', 'A page font', 'A screen size'], answer: 0, explanation: 'DNS translates a domain name into an IP address that identifies a server.' },
    { prompt: 'Which language is used to style web pages?', options: ['CSS', 'SQL', 'Bash', 'Markdown'], answer: 0, explanation: 'CSS controls the presentation and layout of web page content.' },
    { prompt: 'What is a web browser?', options: ['Software that requests and displays web content', 'A type of database', 'A programming language', 'An internet cable'], answer: 0, explanation: 'A browser requests resources from the web and renders them for people.' },
    { prompt: 'What does responsive design help a page do?', options: ['Adapt to different screen sizes', 'Avoid all images', 'Run without a browser', 'Store passwords'], answer: 0, explanation: 'Responsive layouts adapt to screens of different sizes and orientations.' }
  ] },
  { id: 'science-space', title: 'Our Solar System', category: 'science', difficulty: 'Easy', duration: 5, description: 'Take a quick tour of our cosmic neighborhood.', questions: [
    { prompt: 'Which planet is closest to the Sun?', options: ['Venus', 'Mercury', 'Earth', 'Mars'], answer: 1, explanation: 'Mercury is the innermost planet in our solar system.' },
    { prompt: 'What is the largest planet in our solar system?', options: ['Saturn', 'Neptune', 'Jupiter', 'Earth'], answer: 2, explanation: 'Jupiter is the largest planet by both diameter and mass.' },
    { prompt: 'What do we call a rocky object that enters Earth’s atmosphere and glows?', options: ['Meteor', 'Comet', 'Asteroid belt', 'Nebula'], answer: 0, explanation: 'The streak of light is a meteor; if a piece reaches the ground, it is a meteorite.' },
    { prompt: 'What causes the phases of the Moon?', options: ['Earth’s shadow every night', 'The changing view of its sunlit half', 'Clouds in space', 'The Moon changing shape'], answer: 1, explanation: 'We see different portions of the Moon’s sunlit half as it orbits Earth.' },
    { prompt: 'Which planet is known for its prominent rings?', options: ['Mars', 'Venus', 'Saturn', 'Mercury'], answer: 2, explanation: 'Saturn has an extensive and easily visible ring system.' }
  ] },
  { id: 'science-biology', title: 'Living Systems', category: 'science', difficulty: 'Medium', duration: 6, description: 'Discover the remarkable systems within living things.', questions: [
    { prompt: 'Which cell structure contains most genetic information?', options: ['Nucleus', 'Cell wall', 'Ribosome', 'Vacuole'], answer: 0, explanation: 'In eukaryotic cells, most DNA is held in the nucleus.' },
    { prompt: 'What process do plants use to turn sunlight into chemical energy?', options: ['Respiration', 'Photosynthesis', 'Fermentation', 'Digestion'], answer: 1, explanation: 'Photosynthesis uses light energy to make sugars from carbon dioxide and water.' },
    { prompt: 'Which molecule carries genetic instructions in most organisms?', options: ['DNA', 'Glucose', 'Chlorophyll', 'Water'], answer: 0, explanation: 'DNA stores the hereditary instructions used in the development and function of organisms.' },
    { prompt: 'What is the basic structural unit of living things?', options: ['Atom', 'Organ', 'Cell', 'Tissue'], answer: 2, explanation: 'The cell is the basic structural and functional unit of life.' },
    { prompt: 'Which organ pumps blood around the human body?', options: ['Lung', 'Heart', 'Kidney', 'Liver'], answer: 1, explanation: 'The heart pumps blood through the body’s circulatory system.' }
  ] },
  { id: 'history-ancient', title: 'Ancient Civilizations', category: 'history', difficulty: 'Easy', duration: 5, description: 'Meet the early cultures that shaped our world.', questions: [
    { prompt: 'Along which river did ancient Egyptian civilization flourish?', options: ['Nile', 'Tigris', 'Danube', 'Amazon'], answer: 0, explanation: 'The Nile’s seasonal floods helped sustain ancient Egyptian agriculture.' },
    { prompt: 'Which ancient civilization developed cuneiform writing?', options: ['Sumerians', 'Romans', 'Vikings', 'Aztecs'], answer: 0, explanation: 'Sumerians in Mesopotamia developed one of the earliest known writing systems, cuneiform.' },
    { prompt: 'The ancient city of Athens is located in which modern country?', options: ['Italy', 'Greece', 'Egypt', 'Turkey'], answer: 1, explanation: 'Athens is the capital of modern Greece.' },
    { prompt: 'What was the main material used to build the Roman Colosseum?', options: ['Concrete and stone', 'Wood and clay', 'Glass and steel', 'Mud brick'], answer: 0, explanation: 'The Colosseum was built from materials including Roman concrete, travertine, and tuff.' },
    { prompt: 'Which civilization built Machu Picchu?', options: ['Maya', 'Inca', 'Olmec', 'Phoenician'], answer: 1, explanation: 'Machu Picchu was built by the Inca in the Andes of present-day Peru.' }
  ] },
  { id: 'history-modern', title: 'A Turning Point: 20th Century', category: 'history', difficulty: 'Hard', description: 'Connect the events that reshaped the modern era.', duration: 6, questions: [
    { prompt: 'In which year did the first human land on the Moon?', options: ['1959', '1965', '1969', '1972'], answer: 2, explanation: 'Apollo 11 landed on the Moon in July 1969.' },
    { prompt: 'The United Nations was founded in which year?', options: ['1919', '1939', '1945', '1955'], answer: 2, explanation: 'The UN officially came into existence on October 24, 1945.' },
    { prompt: 'Which wall became a symbol of the Cold War division of Berlin?', options: ['Great Wall', 'Berlin Wall', 'Hadrian’s Wall', 'Western Wall'], answer: 1, explanation: 'The Berlin Wall divided East and West Berlin from 1961 until 1989.' },
    { prompt: 'In which year did India gain independence from British rule?', options: ['1937', '1942', '1947', '1950'], answer: 2, explanation: 'India became independent on August 15, 1947.' },
    { prompt: 'Which 20th-century agreement established the European Economic Community?', options: ['Treaty of Rome', 'Treaty of Versailles', 'Treaty of Utrecht', 'Treaty of Paris'], answer: 0, explanation: 'The 1957 Treaty of Rome established the European Economic Community.' }
  ] },
  { id: 'premium-ai', title: 'AI & Machine Learning', category: 'code', difficulty: 'Hard', premium: true, description: 'Explore the ideas behind modern intelligent systems.', duration: 8, questions: [
    { prompt: 'What does a training dataset help a supervised learning model do?', options: ['Learn relationships between examples and labels', 'Replace its processor', 'Encrypt all network traffic', 'Create a new programming language'], answer: 0, explanation: 'A supervised model learns patterns by comparing examples with their known labels.' },
    { prompt: 'What is overfitting?', options: ['A model learns training details too specifically and generalizes poorly', 'A model has no parameters', 'A dataset contains only images', 'A model runs without data'], answer: 0, explanation: 'An overfit model performs well on training data but poorly on new examples.' },
    { prompt: 'In a neural network, what is a weight?', options: ['A learned value that influences a connection', 'A file format', 'The number of rows in a table', 'A type of monitor'], answer: 0, explanation: 'Weights are learned parameters that determine how strongly inputs influence a neuron.' },
    { prompt: 'Why is a test dataset kept separate from training?', options: ['To estimate performance on unseen data', 'To make training take longer', 'To hide the model architecture', 'To reduce the number of labels'], answer: 0, explanation: 'Unseen test data helps measure how well a model generalizes beyond its training examples.' },
    { prompt: 'What does a classification model predict?', options: ['A category or class', 'Only a paragraph', 'A database schema', 'A network cable length'], answer: 0, explanation: 'Classification predicts a discrete label, such as a category or class.' }
  ] }
];

const navItems = [
  ['home', 'Home', 'home'], ['explore', 'Explore quizzes', 'explore'], ['categories', 'Categories', 'categories'],
  ['premium', 'Premium', 'premium'], ['plus', 'Atlas Plus', 'premium'], ['rewards', 'Rewards', 'rewards'], ['leaderboard', 'Leaderboard', 'leaderboard'],
  ['profile', 'My profile', 'profile'], ['settings', 'Settings', 'settings'], ['auth', 'Sign in / sign up', 'profile']
];
const storageKey = 'atlas-learn-demo-v1';
let storageReadFailed = false;
let membershipMigrationNeeded = false;
const defaultState = {
  profile: { name: 'Alex Morgan', email: '', avatar: 'AM', signedIn: true, membership: null, membershipStartedAt: '', membershipExpiresAt: '' },
  settings: { theme: 'light', font: 'DM Sans', fontSize: 15, notifications: false, sound: false, reducedMotion: false },
  stats: { xp: 0, points: 0, quizzes: 0, correct: 0, streak: 0, lastActiveDate: '', activeDates: [], completedChallenges: [] },
  history: [],
  certificates: []
};

function loadState() {
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) return structuredClone(defaultState);
    const saved = JSON.parse(raw);
    const restored = {
      ...structuredClone(defaultState),
      ...saved,
      profile: { ...defaultState.profile, ...saved.profile },
      settings: { ...defaultState.settings, ...saved.settings },
      stats: { ...defaultState.stats, ...saved.stats },
      history: Array.isArray(saved.history) ? saved.history : [],
      certificates: Array.isArray(saved.certificates) ? saved.certificates : []
    };
    const validFonts = ['DM Sans', 'Inter', 'Poppins', 'Montserrat', 'Outfit', 'Roboto', 'Space Grotesk', 'Nunito', 'Nunito Sans'];
    const numberOrDefault = (value, fallback = 0) => Number.isFinite(Number(value)) ? Math.max(0, Number(value)) : fallback;
    restored.profile.name = typeof restored.profile.name === 'string' ? restored.profile.name.slice(0, 40) : defaultState.profile.name;
    restored.profile.email = typeof restored.profile.email === 'string' ? restored.profile.email.slice(0, 120) : '';
    restored.profile.signedIn = Boolean(restored.profile.signedIn);
    restored.profile.membership = ['monthly', 'yearly'].includes(restored.profile.membership) ? restored.profile.membership : null;
    restored.profile.membershipStartedAt = typeof restored.profile.membershipStartedAt === 'string' && Number.isFinite(Date.parse(restored.profile.membershipStartedAt))
      ? restored.profile.membershipStartedAt
      : '';
    restored.profile.membershipExpiresAt = typeof restored.profile.membershipExpiresAt === 'string' && Number.isFinite(Date.parse(restored.profile.membershipExpiresAt))
      ? restored.profile.membershipExpiresAt
      : '';
    if (restored.profile.membership && (!restored.profile.membershipStartedAt || !restored.profile.membershipExpiresAt)) {
      restored.profile.membershipStartedAt = new Date().toISOString();
      restored.profile.membershipExpiresAt = membershipExpiry(restored.profile.membershipStartedAt, restored.profile.membership);
      membershipMigrationNeeded = true;
    } else if (!restored.profile.membership) {
      restored.profile.membershipStartedAt = '';
      restored.profile.membershipExpiresAt = '';
    }
    restored.settings.theme = restored.settings.theme === 'dark' ? 'dark' : 'light';
    restored.settings.font = validFonts.includes(restored.settings.font) ? restored.settings.font : defaultState.settings.font;
    restored.settings.fontSize = Math.min(18, Math.max(14, numberOrDefault(restored.settings.fontSize, defaultState.settings.fontSize)));
    restored.settings.notifications = Boolean(restored.settings.notifications);
    restored.settings.sound = Boolean(restored.settings.sound);
    restored.settings.reducedMotion = Boolean(restored.settings.reducedMotion);
    for (const key of ['xp', 'points', 'quizzes', 'correct', 'streak']) restored.stats[key] = numberOrDefault(restored.stats[key]);
    restored.stats.lastActiveDate = typeof restored.stats.lastActiveDate === 'string' ? restored.stats.lastActiveDate : '';
    restored.stats.activeDates = Array.isArray(restored.stats.activeDates) ? restored.stats.activeDates.filter(date => typeof date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(date)) : [];
    restored.stats.completedChallenges = Array.isArray(restored.stats.completedChallenges) ? restored.stats.completedChallenges.filter(id => typeof id === 'string') : [];
    restored.history = restored.history.filter(entry => entry && typeof entry === 'object' && typeof entry.title === 'string' && Number.isFinite(Date.parse(entry.date)))
      .map(entry => ({
        quizId: typeof entry.quizId === 'string' ? entry.quizId : '',
        title: entry.title.slice(0, 100),
        category: categories.some(category => category.id === entry.category) ? entry.category : '',
        correct: numberOrDefault(entry.correct),
        total: Math.max(1, numberOrDefault(entry.total, 1)),
        xp: numberOrDefault(entry.xp),
        premiumQuiz: Boolean(entry.premiumQuiz),
        date: entry.date
      })).slice(0, 100);
    restored.certificates = restored.certificates.filter(certificate =>
      certificate && typeof certificate.id === 'string' && /^[A-Z0-9-]{8,40}$/.test(certificate.id) &&
      typeof certificate.quizId === 'string' && typeof certificate.title === 'string' &&
      Number.isFinite(Date.parse(certificate.completionDate)) &&
      restored.history.some(entry => entry.quizId === certificate.quizId && entry.total > 0 && entry.correct === entry.total)
    ).map(certificate => ({
      id: certificate.id,
      quizId: certificate.quizId,
      title: certificate.title.slice(0, 100),
      studentName: typeof certificate.studentName === 'string' ? certificate.studentName.slice(0, 40) : restored.profile.name,
      achievement: 'Perfect Score',
      level: typeof certificate.level === 'string' ? certificate.level.slice(0, 40) : 'Mastery',
      completionDate: certificate.completionDate
    })).slice(0, 100);
    return restored;
  } catch (error) {
    console.error('Unable to read saved Atlas Learn demo data.', error);
    storageReadFailed = true;
    return structuredClone(defaultState);
  }
}

let state = loadState();
let activePage = 'home';
let activeQuiz = null;
let quizSession = null;
let timerId = null;
let selectedCategory = 'all';
let searchQuery = '';
let leaderboardPeriod = 'weekly';
let leaderboardCategory = 'all';
let authMode = 'signin';
let selectedPremiumPlan = state.profile.membership || 'monthly';
let demoCheckoutOpen = false;
let membershipExpiryTimer = null;
let certificatePreviewId = null;
let verificationId = null;
let reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

const main = document.getElementById('main-content');
const toastRegion = document.getElementById('toast-region');

function escapeHTML(value) {
  return String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
}
function initials(name) {
  return (name.trim().split(/\s+/).slice(0, 2).map(part => part[0] || '').join('') || 'AL').toUpperCase();
}
function persist() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(state));
    return true;
  } catch (error) {
    console.error('Unable to save Atlas Learn demo data.', error);
    showToast('Your browser could not save this change. Check its storage settings.', 'warning');
    return false;
  }
}
if (membershipMigrationNeeded) persist();
function showToast(message, type = '') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  toastRegion.append(toast);
  window.setTimeout(() => toast.remove(), 3400);
}
function todayKey(date = new Date()) {
  const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 10);
}
function startOfWeek(date = new Date()) {
  const result = new Date(date);
  result.setHours(0, 0, 0, 0);
  const day = (result.getDay() + 6) % 7;
  result.setDate(result.getDate() - day);
  return result;
}
function formatDate(iso) {
  return new Date(iso).toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
}
function categoryFor(id) { return categories.find(category => category.id === id); }
function completedInCurrentWeek() {
  const weekStart = startOfWeek();
  return state.history.filter(entry => new Date(entry.date) >= weekStart).length;
}
function completedInCurrentMonth() {
  const now = new Date();
  return state.history.filter(entry => {
    const date = new Date(entry.date);
    return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
  }).length;
}
function membershipExpiry(startedAt, plan) {
  const expiry = new Date(startedAt);
  const day = expiry.getDate();
  expiry.setDate(1);
  if (plan === 'yearly') expiry.setFullYear(expiry.getFullYear() + 1);
  else expiry.setMonth(expiry.getMonth() + 1);
  const lastDay = new Date(expiry.getFullYear(), expiry.getMonth() + 1, 0).getDate();
  expiry.setDate(Math.min(day, lastDay));
  return expiry.toISOString();
}
function membershipStatus() {
  // This local entitlement is demo-only; production access must come from a verified backend.
  const plan = state.profile.membership;
  const startedAt = state.profile.membershipStartedAt;
  const expiresAt = state.profile.membershipExpiresAt;
  const isActive = Boolean(plan && Number.isFinite(Date.parse(expiresAt)) && Date.parse(expiresAt) > Date.now());
  return { plan, startedAt, expiresAt, isActive, isExpired: Boolean(plan && !isActive) };
}
function hasActivePremiumMembership() {
  return membershipStatus().isActive;
}
function scheduleMembershipExpiry() {
  if (membershipExpiryTimer) window.clearTimeout(membershipExpiryTimer);
  const membership = membershipStatus();
  if (!membership.isActive) return;
  const remaining = Date.parse(membership.expiresAt) - Date.now();
  membershipExpiryTimer = window.setTimeout(() => {
    if (hasActivePremiumMembership()) {
      scheduleMembershipExpiry();
      return;
    }
    if (activeQuiz?.premium && quizSession && !quizSession.finished) {
      finishQuiz();
      return;
    }
    render();
    showToast('Atlas Plus demo membership expired. Premium access is now locked.', 'warning');
  }, Math.min(remaining, 2147483000));
}
function premiumQuizAccessAllowed(quiz) {
  return !quiz?.premium || hasActivePremiumMembership();
}
function formatMembershipDate(value) {
  return Number.isFinite(Date.parse(value))
    ? new Date(value).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })
    : 'Not available';
}
function saveDemoMembership(plan) {
  if (!['monthly', 'yearly'].includes(plan)) return false;
  const previous = {
    membership: state.profile.membership,
    membershipStartedAt: state.profile.membershipStartedAt,
    membershipExpiresAt: state.profile.membershipExpiresAt
  };
  const startedAt = new Date().toISOString();
  state.profile.membership = plan;
  state.profile.membershipStartedAt = startedAt;
  state.profile.membershipExpiresAt = membershipExpiry(startedAt, plan);
  if (persist()) return true;
  Object.assign(state.profile, previous);
  return false;
}
function returnToFreeDemo() {
  const previous = {
    membership: state.profile.membership,
    membershipStartedAt: state.profile.membershipStartedAt,
    membershipExpiresAt: state.profile.membershipExpiresAt
  };
  state.profile.membership = null;
  state.profile.membershipStartedAt = '';
  state.profile.membershipExpiresAt = '';
  if (persist()) return true;
  Object.assign(state.profile, previous);
  return false;
}
function expireDemoMembershipNow() {
  const previous = state.profile.membershipExpiresAt;
  state.profile.membershipExpiresAt = new Date(Date.now() - 1000).toISOString();
  if (persist()) return true;
  state.profile.membershipExpiresAt = previous;
  return false;
}
function premiumQuizHistory(predicate = () => true) {
  return state.history.filter(entry => entry.premiumQuiz && predicate(entry));
}
function premiumChallenges() {
  const now = new Date();
  const weekKey = todayKey(startOfWeek());
  const monthKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
  const weeklyCount = premiumQuizHistory(entry => new Date(entry.date) >= startOfWeek()).length;
  const monthlyPerfect = premiumQuizHistory(entry => {
    const date = new Date(entry.date);
    return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear() && entry.correct === entry.total;
  }).length;
  return [
    { id: `plus-weekly-${weekKey}`, title: 'Plus Weekly Focus', description: 'Complete 2 Atlas Plus quizzes this week.', progress: Math.min(weeklyCount, 2), target: 2, xp: 80 },
    { id: `plus-perfect-${monthKey}`, title: 'Plus Precision', description: 'Earn a perfect score in an Atlas Plus quiz this month.', progress: Math.min(monthlyPerfect, 1), target: 1, xp: 120 }
  ];
}
function totalXpForPeriod(period) {
  const now = new Date();
  return state.history.filter(entry => {
    const date = new Date(entry.date);
    if (period === 'weekly') return date >= startOfWeek();
    if (period === 'monthly') return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
    return true;
  }).reduce((sum, entry) => sum + entry.xp, 0);
}
function levelInfo() {
  const level = Math.floor(state.stats.xp / 250) + 1;
  return { level, current: state.stats.xp % 250, next: 250 };
}
function achievements() {
  const history = state.history;
  const premiumHistory = premiumQuizHistory();
  return [
    { id: 'first', name: 'First Steps', description: 'Complete your first quiz.', icon: '🌱', earned: state.stats.quizzes >= 1 },
    { id: 'perfect', name: 'Perfect Score', description: 'Get every question right in a quiz.', icon: '💎', earned: history.some(entry => entry.correct === entry.total) },
    { id: 'math', name: 'Number Navigator', description: 'Complete a Mathematics quiz.', icon: '🔢', earned: history.some(entry => entry.category === 'math') },
    { id: 'programmer', name: 'Code Explorer', description: 'Complete a Programming quiz.', icon: '💻', earned: history.some(entry => entry.category === 'code') },
    { id: 'streak', name: 'Week of Wonder', description: 'Reach a 7-day learning streak.', icon: '🔥', earned: state.stats.streak >= 7 },
    { id: 'champion', name: 'Quiz Champion', description: 'Complete 10 quizzes.', icon: '🏆', earned: state.stats.quizzes >= 10 },
    { id: 'science', name: 'Curious Mind', description: 'Complete a Science quiz.', icon: '🧪', earned: history.some(entry => entry.category === 'science') },
    { id: 'history', name: 'Time Traveler', description: 'Complete a History quiz.', icon: '⌛', earned: history.some(entry => entry.category === 'history') },
    { id: 'plus-scholar', name: 'Atlas Plus Scholar', description: 'Complete an Atlas Plus quiz.', icon: '♛', premium: true, earned: premiumHistory.length >= 1 },
    { id: 'plus-precision', name: 'Plus Precision', description: 'Earn a perfect score in an Atlas Plus quiz.', icon: '✦', premium: true, earned: premiumHistory.some(entry => entry.total > 0 && entry.correct === entry.total) },
    { id: 'plus-power', name: 'Plus Power', description: 'Complete 5 Atlas Plus quizzes.', icon: '🏆', premium: true, earned: premiumHistory.length >= 5 }
  ];
}
function quizTitle(id) { return quizzes.find(quiz => quiz.id === id)?.title || 'Quiz'; }

function certificateId() {
  let id;
  do {
    const token = globalThis.crypto?.randomUUID?.() || `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}`;
    id = `AL-${token.replace(/[^a-z0-9]/gi, '').toUpperCase()}`;
  } while (state.certificates.some(certificate => certificate.id === id));
  return id;
}
function earnedPerfectQuiz() {
  return state.history.find(entry => entry.total > 0 && entry.correct === entry.total) || null;
}
function getOrCreateCertificate(entry) {
  if (!entry || entry.total <= 0 || entry.correct !== entry.total) return null;
  const existing = state.certificates.find(certificate => certificate.quizId === entry.quizId && certificate.completionDate === entry.date);
  if (existing) return existing;
  const certificate = {
    id: certificateId(),
    quizId: entry.quizId,
    title: entry.title,
    studentName: state.profile.name,
    achievement: 'Perfect Score',
    level: entry.correct === entry.total ? 'Mastery' : 'Completed',
    completionDate: entry.date
  };
  state.certificates.unshift(certificate);
  state.certificates = state.certificates.slice(0, 100);
  persist();
  return certificate;
}
function certificateMarkup(certificate, compact = false) {
  const verifyUrl = `${location.origin}${location.pathname}#verify=${encodeURIComponent(certificate.id)}`;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${compact ? '112x112' : '144x144'}&margin=5&data=${encodeURIComponent(verifyUrl)}`;
  const completionDate = new Date(certificate.completionDate).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
  return `<article class="certificate-document ${compact ? 'certificate-document-compact' : ''}" id="certificate-print-target">
    <div class="certificate-border">
      <header class="certificate-header"><span class="certificate-brand-mark" aria-hidden="true"><svg viewBox="0 0 40 40"><path d="M20 4 36 11v9c0 8.5-6.2 13.1-16 16C10.2 28.1 4 28.5 4 20v-9L20 4Z"/><path d="m10 15 10-5 10 5-10 5-10-5Zm3 6c4-2 10-2 14 0v7c-4-2-10-2-14 0v-7Zm7-1v9"/></svg></span><span class="certificate-brand-name">ATLAS <strong>LEARN</strong></span><span class="certificate-header-divider"></span><span class="certificate-issuer">LEARNING ACHIEVEMENT</span></header>
      <div class="certificate-laurel" aria-hidden="true">✦ &nbsp; ♛ &nbsp; ✦</div>
      <div class="certificate-kicker">CERTIFICATE OF ACHIEVEMENT</div>
      <h2>This certificate is proudly presented to</h2>
      <div class="certificate-student">${escapeHTML(certificate.studentName)}</div>
      <div class="certificate-name-rule"></div>
      <p class="certificate-description">For demonstrating exceptional knowledge and earning a perfect score in</p>
      <div class="certificate-course">${escapeHTML(certificate.title)}</div>
      <div class="certificate-achievement">${escapeHTML(certificate.achievement)} <span>·</span> ${escapeHTML(certificate.level)}</div>
      <footer class="certificate-footer"><div class="certificate-date"><span>COMPLETION DATE</span><strong>${completionDate}</strong></div><div class="certificate-id"><span>CERTIFICATE ID</span><strong>${escapeHTML(certificate.id)}</strong><small>Verify with QR code</small></div><img class="certificate-qr" src="${qrUrl}" alt="QR code to verify certificate ${escapeHTML(certificate.id)}"></footer>
      <div class="certificate-demo-note">Awarded for quiz achievement, not for purchasing a membership. Demo certificate — verification is limited to this browser profile.</div>
    </div>
  </article>`;
}
function verifyCertificatePage() {
  const certificate = state.certificates.find(item => item.id === verificationId);
  const achieved = certificate && state.history.some(entry =>
    entry.quizId === certificate.quizId && entry.date === certificate.completionDate &&
    entry.total > 0 && entry.correct === entry.total
  );
  if (!certificate || !achieved) {
    return `${pageHeading('ATLAS LEARN CERTIFICATE CHECK', 'Certificate not found', 'This local demo could not verify that certificate in this browser profile.')}
      <div class="certificate-verification invalid"><span aria-hidden="true">!</span><div><strong>Not verified</strong><p>Demo certificates are stored locally. A certificate cannot be independently verified from another device without a production verification service.</p></div></div><button class="secondary-button" data-page="premium">Back to Premium</button>`;
  }
  return `${pageHeading('ATLAS LEARN CERTIFICATE CHECK', 'Certificate verified', 'A matching quiz achievement was found in this browser profile.')}
    <div class="certificate-verification valid"><span aria-hidden="true">✓</span><div><strong>Verified in this browser</strong><p>This is a local demo check, not a server-issued credential.</p></div></div>
    ${certificateMarkup(certificate, true)}
    <button class="secondary-button" data-page="premium">Back to Premium</button>`;
}

function renderNav() {
  const nav = document.getElementById('nav-list');
  nav.innerHTML = navItems.map(([id, label, icon], index) =>
    `${index === 3 ? '<div class="nav-separator"></div>' : ''}<a href="#${id}" class="nav-item ${activePage === id ? 'active' : ''}" data-page="${id}" ${activePage === id ? 'aria-current="page"' : ''}>${icons[icon]}<span>${label}</span></a>`
  ).join('');
}
function renderUser() {
  const user = state.profile.signedIn ? state.profile.name : 'Guest learner';
  const membershipLabel = hasActivePremiumMembership()
    ? 'Atlas Plus demo member'
    : membershipStatus().isExpired ? 'Demo membership expired' : state.profile.signedIn ? 'Local demo profile' : 'Guest demo';
  document.getElementById('sidebar-user').innerHTML = `
    <span class="user-avatar">${escapeHTML(initials(user))}</span>
    <div class="sidebar-user-copy"><strong>${escapeHTML(user)}</strong><span>${membershipLabel}</span></div>
    <button class="icon-button" type="button" aria-label="Manage demo profile" data-page="${state.profile.signedIn ? 'profile' : 'auth'}">${icons.profile}</button>`;
  const avatar = document.getElementById('top-avatar');
  avatar.textContent = initials(user);
}
function pageHeading(eyebrow, title, description, action = '') {
  return `<div class="page-heading"><div><div class="eyebrow">${eyebrow}</div><h1>${title}</h1><p>${description}</p></div>${action}</div>`;
}
function statCard(icon, tone, label, value, note) {
  return `<article class="stat-card"><span class="stat-icon ${tone}">${icons[icon]}</span><div class="stat-copy"><span>${label}</span><strong>${value}</strong><small>${note}</small></div></article>`;
}
function quizMark(category) {
  const item = categoryFor(category);
  return `<span class="category-mark ${category}">${item?.emoji || '✦'}</span>`;
}
function quizListRow(quiz) {
  const category = categoryFor(quiz.category);
  return `<div class="quiz-row">${quizMark(quiz.category)}<div class="quiz-row-copy"><strong>${escapeHTML(quiz.title)}</strong><span>${escapeHTML(category?.name || '')} · ${quiz.questions.length} questions · ${quiz.duration} min</span></div><button class="quiz-row-arrow" type="button" data-start-quiz="${quiz.id}" aria-label="Start ${escapeHTML(quiz.title)}">${icons.arrow}</button></div>`;
}
function weekStrip() {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const today = new Date();
  const monday = startOfWeek(today);
  return days.map((label, index) => {
    const date = new Date(monday);
    date.setDate(monday.getDate() + index);
    const key = todayKey(date);
    const complete = state.stats.activeDates.includes(key);
    const current = key === todayKey();
    return `<div class="week-day ${complete ? 'done' : ''} ${current ? 'today' : ''}"><span>${complete ? '✓' : date.getDate()}</span>${label}</div>`;
  }).join('');
}
function historyMarkup(limit = 4) {
  if (!state.history.length) return '<div class="recent-empty">Your quiz journey starts with one good question.</div>';
  return state.history.slice(0, limit).map(entry => {
    const category = categoryFor(entry.category);
    return `<div class="history-entry"><span class="history-medal">${category?.emoji || '✦'}</span><div class="history-copy"><strong>${escapeHTML(entry.title)}</strong><span>${formatDate(entry.date)} · ${entry.correct}/${entry.total} correct</span></div><span class="history-score">+${entry.xp} XP</span></div>`;
  }).join('');
}
function dashboardPage() {
  const firstName = escapeHTML(state.profile.name.split(/\s+/)[0] || 'Learner');
  const recommendation = quizzes.find(quiz => !quiz.premium && !state.history.some(entry => entry.quizId === quiz.id)) || quizzes[0];
  const completedThisWeek = completedInCurrentWeek();
  const achievement = achievements().find(item => !item.earned);
  return `
    <section class="welcome-banner">
      <div class="welcome-copy">
        <div class="welcome-label"><span>✦</span> YOUR PERSONAL LEARNING SPACE</div>
        <h1>Good ${new Date().getHours() < 12 ? 'morning' : new Date().getHours() < 17 ? 'afternoon' : 'evening'}, ${firstName}.</h1>
        <p>Every question is a chance to discover something new. Ready to make today count?</p>
        <button type="button" class="primary-button" data-start-quiz="${recommendation.id}">Start today's quiz ${icons.arrow}</button>
      </div>
      <div class="banner-art" aria-hidden="true"><span class="orbit"></span><span class="float-token one">✦</span><span class="float-token two">✓</span><span class="float-token three">•</span><span class="book-illustration"><svg viewBox="0 0 48 48"><path d="M8 11c7-2 12-.5 16 3 4-3.5 9-5 16-3v24c-7-2-12-.5-16 3-4-3.5-9-5-16-3V11Z" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/><path d="M24 14v24M13 18c3-.5 6 0 8 1.5M13 24c3-.5 6 0 8 1.5m14-7c-3-.5-6 0-8 1.5m8 4.5c-3-.5-6 0-8 1.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></span></div>
    </section>
    <section class="stat-grid" aria-label="Your learning at a glance">
      ${statCard('bolt', 'violet', 'Total experience', `${state.stats.xp} XP`, `Level ${levelInfo().level} learner`)}
      ${statCard('trophy', 'coral', 'Quizzes completed', state.stats.quizzes, state.stats.quizzes ? `${state.stats.correct} correct answers` : 'Your first quiz awaits')}
      ${statCard('explore', 'mint', 'Learning streak', `${state.stats.streak} ${state.stats.streak === 1 ? 'day' : 'days'}`, 'A little practice adds up')}
      ${statCard('rewards', 'blue', 'Achievement badges', `${achievements().filter(item => item.earned).length} / ${achievements().length}`, 'Earned through real quizzes')}
    </section>
    <section class="dashboard-grid">
      <div class="section-card">
        <div class="section-heading"><div><h2>Picked for your next session</h2><p>A good place to keep your momentum.</p></div><button class="text-button" type="button" data-page="explore">Explore all ${icons.arrow}</button></div>
        <div class="quiz-list">${[recommendation, ...quizzes.filter(quiz => !quiz.premium && quiz.id !== recommendation.id).slice(0, 2)].map(quizListRow).join('')}</div>
      </div>
      <div class="section-card streak-card">
        <div class="streak-top"><div><div class="eyebrow" style="color:#c28f3b">YOUR STREAK</div><div class="streak-count">${state.stats.streak} <span style="font-size:1rem">days</span></div><p>Keep showing up for yourself.</p></div><span class="streak-flame" aria-hidden="true">🔥</span></div>
        <div class="week-days">${weekStrip()}</div><div class="goal-progress"><span style="width:${Math.min(100, completedThisWeek / 3 * 100)}%"></span></div>
        <div class="challenge-caption"><span>Weekly goal</span><span>${Math.min(completedThisWeek, 3)} / 3 quizzes</span></div>
      </div>
    </section>
    <section class="bottom-grid">
      <div class="section-card"><div class="section-heading"><div><h2>Recent activity</h2><p>Your latest learning moments.</p></div><button class="text-button" type="button" data-page="profile">View profile ${icons.arrow}</button></div>${historyMarkup(4)}</div>
      <div class="section-card"><div class="section-heading"><div><h2>On the horizon</h2><p>One small goal, one satisfying unlock.</p></div></div>${achievement ? `<div class="next-achievement"><span class="achievement-lock">${achievement.icon}</span><div><strong>${achievement.name}</strong><span>${achievement.description}</span></div></div>` : '<div class="next-achievement"><span class="achievement-lock">🏆</span><div><strong>All badges earned!</strong><span>What a learning journey.</span></div></div>'}<button type="button" class="text-button" style="margin-top:11px" data-page="rewards">See all rewards ${icons.arrow}</button></div>
    </section>`;
}

function quizCard(quiz) {
  const category = categoryFor(quiz.category);
  const isLocked = !premiumQuizAccessAllowed(quiz);
  return `<article class="quiz-card">${`<div class="quiz-card-top">${quizMark(quiz.category)}<span class="difficulty ${quiz.difficulty.toLowerCase()}">${quiz.difficulty}</span></div>`}
    <h3>${escapeHTML(quiz.title)}</h3><p>${escapeHTML(quiz.description)}</p>
    <div class="quiz-card-meta"><span>${icons.clock}${quiz.duration} min</span><span>${quiz.questions.length} questions</span><span>${escapeHTML(category?.name || '')}</span></div>
    ${isLocked ? `<div class="quiz-lock-preview"><span>${icons.lock} ATLAS PLUS PREVIEW</span><p>${escapeHTML(quiz.description)}</p><button type="button" class="lock-note" data-page="plus">Explore Atlas Plus ${icons.arrow}</button></div>` : `<button type="button" class="primary-button" data-start-quiz="${quiz.id}">Start quiz ${icons.arrow}</button>`}</article>`;
}
function explorePage() {
  const filtered = quizzes.filter(quiz => {
    const categoryMatch = selectedCategory === 'all' || quiz.category === selectedCategory;
    const searchMatch = `${quiz.title} ${quiz.description} ${categoryFor(quiz.category)?.name || ''}`.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });
  return `${pageHeading('KEEP YOUR CURIOSITY CLOSE', 'Explore quizzes', 'Short, thoughtful sessions to grow your knowledge.', '<button type="button" class="secondary-button" data-page="categories">Browse categories</button>')}
    <div class="filter-bar"><label class="search-box">${icons.search}<input id="quiz-search" type="search" value="${escapeHTML(searchQuery)}" placeholder="Search quizzes..." aria-label="Search quizzes"></label>
      <button class="filter-chip ${selectedCategory === 'all' ? 'active' : ''}" data-category-filter="all">All topics</button>
      ${categories.map(category => `<button class="filter-chip ${selectedCategory === category.id ? 'active' : ''}" data-category-filter="${category.id}">${category.emoji} ${category.name}</button>`).join('')}
    </div>
    ${filtered.length ? `<div class="quiz-grid">${filtered.map(quizCard).join('')}</div>` : '<div class="empty-state"><div class="empty-icon">🔎</div><h3>No quizzes found</h3><p>Try a different search or topic.</p><button class="text-button" data-clear-search>Clear filters</button></div>'}`;
}
function categoriesPage() {
  return `${pageHeading('FIND YOUR NEXT FOCUS', 'Explore by category', 'Pick a topic, follow your curiosity, and learn at your own pace.')}
    <div class="category-grid">${categories.map(category => {
      const count = quizzes.filter(quiz => quiz.category === category.id).length;
      return `<article class="category-card" tabindex="0" role="button" data-open-category="${category.id}" aria-label="Explore ${category.name} quizzes">${quizMark(category.id)}<h3>${category.name}</h3><p>${category.description}</p><div class="category-card-footer"><span>${count} quizzes</span><span>Explore →</span></div></article>`;
    }).join('')}</div>
    <div class="demo-warning" style="margin-top:18px">Quizzes are available in demo mode. A connected learning catalog could add new courses and question sets.</div>`;
}

function startQuiz(quizId) {
  const quiz = quizzes.find(item => item.id === quizId);
  if (!quiz) { showToast('That quiz could not be found.', 'warning'); return; }
  if (!premiumQuizAccessAllowed(quiz)) {
    navigate('plus');
    showToast('Atlas Plus membership is required to start this quiz. Your progress is unchanged.', 'warning');
    return;
  }
  if (timerId) window.clearInterval(timerId);
  activeQuiz = quiz;
  const questions = quiz.questions.map((question, index) => ({ ...question, originalIndex: index }));
  for (let index = questions.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [questions[index], questions[swapIndex]] = [questions[swapIndex], questions[index]];
  }
  quizSession = { questions, current: 0, selected: null, answers: [], remaining: 0, finished: false, timerEnabled: true };
  navigate('quiz');
}
function quizPage() {
  if (!activeQuiz || !quizSession) return explorePage();
  if (quizSession.finished) return resultPage();
  const question = quizSession.questions[quizSession.current];
  const progress = (quizSession.current / quizSession.questions.length) * 100;
  return `<div class="quiz-shell">
    <div class="quiz-topline"><button class="text-button" type="button" data-page="explore">← Exit quiz</button><span class="quiz-category-label">${categoryFor(activeQuiz.category)?.emoji || ''} ${escapeHTML(activeQuiz.title)}</span><span class="timer-pill ${quizSession.remaining <= 15 && quizSession.timerEnabled ? 'urgent' : ''}" id="quiz-timer">${icons.clock}<span>${quizSession.timerEnabled ? formatTimer(quizSession.remaining) : 'Untimed'}</span></span></div>
    <div class="quiz-settings"><span>Difficulty</span><select id="quiz-difficulty" aria-label="Quiz difficulty">${quizzes.filter(quiz => quiz.category === activeQuiz.category && (!quiz.premium || premiumQuizAccessAllowed(quiz))).map(quiz => `<option value="${quiz.id}" ${quiz.id === activeQuiz.id ? 'selected' : ''}>${quiz.difficulty}</option>`).join('')}</select><label class="switch-label" style="display:inline-flex;align-items:center;gap:7px;margin-left:auto;color:var(--muted);font-size:.72rem"><input type="checkbox" id="timer-toggle" ${quizSession.timerEnabled ? 'checked' : ''}> Timer</label></div>
    <div class="quiz-progress-copy"><span>Question ${quizSession.current + 1} of ${quizSession.questions.length}</span><span>${Math.round(progress)}% complete</span></div><div class="quiz-progress-track"><span style="width:${progress}%"></span></div>
    <section class="question-card" aria-labelledby="question-title"><div class="question-number">QUESTION ${String(quizSession.current + 1).padStart(2, '0')}</div><h2 id="question-title">${escapeHTML(question.prompt)}</h2>
      <div class="answer-list">${question.options.map((option, index) => {
        const answered = quizSession.selected !== null;
        const correct = index === question.answer;
        const selected = index === quizSession.selected;
        let klass = '';
        if (answered && correct) klass = 'correct';
        else if (answered && selected) klass = 'incorrect';
        return `<button type="button" class="answer-option ${klass}" data-answer="${index}" ${answered ? 'disabled' : ''}><span class="answer-key">${String.fromCharCode(65 + index)}</span><span>${escapeHTML(option)}</span></button>`;
      }).join('')}</div>
      <div class="answer-explanation ${quizSession.selected !== null ? `visible ${quizSession.selected === question.answer ? '' : 'wrong'}` : ''}" id="answer-explanation">${quizSession.selected === question.answer ? 'That’s right! ' : 'Not quite. '} ${escapeHTML(question.explanation)}</div>
      <div class="quiz-controls"><button type="button" class="secondary-button" data-quiz-back ${quizSession.current === 0 ? 'disabled' : ''}>Previous</button><button type="button" class="primary-button" data-quiz-next ${quizSession.selected === null ? 'disabled' : ''}>${quizSession.current === quizSession.questions.length - 1 ? 'See results' : 'Next question'} ${icons.arrow}</button></div>
    </section></div>`;
}
function formatTimer(seconds) {
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
}
function startTimer() {
  if (timerId) window.clearInterval(timerId);
  if (!quizSession || quizSession.finished || !quizSession.timerEnabled) return;
  if (!quizSession.remaining) quizSession.remaining = activeQuiz.duration * 60;
  timerId = window.setInterval(() => {
    if (!quizSession || quizSession.finished || !quizSession.timerEnabled) return;
    quizSession.remaining -= 1;
    const timer = document.getElementById('quiz-timer');
    if (timer) {
      timer.classList.toggle('urgent', quizSession.remaining <= 15);
      timer.querySelector('span').textContent = formatTimer(quizSession.remaining);
    }
    if (quizSession.remaining <= 0) {
      window.clearInterval(timerId);
      quizSession.timerEnabled = false;
      finishQuiz();
      showToast('Time is up. Your answers have been saved.', 'warning');
    }
  }, 1000);
}
function resultPage() {
  if (!activeQuiz || !quizSession) return explorePage();
  const correct = quizSession.answers.filter(answer => answer.correct).length;
  const xpEarned = quizSession.xpEarned || 0;
  const percentage = Math.round(correct / quizSession.questions.length * 100);
  const incorrect = quizSession.answers.filter(answer => !answer.correct);
  return `<div class="quiz-shell"><section class="result-card"><div class="result-icon">${percentage === 100 ? '💎' : percentage >= 60 ? '🎉' : '🌱'}</div><div class="eyebrow">SESSION COMPLETE</div><h2>${percentage === 100 ? 'A perfect round!' : percentage >= 60 ? 'Look at you go!' : 'Every try teaches you something.'}</h2><p>You finished ${escapeHTML(activeQuiz.title)}. Keep your curiosity moving.</p>
    <div class="result-stats"><div><strong>${correct}/${quizSession.questions.length}</strong><span>Correct answers</span></div><div><strong>${percentage}%</strong><span>Score</span></div><div><strong>+${xpEarned}</strong><span>XP earned</span></div></div>
    <div class="result-actions"><button type="button" class="primary-button" data-retry-quiz>Try again ${icons.arrow}</button><button type="button" class="secondary-button" data-page="explore">Explore more</button>${incorrect.length ? '<button type="button" class="secondary-button" data-review-answers>Review missed questions</button>' : ''}</div>
    ${incorrect.length ? `<div class="review-list" id="review-list" hidden>${incorrect.map(answer => `<div class="review-item"><strong>${escapeHTML(answer.prompt)}</strong><span>Your answer: ${escapeHTML(answer.options[answer.selected] ?? 'No answer')}</span><span class="correct-answer">Correct answer: ${escapeHTML(answer.options[answer.answer])}</span><span>${escapeHTML(answer.explanation)}</span></div>`).join('')}</div>` : ''}
  </section></div>`;
}
function answerQuestion(index) {
  if (!quizSession || quizSession.selected !== null) return;
  quizSession.selected = index;
  const question = quizSession.questions[quizSession.current];
  quizSession.answers[quizSession.current] = { ...question, selected: index, correct: index === question.answer };
  if (state.settings.sound) playFeedback(index === question.answer);
  render();
}
function playFeedback(correct) {
  try {
    const audio = new AudioContext();
    const oscillator = audio.createOscillator();
    const gain = audio.createGain();
    oscillator.type = 'sine';
    oscillator.frequency.value = correct ? 660 : 240;
    gain.gain.setValueAtTime(.055, audio.currentTime);
    gain.gain.exponentialRampToValueAtTime(.001, audio.currentTime + .13);
    oscillator.connect(gain); gain.connect(audio.destination);
    oscillator.start(); oscillator.stop(audio.currentTime + .13);
    oscillator.onended = () => audio.close();
  } catch (error) {
    console.warn('Audio feedback is unavailable in this browser.', error);
  }
}
function finishQuiz() {
  if (!activeQuiz || !quizSession || quizSession.finished) return;
  if (!premiumQuizAccessAllowed(activeQuiz)) {
    if (timerId) window.clearInterval(timerId);
    timerId = null;
    activeQuiz = null;
    quizSession = null;
    navigate('plus');
    showToast('Atlas Plus access expired before the quiz was completed. No quiz result or reward was recorded.', 'warning');
    return;
  }
  const earnedBefore = new Set(achievements().filter(item => item.earned).map(item => item.id));
  quizSession.finished = true;
  if (timerId) window.clearInterval(timerId);
  const correct = quizSession.answers.filter(answer => answer?.correct).length;
  const xp = 25 + correct * 10;
  quizSession.answers = quizSession.questions.map((question, index) => quizSession.answers[index] || { ...question, selected: null, correct: false });
  quizSession.xpEarned = xp;
  state.stats.xp += xp;
  state.stats.points += correct * 10;
  state.stats.quizzes += 1;
  state.stats.correct += correct;
  const today = todayKey();
  if (!state.stats.activeDates.includes(today)) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    state.stats.streak = state.stats.lastActiveDate === todayKey(yesterday) ? state.stats.streak + 1 : 1;
    state.stats.activeDates.push(today);
  }
  state.stats.lastActiveDate = today;
  state.stats.activeDates = state.stats.activeDates.slice(-60);
  const now = new Date();
  const historyEntry = { quizId: activeQuiz.id, title: activeQuiz.title, category: activeQuiz.category, correct, total: quizSession.questions.length, xp, premiumQuiz: Boolean(activeQuiz.premium), date: now.toISOString() };
  state.history.unshift(historyEntry);
  state.history = state.history.slice(0, 100);
  const challengeRewards = [];
  if (completedInCurrentWeek() >= 3) challengeRewards.push({ id: `weekly-${todayKey(startOfWeek())}`, xp: 50 });
  if (completedInCurrentMonth() >= 10) challengeRewards.push({ id: `monthly-${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`, xp: 150 });
  if (activeQuiz.premium) {
    premiumChallenges().filter(challenge => challenge.progress >= challenge.target)
      .forEach(challenge => challengeRewards.push({ id: challenge.id, xp: challenge.xp }));
  }
  let bonusXp = 0;
  for (const challenge of challengeRewards) {
    if (state.stats.completedChallenges.includes(challenge.id)) continue;
    state.stats.completedChallenges.push(challenge.id);
    bonusXp += challenge.xp;
  }
  if (bonusXp) {
    quizSession.xpEarned += bonusXp;
    state.stats.xp += bonusXp;
    historyEntry.xp += bonusXp;
  }
  persist();
  navigate('quiz');
  if (bonusXp) showToast(`Challenge complete! You earned ${xp + bonusXp} XP, including a ${bonusXp} XP bonus.`, 'success');
  else {
    const newlyEarned = achievements().filter(item => item.earned && !earnedBefore.has(item.id));
    if (newlyEarned.length) showToast(`Achievement unlocked: ${newlyEarned.map(item => item.name).join(', ')}!`, 'success');
    else showToast(`Quiz complete — ${xp} XP added to your progress.`, 'success');
  }
}

function rewardsPage() {
  const level = levelInfo();
  const weekCount = completedInCurrentWeek();
  const monthCount = completedInCurrentMonth();
  const weeklyDone = weekCount >= 3;
  const monthlyDone = monthCount >= 10;
  return `${pageHeading('SMALL STEPS. REAL PROGRESS.', 'Your rewards', 'Every badge and XP point comes from a quiz you completed.')}
    <section class="rewards-hero"><div class="level-card"><div class="level-top"><div><div class="eyebrow" style="color:rgba(255,255,255,.7)">YOUR CURRENT LEVEL</div><div class="level-number">Level ${level.level}</div></div><span class="level-badge">✦</span></div><h3>Curious Explorer</h3><p>${level.next - level.current} XP to your next level</p><div class="xp-track"><span style="width:${level.current / level.next * 100}%"></span></div><div class="xp-label"><span>${level.current} XP</span><span>${level.next} XP</span></div></div>
      <div class="challenge-panel"><h3>This week, this month</h3><p>Choose a little challenge and make learning part of your rhythm.</p>
        <div class="challenge-item"><span class="challenge-icon">📅</span><div class="challenge-copy"><strong>Weekly Wonder</strong><span>${weeklyDone ? 'Completed this week!' : `${Math.min(weekCount, 3)} of 3 quizzes this week`}</span></div><span class="challenge-reward">${weeklyDone ? '✓ Done' : `+${3 - Math.min(weekCount, 3)} to go`}</span></div>
        <div class="challenge-item"><span class="challenge-icon">🌙</span><div class="challenge-copy"><strong>Monthly Explorer</strong><span>${monthlyDone ? 'Completed this month!' : `${Math.min(monthCount, 10)} of 10 quizzes this month`}</span></div><span class="challenge-reward">${monthlyDone ? '✓ Done' : `+${10 - Math.min(monthCount, 10)} to go`}</span></div>
      </div>
    </section>
    <div class="section-heading" style="margin-top:24px"><div><h2>Your achievement collection</h2><p>${achievements().filter(item => item.earned).length} earned · Earn the rest by learning</p></div></div>
    <div class="badge-grid">${achievements().map(item => `<article class="badge-card ${item.earned ? '' : 'locked'} ${item.premium ? 'premium-achievement' : ''}"><span class="badge-icon">${item.earned ? item.icon : '🔒'}</span><strong>${escapeHTML(item.name)}${item.premium ? ' · Plus' : ''}</strong><p>${item.earned ? item.description : `Locked · ${item.description}`}</p></article>`).join('')}</div>
    <div class="demo-warning" style="margin-top:17px">Badges and challenge XP are earned through completed quiz activity. Atlas Plus badges require actual Atlas Plus quiz results; enabling a demo membership never grants them.</div>`;
}

const demoPlayers = [
  { name: 'Jordan Lee', weekly: 450, monthly: 1680, global: 4820, badges: 8, category: 'code' },
  { name: 'Sam Rivera', weekly: 390, monthly: 1400, global: 4250, badges: 7, category: 'science' },
  { name: 'Taylor Chen', weekly: 320, monthly: 1270, global: 3990, badges: 6, category: 'math' },
  { name: 'Morgan Patel', weekly: 280, monthly: 1090, global: 3410, badges: 6, category: 'history' },
  { name: 'Casey Brooks', weekly: 220, monthly: 860, global: 2940, badges: 5, category: 'code' },
  { name: 'Avery Kim', weekly: 180, monthly: 720, global: 2380, badges: 4, category: 'science' },
  { name: 'Riley James', weekly: 150, monthly: 560, global: 2050, badges: 4, category: 'math' }
];
function leaderboardPage() {
  const periodKey = leaderboardPeriod === 'weekly' ? 'weekly' : leaderboardPeriod === 'monthly' ? 'monthly' : 'global';
  const allPlayers = [...demoPlayers];
  if (state.stats.xp > 0) allPlayers.push({ name: state.profile.name, weekly: totalXpForPeriod('weekly'), monthly: totalXpForPeriod('monthly'), global: state.stats.xp, badges: achievements().filter(item => item.earned).length, category: null, isYou: true });
  let players = allPlayers.filter(player => leaderboardCategory === 'all' || player.category === leaderboardCategory || player.isYou);
  players.sort((left, right) => right[periodKey] - left[periodKey]);
  const userIndex = players.findIndex(player => player.isYou);
  return `${pageHeading('A LITTLE FRIENDLY MOTIVATION', 'Leaderboard', 'Compare learning progress — no contact details are shown.', `<div class="leaderboard-tabs" role="tablist" aria-label="Leaderboard period">${[['weekly','This week'],['monthly','This month'],['global','All time']].map(([key,label]) => `<button type="button" role="tab" aria-selected="${leaderboardPeriod === key}" class="${leaderboardPeriod === key ? 'active' : ''}" data-leader-period="${key}">${label}</button>`).join('')}</div>`)}
    <div class="filter-bar"><span style="color:var(--muted);font-size:.76rem">Topic:</span><select id="leaderboard-category" aria-label="Filter leaderboard by category" class="filter-chip"><option value="all">All categories</option>${categories.map(category => `<option value="${category.id}" ${leaderboardCategory === category.id ? 'selected' : ''}>${category.name}</option>`).join('')}</select></div>
    ${userIndex >= 0 ? `<div class="your-rank-note">You’re at <strong>#${userIndex + 1}</strong> on this ${leaderboardPeriod === 'global' ? 'all-time' : leaderboardPeriod} board with <strong>${players[userIndex][periodKey]} XP</strong>. Demo names and scores are sample data.</div>` : '<div class="your-rank-note">Complete your first quiz to see your personal score here. Sample entries are for demonstration only.</div>'}
    <section class="leaderboard-panel" aria-label="Leaderboard rankings"><div class="leaderboard-header"><span>RANK</span><span>LEARNER</span><span>XP</span><span>BADGES</span></div>
    ${players.map((player, index) => `<div class="leaderboard-row"><span class="rank-number ${index < 3 ? `top-${index + 1}` : ''}">${index === 0 ? '♛' : `#${index + 1}`}</span><div class="rank-user"><span class="rank-avatar">${escapeHTML(initials(player.name))}</span><div><strong>${escapeHTML(player.name)}${player.isYou ? ' (you)' : ''}</strong><small>${player.isYou ? 'Your demo profile' : `${categoryFor(player.category)?.name || 'Curious learner'} · Demo sample`}</small></div></div><span class="rank-xp">${player[periodKey].toLocaleString()}</span><span class="rank-badges">✦ ${player.badges}</span></div>`).join('')}
    </section><p class="leaderboard-disclaimer">Sample learner names and scores are fictional demonstration entries; they are not live global rankings. A real shared leaderboard requires backend accounts and consent.</p>`;
}

function profilePage() {
  const name = escapeHTML(state.profile.name);
  const email = escapeHTML(state.profile.email || '');
  const earned = achievements().filter(item => item.earned);
  const membershipLabel = membershipStatusLabel();
  const membership = membershipStatus();
  return `${pageHeading('YOUR LEARNING, YOUR WAY', 'My profile', 'A personal snapshot of your progress on this browser.')}
    <section class="profile-hero"><div class="profile-avatar-large">${escapeHTML(initials(state.profile.name))}</div><div class="profile-info"><h2>${name}</h2><p>${email || 'No email added'} · Local demo profile</p><span class="profile-tag ${membership.isActive ? 'premium-profile-tag' : ''}">${membership.isActive ? '♛' : '✦'} ${membershipLabel}</span></div><button type="button" class="secondary-button" data-page="premium">Manage membership</button><button type="button" class="secondary-button" data-scroll-edit>Edit profile</button></section>
    ${membership.plan ? `<section class="membership-management ${membership.isExpired ? 'expired' : ''}" aria-label="Membership details"><div><span class="eyebrow">${membership.isExpired ? 'DEMO MEMBERSHIP EXPIRED' : 'CURRENT DEMO MEMBERSHIP'}</span><h2>Atlas Plus ${membership.plan === 'yearly' ? 'Yearly' : 'Monthly'}</h2><p>Started ${formatMembershipDate(membership.startedAt)} · ${membership.isExpired ? 'Expired' : 'Renews/ends'} ${formatMembershipDate(membership.expiresAt)}</p></div><button type="button" class="${membership.isExpired ? 'primary-button gold-button' : 'secondary-button'}" data-page="premium">${membership.isExpired ? 'Choose a plan again' : 'Manage plan'} ${icons.arrow}</button></section>` : ''}
    <div class="profile-stats"><div class="profile-stat"><strong>${state.stats.quizzes}</strong><span>Quizzes completed</span></div><div class="profile-stat"><strong>${state.stats.points}</strong><span>Learning points</span></div><div class="profile-stat"><strong>${earned.length}</strong><span>Badges earned</span></div></div>
    <section class="form-card" id="profile-edit"><h3>Profile details</h3><p>Only saved in this browser. This is not a verified account.</p><form id="profile-form"><div class="form-grid"><div class="field"><label for="profile-name">Display name</label><input id="profile-name" name="name" value="${name}" maxlength="40" required autocomplete="nickname"></div><div class="field"><label for="profile-email">Email (optional)</label><input id="profile-email" name="email" type="email" value="${email}" maxlength="120" autocomplete="email"></div></div><div class="form-actions"><button type="submit" class="primary-button">Save changes</button><span class="form-footnote">No password or authentication credentials are stored.</span></div></form></section>
    <section class="form-card" style="margin-top:15px"><div class="section-heading"><div><h3>Recent quiz activity</h3><p>Your recent sessions and earned experience.</p></div><button class="text-button" type="button" data-page="rewards">View rewards</button></div>${historyMarkup(8)}</section>
    <div class="danger-zone"><div><strong>${state.profile.signedIn ? 'Sign out of demo mode' : 'Continue as a demo learner'}</strong><span>${state.profile.signedIn ? 'Progress remains saved in this browser and is not protected by an account.' : 'Enter a display name to set up a local demo profile.'}</span></div><button type="button" class="danger-button" data-sign-out>${state.profile.signedIn ? 'Sign out' : 'Continue in demo mode'}</button></div>`;
}
function membershipStatusLabel() {
  const membership = membershipStatus();
  if (membership.isActive) return `Atlas Plus ${membership.plan === 'yearly' ? 'Yearly' : 'Monthly'} · Demo`;
  if (membership.isExpired) return `Atlas Plus ${membership.plan === 'yearly' ? 'Yearly' : 'Monthly'} · Expired`;
  return 'Free member';
}

function settingsPage() {
  return `${pageHeading('MAKE IT FEEL LIKE YOURS', 'Settings', 'Personalize your learning space. Changes save on this device.')}
    <div class="settings-layout">
      <section class="settings-card"><div class="settings-card-head"><span class="settings-card-icon">${icons.explore}</span><div><h3>Appearance</h3><p>Choose a comfortable look for every session.</p></div></div>
        <div class="setting-row"><div><strong>Color theme</strong><p>Switch between a light and dark workspace.</p></div><select id="setting-theme" aria-label="Color theme"><option value="light" ${state.settings.theme === 'light' ? 'selected' : ''}>Light</option><option value="dark" ${state.settings.theme === 'dark' ? 'selected' : ''}>Dark</option></select></div>
        <div class="setting-row"><div><strong>Font family</strong><p>Choose the reading style you like best.</p></div><select id="setting-font" aria-label="Font family">${['DM Sans','Inter','Poppins','Montserrat','Outfit','Roboto','Space Grotesk','Nunito','Nunito Sans'].map(font => `<option ${state.settings.font === font ? 'selected' : ''}>${font}</option>`).join('')}</select></div>
        <div class="setting-row"><div><strong>Interface text size</strong><p>Fine-tune text size to your preference.</p></div><div class="font-size-control"><input type="range" id="setting-font-size" min="14" max="18" value="${state.settings.fontSize}" aria-label="Interface text size"><span class="font-size-value" id="font-size-value">${state.settings.fontSize}px</span></div></div>
      </section>
      <section class="settings-card"><div class="settings-card-head"><span class="settings-card-icon">${icons.settings}</span><div><h3>Learning preferences</h3><p>Adjust helpful cues and motion in the interface.</p></div></div>
        <div class="setting-row"><div><strong>Learning reminders</strong><p>Browser-only preference. No notifications are sent in demo mode.</p></div><button class="switch" type="button" role="switch" aria-checked="${state.settings.notifications}" aria-label="Learning reminders" data-setting-toggle="notifications"></button></div>
        <div class="setting-row"><div><strong>Answer sound</strong><p>Play a subtle tone after you answer a question.</p></div><button class="switch" type="button" role="switch" aria-checked="${state.settings.sound}" aria-label="Answer sound" data-setting-toggle="sound"></button></div>
        <div class="setting-row"><div><strong>Reduce motion</strong><p>Limit transitions and animation.</p></div><button class="switch" type="button" role="switch" aria-checked="${state.settings.reducedMotion}" aria-label="Reduce motion" data-setting-toggle="reducedMotion"></button></div>
      </section>
      <div class="demo-warning">Demo mode: settings and quiz activity are stored in this browser’s local storage. This is not a secure user account or cloud backup. Never enter a password or payment information.</div>
    </div>`;
}

function authPage() {
  return `${pageHeading('A FRESH PAGE, A FRESH START', 'Your learning profile', 'Save a display name for this browser and make the experience yours.')}
    <section class="sign-in-panel"><div class="demo-warning" style="margin-bottom:18px"><strong>Demonstration mode only.</strong> No secure authentication service is configured. Do not enter a password or sensitive information.</div>
    <h2>${authMode === 'signup' ? 'Set up your demo profile' : 'Welcome back, learner'}</h2><p>This creates a local display profile only. Your progress stays in this browser and is not synced or protected by an account.</p>
    <form id="demo-profile-form"><div class="field"><label for="demo-name">Display name</label><input id="demo-name" name="name" maxlength="40" autocomplete="nickname" value="${state.profile.signedIn ? escapeHTML(state.profile.name) : ''}" required placeholder="What should we call you?"></div>
    <div class="field"><label for="demo-email">Email (optional)</label><input id="demo-email" name="email" type="email" maxlength="120" autocomplete="email" value="${state.profile.signedIn ? escapeHTML(state.profile.email) : ''}" placeholder="Only displayed in this browser"></div>
    <button type="submit" class="primary-button">${authMode === 'signup' ? 'Create local demo profile' : 'Continue in demo mode'} ${icons.arrow}</button></form>
    <div class="auth-switch">${authMode === 'signup' ? 'Already have a local profile?' : 'New to Atlas Learn?'} <button type="button" data-auth-switch>${authMode === 'signup' ? 'Continue with this browser' : 'Set up demo profile'}</button></div>
    <div class="auth-switch"><button type="button" data-forgot-password>Forgot password?</button> Password recovery requires a secure account provider.</div>
    <div class="auth-switch"><button type="button" data-page="home">Continue as guest</button></div></section>`;
}

const pageLabels = { home: 'Home', explore: 'Explore quizzes', categories: 'Categories', premium: 'Premium', plus: 'Atlas Plus', rewards: 'Rewards', leaderboard: 'Leaderboard', profile: 'My profile', settings: 'Settings', auth: 'Demo profile', quiz: 'Quiz session', verify: 'Certificate verification' };
function navigate(page) {
  if (timerId && page !== 'quiz') window.clearInterval(timerId);
  activePage = page;
  if (location.hash !== `#${page}`) history.replaceState(null, '', `#${page}`);
  render();
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('mobile-scrim').classList.remove('visible');
  document.getElementById('mobile-menu').setAttribute('aria-expanded', 'false');
  if (page === 'quiz' && quizSession && !quizSession.finished && quizSession.timerEnabled) startTimer();
  if (!reducedMotionQuery.matches && document.activeElement?.closest?.('.sidebar')) main.focus({ preventScroll: true });
}
function applyPreferences() {
  document.documentElement.classList.toggle('theme-dark', state.settings.theme === 'dark');
  document.documentElement.style.setProperty('--font', `'${state.settings.font}', sans-serif`);
  document.documentElement.style.setProperty('--base-size', `${state.settings.fontSize}px`);
  document.documentElement.style.scrollBehavior = state.settings.reducedMotion ? 'auto' : 'smooth';
  document.documentElement.classList.toggle('reduce-motion', state.settings.reducedMotion);
}
function render() {
  applyPreferences();
  renderNav();
  renderUser();
  document.getElementById('current-page-label').textContent = pageLabels[activePage] || 'Home';
  const page = {
    home: dashboardPage, explore: explorePage, categories: categoriesPage, premium: premiumPage, plus: plusDashboardPage,
    rewards: rewardsPage, leaderboard: leaderboardPage, profile: profilePage, settings: settingsPage,
    auth: authPage, quiz: quizPage, verify: verifyCertificatePage
  }[activePage] || dashboardPage;
  main.innerHTML = page();
  bindPageInteractions();
  document.title = `${pageLabels[activePage] || 'Home'} · Atlas Learn`;
  scheduleMembershipExpiry();
}

function plusDashboardPage() {
  const membership = membershipStatus();
  const premiumQuizzes = quizzes.filter(quiz => quiz.premium);
  const plusHistory = premiumQuizHistory();
  const plusXp = plusHistory.reduce((total, entry) => total + entry.xp, 0);
  const perfectScores = plusHistory.filter(entry => entry.total > 0 && entry.correct === entry.total).length;
  const challenges = premiumChallenges();
  const earnedPlusBadges = achievements().filter(item => item.premium && item.earned);
  if (!membership.isActive) {
    return `${pageHeading('YOUR NEXT LEVEL', 'Atlas Plus dashboard', 'A preview of exclusive study sessions, member challenges, and earned rewards.', '<button type="button" class="secondary-button" data-page="premium">Compare plans</button>')}
      <section class="plus-locked-panel"><div class="plus-lock-emblem">♛</div><div class="eyebrow">${membership.isExpired ? 'YOUR LAST DEMO PLAN EXPIRED' : 'MEMBER PREVIEW'}</div><h2>Make room for deeper learning.</h2><p>Atlas Plus unlocks advanced quizzes, member challenges, detailed Plus statistics, and exclusive achievement badges.</p>
        <div class="plus-preview-grid">${premiumQuizzes.map(quiz => `<article class="plus-preview-card"><span class="plus-preview-icon">${quizMark(quiz.category)}</span><strong>${escapeHTML(quiz.title)}</strong><span>${escapeHTML(quiz.difficulty)} · ${quiz.questions.length} questions</span><span class="plus-preview-lock">${icons.lock} Member access</span></article>`).join('')}</div>
        <div class="plus-challenge-preview">${challenges.map(challenge => `<div><span class="plus-challenge-icon">✦</span><div><strong>${escapeHTML(challenge.title)}</strong><span>${escapeHTML(challenge.description)}</span></div><b>+${challenge.xp} XP</b></div>`).join('')}</div>
        <button type="button" class="primary-button gold-button" data-page="premium">${membership.isExpired ? 'Choose a new Atlas Plus plan' : 'Explore Atlas Plus plans'} ${icons.arrow}</button>
        <div class="demo-payment-note"><strong>Demo only.</strong> Activating a plan locally does not make a payment or provide a secure subscription.</div>
      </section>`;
  }
  return `${pageHeading('EXCLUSIVE TO ATLAS PLUS', 'Your Plus learning space', 'Advanced sessions, member-only challenges, and progress earned through your own quiz results.', '<button type="button" class="secondary-button" data-page="premium">Manage membership</button>')}
    <section class="plus-member-banner"><span class="plus-lock-emblem" aria-hidden="true">♛</span><div><span class="plus-member-chip">ATLAS PLUS MEMBER · DEMO</span><h2>Welcome to your next level.</h2><p>${escapeHTML(membershipStatusLabel())} · Active through ${formatMembershipDate(membership.expiresAt)}</p></div></section>
    <section class="plus-stats-grid" aria-label="Atlas Plus performance statistics">
      ${statCard('trophy', 'violet', 'Plus quizzes completed', plusHistory.length, 'Based on completed member sessions')}
      ${statCard('bolt', 'blue', 'Plus XP earned', plusXp, 'Experience from Atlas Plus quizzes')}
      ${statCard('check', 'mint', 'Perfect Plus scores', perfectScores, 'Actual perfect quiz results')}
      ${statCard('rewards', 'coral', 'Plus badges earned', earnedPlusBadges.length, 'Unlocked through quiz performance')}
    </section>
    <section class="plus-dashboard-grid"><div class="section-card"><div class="section-heading"><div><h2>Member challenges</h2><p>Complete eligible Atlas Plus quizzes to earn bonus XP.</p></div><span class="plus-section-mark">♛</span></div>
      <div class="plus-challenge-list">${challenges.map(challenge => {
        const complete = challenge.progress >= challenge.target;
        const claimed = state.stats.completedChallenges.includes(challenge.id);
        const progress = Math.round(challenge.progress / challenge.target * 100);
        return `<article class="plus-challenge-card ${complete ? 'complete' : ''}"><div class="plus-challenge-card-top"><span class="plus-challenge-icon">${complete ? '✓' : '✦'}</span><span class="plus-challenge-reward">${complete || claimed ? 'Reward earned' : `+${challenge.xp} XP`}</span></div><h3>${escapeHTML(challenge.title)}</h3><p>${escapeHTML(challenge.description)}</p><div class="plus-progress-track" role="progressbar" aria-label="${escapeHTML(challenge.title)}" aria-valuemin="0" aria-valuemax="${challenge.target}" aria-valuenow="${challenge.progress}"><span style="width:${progress}%"></span></div><div class="plus-progress-copy">${challenge.progress} / ${challenge.target} ${complete ? '· Completed from quiz activity' : 'completed'}</div></article>`;
      }).join('')}</div>
    </div><div class="section-card"><div class="section-heading"><div><h2>Plus achievement collection</h2><p>${earnedPlusBadges.length} earned · Learn to unlock the rest.</p></div></div>
      <div class="plus-badge-list">${achievements().filter(item => item.premium).map(item => `<div class="plus-badge-row ${item.earned ? 'earned' : 'locked'}"><span>${item.earned ? item.icon : '🔒'}</span><div><strong>${escapeHTML(item.name)}</strong><small>${escapeHTML(item.description)}</small></div><b>${item.earned ? 'EARNED' : 'LOCKED'}</b></div>`).join('')}</div>
    </div></section>
    <section class="section-card plus-quizzes-card"><div class="section-heading"><div><h2>Exclusive quizzes</h2><p>Available while your demo membership is active.</p></div><span class="plus-section-mark">♛</span></div><div class="quiz-grid">${premiumQuizzes.map(quizCard).join('')}</div></section>
    <section class="membership-management"><div><span class="eyebrow">MEMBERSHIP MANAGEMENT</span><h2>Atlas Plus ${membership.plan === 'yearly' ? 'Yearly' : 'Monthly'} · Demo</h2><p>Started ${formatMembershipDate(membership.startedAt)} · Expires ${formatMembershipDate(membership.expiresAt)}</p></div><button type="button" class="secondary-button" data-page="premium">Manage or return to Free ${icons.arrow}</button></section>
    <div class="demo-warning" style="margin-top:16px">This is a browser-local demonstration. A future production service must verify membership and quiz entitlements on a secure backend.</div>`;
}

function premiumPage() {
  const membership = membershipStatus();
  const currentPlan = membership.isActive ? membership.plan : null;
  const perfectQuiz = earnedPerfectQuiz();
  const earnedCertificate = perfectQuiz && state.certificates.find(certificate =>
    certificate.quizId === perfectQuiz.quizId && certificate.completionDate === perfectQuiz.date
  );
  const previewCertificate = state.certificates.find(certificate => certificate.id === certificatePreviewId);
  const membershipLabel = membershipStatusLabel();
  const selectedPlan = selectedPremiumPlan;
  const benefits = {
    free: ['Basic quizzes', 'Limited daily challenges', 'Basic achievements'],
    monthly: ['Unlimited quizzes', 'Exclusive challenges', 'Advanced performance statistics', 'Premium badges', 'Eligible downloadable certificates'],
    yearly: ['All monthly Premium benefits', 'Exclusive yearly rewards', 'Special certificate designs', 'Priority access to new features']
  };
  const planCard = (plan, title, price, cadence, highlight = false) => `
    <article class="membership-plan ${highlight ? 'featured' : ''} ${selectedPlan === plan ? 'selected' : ''}">
      <div class="membership-plan-top"><span class="membership-plan-icon">${plan === 'free' ? '✦' : '♛'}</span>${highlight ? '<span class="popular-label">BEST VALUE</span>' : ''}</div>
      <h3>${title}</h3><div class="membership-price">${price}<small>${cadence}</small></div>
      <ul class="membership-benefits">${benefits[plan].map(benefit => `<li><span aria-hidden="true">✓</span>${benefit}</li>`).join('')}</ul>
      ${plan === 'free'
        ? `<button type="button" class="plan-select-button free-plan-button" data-free-plan ${currentPlan ? '' : 'disabled'}>${currentPlan ? 'Switch to Free' : 'Current plan'}</button>`
        : `<button type="button" class="plan-select-button ${selectedPlan === plan ? 'selected' : ''}" data-select-plan="${plan}" aria-pressed="${selectedPlan === plan}" ${currentPlan === plan ? 'disabled' : ''}>${currentPlan === plan ? 'Current demo plan' : selectedPlan === plan ? 'Selected' : `Choose ${plan}`}</button>`}
    </article>`;
  return `${pageHeading('A LITTLE EXTRA ROOM TO GROW', 'Choose your learning level', 'Flexible options for curious minds. Pick a plan to preview your membership.')}
    <section class="premium-hero premium-hero-upgraded"><div class="premium-hero-copy"><div class="premium-brand-lockup"><span class="premium-crown" aria-hidden="true">♛</span><span>ATLAS <strong>PLUS</strong></span></div><h2>More room to grow.</h2><p>Thoughtful challenges, deeper insights, and rewards for every step of your learning journey.</p><button type="button" class="primary-button gold-button" data-premium-cta>${currentPlan ? 'Manage demo membership' : 'Upgrade with a demo membership'} ${icons.arrow}</button></div><div class="graduation-photo-frame"><img src="https://images.pexels.com/photos/7713351/pexels-photo-7713351.jpeg?auto=compress&amp;fit=crop&amp;w=900&amp;q=85" alt="Graduates raising their hands to toss mortarboards; an inset shows a hand holding a diploma beside a graduation cap." loading="lazy"><span class="photo-gold-seal" aria-hidden="true">♛</span><span class="photo-caption">CELEBRATE EVERY MILESTONE</span></div></section>
    <div class="membership-status premium-status ${membership.isExpired ? 'expired' : ''}"><span class="status-crown" aria-hidden="true">${membership.isExpired ? '!' : '♛'}</span><strong>Membership status: ${membershipLabel}</strong><span>${currentPlan ? `Started ${formatMembershipDate(membership.startedAt)} · Expires ${formatMembershipDate(membership.expiresAt)} · Demo only, no payment was made.` : membership.isExpired ? `Expired ${formatMembershipDate(membership.expiresAt)}. Choose a plan to reactivate demo access.` : 'Choose a plan to preview the demo membership. No payment is collected.'}</span></div>
    <div class="plans-heading" id="membership-plans"><div><h2>Choose your membership</h2><p>Switch between monthly and yearly options at any time in this demo.</p></div><span class="billing-toggle-label">Secure checkout is not connected</span></div>
    <section class="membership-plans-grid" aria-label="Membership options">
      ${planCard('free', 'Free', '$0', ' / forever')}
      ${planCard('monthly', 'Premium Monthly', '$4.99', ' / month')}
      ${planCard('yearly', 'Premium Yearly', '$39.99', ' / year', true)}
    </section>
    <div class="demo-payment-note"><strong>Demonstration checkout only.</strong> Activating a demo membership does not charge you or process a payment. No card details are requested or stored.</div>
    ${demoCheckoutOpen && selectedPlan !== currentPlan ? `<section class="demo-checkout" aria-label="Demo membership confirmation"><span class="checkout-crown" aria-hidden="true">♛</span><div><h3>Preview ${selectedPlan === 'yearly' ? 'Premium Yearly' : 'Premium Monthly'}?</h3><p>This enables a local demo membership indicator only. <strong>No payment will be made.</strong></p></div><div class="checkout-actions"><button type="button" class="secondary-button" data-cancel-demo>Not now</button><button type="button" class="primary-button gold-button" data-confirm-demo>Confirm demo membership</button></div></section>` : ''}
    ${membership.plan ? `<section class="membership-management ${membership.isExpired ? 'expired' : ''}"><div><span class="eyebrow">${membership.isExpired ? 'EXPIRED DEMO PLAN' : 'MEMBERSHIP MANAGEMENT'}</span><h2>Atlas Plus ${membership.plan === 'yearly' ? 'Yearly' : 'Monthly'} · ${membership.isExpired ? 'Expired' : 'Demo'}</h2><p>Started ${formatMembershipDate(membership.startedAt)} · Expires ${formatMembershipDate(membership.expiresAt)}${membership.isActive ? ' · Access ends on the expiry date unless renewed.' : ''}</p></div><div class="membership-management-actions">${membership.isActive ? '<button type="button" class="secondary-button" data-free-plan>Return to Free</button><button type="button" class="text-button" data-expire-demo>Test expired state</button>' : '<button type="button" class="primary-button gold-button" data-select-plan="' + membership.plan + '" aria-pressed="false">Renew demo plan ' + icons.arrow + '</button>'}</div></section>` : ''}
    <section class="certificate-panel"><div class="certificate-art" aria-hidden="true"><span>🎓</span><small>AWARDED</small></div><div class="certificate-copy"><div class="eyebrow">EARNED, NEVER BOUGHT</div><h2>Your learning deserves to be celebrated.</h2><p>Earn the <strong>Perfect Score</strong> achievement in a real quiz to unlock certificate eligibility. Membership can provide access to the printable design, but never grants the achievement.</p>
      ${!perfectQuiz
        ? `<div class="certificate-locked">Complete a quiz with a perfect score to earn certificate eligibility.</div><button type="button" class="secondary-button certificate-download" disabled>Certificate locked until earned ${icons.lock}</button>`
        : !hasActivePremiumMembership()
          ? `<div class="certificate-earned">✓ Perfect Score earned in <strong>${escapeHTML(perfectQuiz.title)}</strong></div><div class="certificate-locked">Your achievement is earned. Choose a demo membership to preview the eligible certificate design.</div><button type="button" class="secondary-button certificate-download" data-page="premium">Explore membership options ${icons.arrow}</button>`
          : !earnedCertificate
            ? `<div class="certificate-earned">✓ Perfect Score earned in <strong>${escapeHTML(perfectQuiz.title)}</strong></div><button type="button" class="primary-button certificate-download" data-create-certificate="${escapeHTML(perfectQuiz.quizId)}">Create certificate preview ${icons.arrow}</button>`
            : `<div class="certificate-earned">✓ Achievement verified · Certificate ID <strong>${escapeHTML(earnedCertificate.id)}</strong></div><div class="certificate-actions"><button type="button" class="secondary-button certificate-download" data-preview-certificate="${escapeHTML(earnedCertificate.id)}">Preview certificate</button><button type="button" class="primary-button certificate-download" data-print-certificate="${escapeHTML(earnedCertificate.id)}">Print / save as PDF ${icons.arrow}</button></div>`
      }</div></section>
    ${previewCertificate && earnedPerfectQuiz() && hasActivePremiumMembership() ? `<section class="certificate-preview-section" aria-label="Certificate preview"><div class="certificate-preview-toolbar"><div><div class="eyebrow">CERTIFICATE PREVIEW</div><h2>Ready to celebrate?</h2></div><button type="button" class="text-button" data-close-certificate-preview>Close preview</button></div>${certificateMarkup(previewCertificate)}<div class="certificate-preview-footer"><span>Print this preview and choose <strong>Save as PDF</strong> in your browser’s print dialog.</span><button type="button" class="primary-button" data-print-certificate="${escapeHTML(previewCertificate.id)}">Print / save as PDF ${icons.arrow}</button></div></section>` : ''}
    <div class="future-note"><strong>Demo membership only.</strong> This experience does not process payments or create a real subscription. A production checkout requires a trusted payment provider and server-side membership verification.</div>`;
}

function bindPageInteractions() {
  const search = document.getElementById('quiz-search');
  if (search) search.addEventListener('input', event => { searchQuery = event.target.value; const position = search.selectionStart; render(); const next = document.getElementById('quiz-search'); next.focus(); next.setSelectionRange(position, position); });
  document.getElementById('setting-theme')?.addEventListener('change', event => { state.settings.theme = event.target.value; persist(); render(); showToast('Theme preference saved.', 'success'); });
  document.getElementById('setting-font')?.addEventListener('change', event => { state.settings.font = event.target.value; persist(); render(); });
  document.getElementById('setting-font-size')?.addEventListener('input', event => { state.settings.fontSize = Number(event.target.value); persist(); applyPreferences(); document.getElementById('font-size-value').textContent = `${state.settings.fontSize}px`; });
  document.getElementById('leaderboard-category')?.addEventListener('change', event => { leaderboardCategory = event.target.value; render(); });
  document.querySelectorAll('[data-setting-toggle]').forEach(button => button.addEventListener('click', () => {
    const key = button.dataset.settingToggle;
    state.settings[key] = !state.settings[key];
    persist();
    render();
    showToast(`${key === 'sound' ? 'Answer sound' : key === 'notifications' ? 'Learning reminders preference' : 'Reduced motion'} ${state.settings[key] ? 'enabled' : 'disabled'}.`, 'success');
  }));
  document.querySelectorAll('[data-category-filter]').forEach(button => button.addEventListener('click', () => { selectedCategory = button.dataset.categoryFilter; render(); }));
  document.querySelectorAll('[data-leader-period]').forEach(button => button.addEventListener('click', () => { leaderboardPeriod = button.dataset.leaderPeriod; render(); }));
  document.querySelectorAll('[data-open-category]').forEach(card => {
    const open = () => { selectedCategory = card.dataset.openCategory; searchQuery = ''; navigate('explore'); };
    card.addEventListener('click', open);
    card.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); open(); } });
  });
  document.querySelectorAll('[data-answer]').forEach(button => button.addEventListener('click', () => answerQuestion(Number(button.dataset.answer))));
  document.querySelector('[data-quiz-next]')?.addEventListener('click', () => {
    if (!quizSession || quizSession.selected === null) return;
    if (quizSession.current === quizSession.questions.length - 1) { finishQuiz(); return; }
    quizSession.current += 1;
    quizSession.selected = null;
    render();
  });
  document.querySelector('[data-quiz-back]')?.addEventListener('click', () => {
    if (!quizSession || quizSession.current === 0) return;
    quizSession.current -= 1;
    quizSession.selected = quizSession.answers[quizSession.current]?.selected ?? null;
    render();
  });
  document.getElementById('timer-toggle')?.addEventListener('change', event => {
    quizSession.timerEnabled = event.target.checked;
    if (timerId) window.clearInterval(timerId);
    if (quizSession.timerEnabled && quizSession.remaining === 0) quizSession.remaining = activeQuiz.duration * 60;
    render();
    if (quizSession.timerEnabled) startTimer();
  });
  document.getElementById('quiz-difficulty')?.addEventListener('change', event => startQuiz(event.target.value));
  document.querySelector('[data-retry-quiz]')?.addEventListener('click', () => startQuiz(activeQuiz.id));
  document.querySelector('[data-review-answers]')?.addEventListener('click', () => {
    const review = document.getElementById('review-list');
    review.hidden = !review.hidden;
    if (!review.hidden) review.scrollIntoView({ behavior: state.settings.reducedMotion ? 'auto' : 'smooth', block: 'nearest' });
  });
  document.querySelector('[data-clear-search]')?.addEventListener('click', () => { selectedCategory = 'all'; searchQuery = ''; render(); });
  document.querySelector('[data-scroll-edit]')?.addEventListener('click', () => document.getElementById('profile-edit').scrollIntoView({ behavior: state.settings.reducedMotion ? 'auto' : 'smooth' }));
  document.querySelector('[data-scroll-plans]')?.addEventListener('click', () => document.getElementById('membership-plans').scrollIntoView({ behavior: state.settings.reducedMotion ? 'auto' : 'smooth' }));
  document.querySelectorAll('.graduation-photo-frame img').forEach(image => image.addEventListener('error', () => {
    image.hidden = true;
    showToast('The graduation photo could not load. The Atlas Learn artwork is still available.', 'warning');
  }, { once: true }));
  document.querySelectorAll('.certificate-qr').forEach(image => image.addEventListener('error', () => {
    image.closest('.certificate-footer').classList.add('qr-unavailable');
    showToast('The QR image service is unavailable. Use the certificate ID to identify this local demo record.', 'warning');
  }, { once: true }));
  document.getElementById('profile-form')?.addEventListener('submit', event => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    state.profile.name = String(form.get('name')).trim().slice(0, 40);
    state.profile.email = String(form.get('email')).trim().slice(0, 120);
    state.profile.avatar = initials(state.profile.name);
    persist(); render(); showToast('Your local profile has been updated.', 'success');
  });
  document.getElementById('demo-profile-form')?.addEventListener('submit', event => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name')).trim();
    const email = String(form.get('email')).trim();
    if (name.length < 2) { showToast('Please enter a display name with at least 2 characters.', 'warning'); return; }
    if (email && !event.currentTarget.elements.email.checkValidity()) { showToast('Please enter a valid email address.', 'warning'); return; }
    Object.assign(state.profile, { name: name.slice(0, 40), email: email.slice(0, 120), avatar: initials(name), signedIn: true });
    persist(); navigate('home'); showToast('Demo profile ready. No account or password was created.', 'success');
  });
}

document.addEventListener('click', event => {
  const planChoice = event.target.closest('[data-select-plan]');
  if (planChoice) {
    selectedPremiumPlan = planChoice.dataset.selectPlan;
    demoCheckoutOpen = false;
    render();
    return;
  }
  if (event.target.closest('[data-premium-cta]')) {
    if (selectedPremiumPlan === membershipStatus().plan && hasActivePremiumMembership()) {
      selectedPremiumPlan = 'monthly';
      showToast('Choose a different plan or return to Free to change your active demo membership.', 'warning');
      return;
    }
    demoCheckoutOpen = true;
    render();
    document.querySelector('.demo-checkout')?.scrollIntoView({ behavior: state.settings.reducedMotion ? 'auto' : 'smooth', block: 'nearest' });
    return;
  }
  if (event.target.closest('[data-cancel-demo]')) {
    demoCheckoutOpen = false;
    render();
    return;
  }
  if (event.target.closest('[data-create-certificate]')) {
    const earnedEntry = state.history.find(entry =>
      entry.quizId === event.target.closest('[data-create-certificate]').dataset.createCertificate &&
      entry.total > 0 && entry.correct === entry.total
    );
    if (!hasActivePremiumMembership() || !earnedEntry) {
      showToast('A certificate requires an earned Perfect Score and an eligible membership preview.', 'warning');
      return;
    }
    const certificate = getOrCreateCertificate(earnedEntry);
    if (!certificate) {
      showToast('The earned quiz record could not be verified.', 'warning');
      return;
    }
    certificatePreviewId = certificate.id;
    render();
    document.querySelector('.certificate-preview-section')?.scrollIntoView({ behavior: state.settings.reducedMotion ? 'auto' : 'smooth', block: 'start' });
    showToast('Certificate preview created from your earned Perfect Score.', 'success');
    return;
  }
  const previewButton = event.target.closest('[data-preview-certificate]');
  if (previewButton) {
    const certificate = state.certificates.find(item => item.id === previewButton.dataset.previewCertificate);
    const verified = certificate && state.history.some(entry =>
      entry.quizId === certificate.quizId && entry.date === certificate.completionDate &&
      entry.total > 0 && entry.correct === entry.total
    );
    if (!hasActivePremiumMembership() || !verified) {
      showToast('The certificate needs an eligible demo plan and a matching earned quiz achievement.', 'warning');
      return;
    }
    certificatePreviewId = certificate.id;
    render();
    document.querySelector('.certificate-preview-section')?.scrollIntoView({ behavior: state.settings.reducedMotion ? 'auto' : 'smooth', block: 'start' });
    return;
  }
  if (event.target.closest('[data-close-certificate-preview]')) {
    certificatePreviewId = null;
    render();
    return;
  }
  const printButton = event.target.closest('[data-print-certificate]');
  if (printButton) {
    const certificate = state.certificates.find(item => item.id === printButton.dataset.printCertificate);
    const verified = certificate && state.history.some(entry =>
      entry.quizId === certificate.quizId && entry.date === certificate.completionDate &&
      entry.total > 0 && entry.correct === entry.total
    );
    if (!hasActivePremiumMembership() || !verified) {
      showToast('The certificate needs an eligible demo plan and a matching earned quiz achievement.', 'warning');
      return;
    }
    certificatePreviewId = certificate.id;
    render();
    const printTarget = document.getElementById('certificate-print-target');
    if (!printTarget) {
      showToast('The certificate preview could not be prepared for printing.', 'warning');
      return;
    }
    document.body.classList.add('certificate-print-mode');
    window.addEventListener('afterprint', () => document.body.classList.remove('certificate-print-mode'), { once: true });
    window.print();
    window.setTimeout(() => document.body.classList.remove('certificate-print-mode'), 1500);
    return;
  }
  if (event.target.closest('[data-confirm-demo]')) {
    if (!['monthly', 'yearly'].includes(selectedPremiumPlan) || (selectedPremiumPlan === membershipStatus().plan && hasActivePremiumMembership())) {
      showToast('Choose an available Premium demo plan first.', 'warning');
      return;
    }
    if (!saveDemoMembership(selectedPremiumPlan)) return;
    demoCheckoutOpen = false;
    render();
    showToast(`Atlas Plus ${selectedPremiumPlan} demo access is active until ${formatMembershipDate(state.profile.membershipExpiresAt)}. No payment was made.`, 'success');
    return;
  }
  if (event.target.closest('[data-free-plan]')) {
    if (!membershipStatus().plan) return;
    if (!returnToFreeDemo()) return;
    selectedPremiumPlan = 'monthly';
    demoCheckoutOpen = false;
    render();
    showToast('Switched to the Free demo plan. No payment was made.', 'success');
    return;
  }
  if (event.target.closest('[data-end-demo]')) {
    if (!returnToFreeDemo()) return;
    selectedPremiumPlan = 'monthly';
    demoCheckoutOpen = false;
    render();
    showToast('Demo membership ended. No payment was made.', 'success');
    return;
  }
  if (event.target.closest('[data-expire-demo]')) {
    if (!hasActivePremiumMembership() || !expireDemoMembershipNow()) return;
    render();
    showToast('Demo membership marked expired for testing. Premium quiz access is now locked.', 'success');
    return;
  }
  const button = event.target.closest('[data-page]');
  if (button) { event.preventDefault(); navigate(button.dataset.page); return; }
  const start = event.target.closest('[data-start-quiz]');
  if (start) { startQuiz(start.dataset.startQuiz); return; }
  const signOut = event.target.closest('[data-sign-out]');
  if (signOut) {
    if (state.profile.signedIn) {
      state.profile.signedIn = false;
      state.profile.name = 'Guest learner';
      state.profile.email = '';
      persist(); navigate('auth'); showToast('Demo profile signed out. Local quiz history remains on this device.', 'success');
    } else navigate('auth');
    return;
  }
  if (event.target.closest('[data-auth-switch]')) { authMode = authMode === 'signin' ? 'signup' : 'signin'; render(); return; }
  if (event.target.closest('[data-forgot-password]')) { showToast('Password reset needs a secure authentication provider; none is configured.', 'warning'); return; }
  if (event.target.closest('[data-upgrade]')) { showToast('Membership payments and activation are not configured. No payment information was collected.', 'warning'); }
});

document.getElementById('mobile-menu').addEventListener('click', () => {
  const sidebar = document.getElementById('sidebar');
  const open = !sidebar.classList.contains('open');
  sidebar.classList.toggle('open', open);
  document.getElementById('mobile-scrim').classList.toggle('visible', open);
  document.getElementById('mobile-menu').setAttribute('aria-expanded', String(open));
});
document.getElementById('mobile-scrim').addEventListener('click', () => {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('mobile-scrim').classList.remove('visible');
  document.getElementById('mobile-menu').setAttribute('aria-expanded', 'false');
});
document.getElementById('top-avatar').addEventListener('click', () => navigate(state.profile.signedIn ? 'profile' : 'auth'));
function renderFromLocation() {
  const rawHash = location.hash.slice(1);
  if (rawHash.startsWith('verify=')) {
    try {
      verificationId = decodeURIComponent(rawHash.slice('verify='.length));
    } catch (error) {
      console.warn('Invalid certificate verification identifier.', error);
      verificationId = '';
    }
    activePage = 'verify';
    render();
    return;
  }
  verificationId = null;
  if (pageLabels[rawHash] && rawHash !== 'quiz') navigate(rawHash);
}
window.addEventListener('hashchange', renderFromLocation);
reducedMotionQuery.addEventListener?.('change', applyPreferences);

if (state.stats.lastActiveDate && state.stats.lastActiveDate !== todayKey() && state.stats.lastActiveDate !== todayKey(new Date(Date.now() - 86400000))) {
  state.stats.streak = 0;
  persist();
}
render();
if (location.hash) renderFromLocation();
let hasSavedState = false;
try {
  hasSavedState = localStorage.getItem(storageKey) !== null;
} catch (error) {
  console.error('Browser storage is not available.', error);
  showToast('Browser storage is unavailable. Progress may not persist between sessions.', 'warning');
}
if (storageReadFailed) showToast('Saved demo data could not be read. Fresh local progress has started.', 'warning');
if (!hasSavedState && !storageReadFailed) {
  window.setTimeout(() => showToast('You’re in browser-only demo mode. No account or password is required.', 'warning'), 600);
}
