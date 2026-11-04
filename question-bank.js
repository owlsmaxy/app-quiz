(() => {
  const difficultyRank = { beginner: 0, intermediate: 1, advanced: 2 };
  const questionTypes = ['multiple-choice', 'true-false', 'multiple-answer', 'short-answer', 'numerical'];
  const question = (id, levelId, curriculumId, gradeId, subjectId, topicId, difficulty, type, prompt, options, correctAnswer, explanation, instructions = 'Choose the best answer.') => ({
    id, countryId: 'KE', curriculumId, educationLevelId: levelId, gradeId, subjectId, topicId,
    difficulty, type, prompt, instructions, options, correctAnswer, explanation, keywords: [],
    source: 'sample', sample: true
  });

  const questions = [
    question('q-pp1-count-01', 'pre-primary', 'cbc-kenya', 'pp1', 'pp-mathematics', 'pp-math-counting', 'beginner', 'multiple-choice', 'There are two blocks on the mat. How many blocks are there?', ['1', '2', '3'], '2', 'Count each block once: there are two blocks.'),
    question('q-pp1-count-02', 'pre-primary', 'cbc-kenya', 'pp1', 'pp-mathematics', 'pp-math-counting', 'beginner', 'true-false', 'The number that comes after 2 is 3.', ['True', 'False'], 'True', 'Counting forward gives 1, 2, 3.'),
    question('q-pp2-shape-01', 'pre-primary', 'cbc-kenya', 'pp2', 'pp-mathematics', 'pp-math-shapes', 'beginner', 'multiple-answer', 'Which of these shapes have three sides?', ['Triangle', 'Circle', 'Square'], ['Triangle'], 'A triangle has three sides. A circle has no straight sides and a square has four.'),
    question('q-pp2-shape-02', 'pre-primary', 'cbc-kenya', 'pp2', 'pp-mathematics', 'pp-math-shapes', 'beginner', 'short-answer', 'Write the name of a shape with four equal sides.', [], ['square'], 'A square has four equal sides.', 'Type the name of the shape.'),

    question('q-g4-math-01', 'primary', 'cbc-kenya', 'primary-grade-4', 'primary-math-upper', 'primary-upper-math-fractions', 'beginner', 'multiple-choice', 'A pizza is cut into four equal pieces. What fraction is one piece?', ['1/2', '1/3', '1/4', '4/1'], '1/4', 'One of four equal pieces is one quarter, written 1/4.'),
    question('q-g4-math-02', 'primary', 'cbc-kenya', 'primary-grade-4', 'primary-math-upper', 'primary-upper-math-fractions', 'intermediate', 'multiple-answer', 'Which fractions are equal to one half?', ['1/2', '2/4', '3/4', '4/8'], ['1/2', '2/4', '4/8'], 'Multiplying the numerator and denominator of 1/2 by the same number gives equivalent fractions such as 2/4 and 4/8.'),
    question('q-g4-math-03', 'primary', 'cbc-kenya', 'primary-grade-4', 'primary-math-upper', 'primary-upper-math-fractions', 'beginner', 'short-answer', 'Write one quarter as a fraction.', [], ['1/4', '¼'], 'One quarter means one of four equal parts, or 1/4.', 'Enter a fraction.'),
    question('q-g4-math-04', 'primary', 'cbc-kenya', 'primary-grade-4', 'primary-math-upper', 'primary-upper-math-measure', 'intermediate', 'numerical', 'A ribbon is 8 cm long. You cut off 3 cm. How many centimetres remain?', [], 5, 'Subtract the part cut off from the original length: 8 − 3 = 5 cm.', 'Enter a number.'),
    question('q-g4-science-01', 'primary', 'cbc-kenya', 'primary-grade-4', 'primary-science-technology', 'primary-science-observation', 'beginner', 'true-false', 'A careful observation describes something you can notice using your senses or a measuring tool.', ['True', 'False'], 'True', 'Observations record what is noticed or measured.'),
    question('q-g4-science-02', 'primary', 'cbc-kenya', 'primary-grade-4', 'primary-science-technology', 'primary-science-materials', 'intermediate', 'multiple-choice', 'Which property can you compare by carefully looking at two objects?', ['Colour', 'Their future price', 'Their owner’s name'], 'Colour', 'Colour is directly observable. Price and ownership are not properties you can determine just by looking.'),

    question('q-g7-science-01', 'secondary', 'cbc-kenya', 'cbc-grade-7', 'cbc-junior-science', 'cbc-junior-science-inquiry', 'beginner', 'multiple-choice', 'A learner changes the amount of light reaching a plant and records its growth. What is being investigated?', ['How light relates to plant growth', 'How heavy the pot is', 'The colour of the ruler'], 'How light relates to plant growth', 'The investigation changes light exposure and observes plant growth.'),
    question('q-g7-science-02', 'secondary', 'cbc-kenya', 'cbc-grade-7', 'cbc-junior-science', 'cbc-junior-science-inquiry', 'intermediate', 'short-answer', 'What should you change in a fair test if you want to test the effect of light?', [], ['light', 'amount of light', 'light exposure'], 'Change the amount of light while keeping other relevant conditions the same.', 'Name the factor being tested.'),
    question('q-f1-biology-01', 'secondary', '844-kenya', '844-form-1', '844-biology', '844-biology-cells', 'beginner', 'true-false', 'Cells are the basic structural units of living organisms.', ['True', 'False'], 'True', 'Cells are the basic structural and functional units of living organisms.'),

    question('q-uni-se-program-01', 'university', 'university-studies', 'university-year-1', 'software-programming', 'software-programming-topic-1', 'beginner', 'multiple-choice', 'What is the first useful step when breaking a complex programming task into smaller parts?', ['Identify the task and its requirements', 'Write random code immediately', 'Ignore the expected result'], 'Identify the task and its requirements', 'Understanding the goal and constraints helps divide a problem into useful smaller tasks.'),
    question('q-uni-se-program-02', 'university', 'university-studies', 'university-year-1', 'software-programming', 'software-programming-topic-1', 'intermediate', 'multiple-answer', 'Which qualities make an algorithm easier to follow?', ['Clear ordered steps', 'A defined start and result', 'Unexplained conflicting instructions'], ['Clear ordered steps', 'A defined start and result'], 'An algorithm needs understandable steps and a clear outcome. Conflicting instructions make it harder to follow.'),
    question('q-uni-se-program-03', 'university', 'university-studies', 'university-year-1', 'software-programming', 'software-programming-topic-2', 'beginner', 'short-answer', 'What is a named place in a program used to hold a value called?', [], ['variable'], 'A variable is a named place used to hold a value.', 'Type the programming term.'),
    question('q-uni-se-web-01', 'university', 'university-studies', 'university-year-1', 'software-web', 'software-web-topic-1', 'beginner', 'true-false', 'Semantic HTML uses elements that communicate the meaning or role of page content.', ['True', 'False'], 'True', 'Semantic elements express the purpose or role of the content they contain.'),
    question('q-uni-se-web-02', 'university', 'university-studies', 'university-year-1', 'software-web', 'software-web-topic-2', 'intermediate', 'numerical', 'A layout container is 600 pixels wide. A column uses 25% of that width. How wide is the column in pixels?', [], 150, '25% is one quarter. 600 ÷ 4 = 150 pixels.', 'Enter a number in pixels.')
  ];

  function normalizeAnswer(value) {
    return String(value ?? '').trim().toLocaleLowerCase().replace(/\s+/g, ' ');
  }
  function validateQuestion(input) {
    if (!input || typeof input !== 'object') return { valid: false, error: 'Question data is required.' };
    const required = ['id', 'countryId', 'curriculumId', 'educationLevelId', 'gradeId', 'subjectId', 'topicId', 'difficulty', 'type', 'prompt', 'instructions', 'explanation'];
    if (required.some(key => typeof input[key] !== 'string' || !input[key].trim())) return { valid: false, error: 'Complete every required question field.' };
    if (!questionTypes.includes(input.type)) return { valid: false, error: 'Choose a supported question format.' };
    if (!Object.hasOwn(difficultyRank, input.difficulty)) return { valid: false, error: 'Choose a supported difficulty.' };
    if (input.prompt.length > 1000 || input.instructions.length > 300 || input.explanation.length > 2000) return { valid: false, error: 'Question text exceeds the allowed length.' };
    const options = Array.isArray(input.options) ? input.options.map(item => String(item).trim()).filter(Boolean) : [];
    if ((input.type === 'multiple-choice' || input.type === 'multiple-answer') && (options.length < 2 || options.length > 8 || new Set(options.map(normalizeAnswer)).size !== options.length)) {
      return { valid: false, error: 'Provide 2–8 unique answer options.' };
    }
    if (input.type === 'true-false' && !(Array.isArray(input.options) && input.options.length === 2 &&
      input.options.includes('True') && input.options.includes('False'))) return { valid: false, error: 'True or False questions need both True and False options.' };
    const answers = input.type === 'multiple-answer'
      ? Array.isArray(input.correctAnswer) ? input.correctAnswer.map(String) : []
      : input.type === 'short-answer'
        ? Array.isArray(input.correctAnswer) ? input.correctAnswer.map(String) : []
        : [input.correctAnswer];
    const numericalAnswerValid = (typeof input.correctAnswer === 'number' ||
      typeof input.correctAnswer === 'string' && Boolean(input.correctAnswer.trim())) &&
      Number.isFinite(Number(input.correctAnswer));
    const tolerance = input.tolerance ?? 0;
    const numericalToleranceValid = (typeof tolerance === 'number' ||
      typeof tolerance === 'string' && Boolean(tolerance.trim())) &&
      Number.isFinite(Number(tolerance)) && Number(tolerance) >= 0;
    if ((input.type === 'multiple-answer' && (!answers.length || answers.some(answer => !options.includes(answer)))) ||
      (input.type === 'multiple-choice' && !options.includes(String(input.correctAnswer))) ||
      (input.type === 'true-false' && !['True', 'False'].includes(String(input.correctAnswer))) ||
      (input.type === 'short-answer' && (!answers.length || answers.some(answer => !answer.trim() || answer.length > 160))) ||
      (input.type === 'numerical' && (!numericalAnswerValid || !numericalToleranceValid))) {
      return { valid: false, error: 'Provide a correct answer that matches this question format.' };
    }
    return {
      valid: true,
      question: {
        ...input,
        id: input.id.trim().slice(0, 100),
        countryId: input.countryId.trim().slice(0, 8),
        curriculumId: input.curriculumId.trim().slice(0, 80),
        educationLevelId: input.educationLevelId.trim().slice(0, 80),
        gradeId: input.gradeId.trim().slice(0, 100),
        subjectId: input.subjectId.trim().slice(0, 100),
        topicId: input.topicId.trim().slice(0, 140),
        prompt: input.prompt.trim(),
        instructions: input.instructions.trim(),
        explanation: input.explanation.trim(),
        options: input.type === 'multiple-choice' || input.type === 'multiple-answer' || input.type === 'true-false' ? options : [],
        correctAnswer: input.type === 'multiple-answer' || input.type === 'short-answer'
          ? [...new Set(answers.map(answer => answer.trim()))]
          : input.type === 'numerical' ? Number(input.correctAnswer) : String(input.correctAnswer),
        tolerance: input.type === 'numerical' ? Number(input.tolerance ?? 0) : undefined,
        keywords: Array.isArray(input.keywords) ? input.keywords.map(String).slice(0, 20) : [],
        sample: input.sample !== false
      }
    };
  }
  function gradeAnswer(questionItem, response) {
    if (!questionItem) return false;
    if (response === null || response === undefined || response === '') return false;
    if (questionItem.type === 'multiple-answer') {
      if (!Array.isArray(response) || !Array.isArray(questionItem.correctAnswer)) return false;
      const actual = [...new Set(response.map(String))].sort();
      const expected = [...new Set(questionItem.correctAnswer.map(String))].sort();
      return actual.length === expected.length && actual.every((value, index) => value === expected[index]);
    }
    if (questionItem.type === 'numerical') {
      const actual = Number(String(response).trim());
      return Number.isFinite(actual) && Math.abs(actual - Number(questionItem.correctAnswer)) <= Number(questionItem.tolerance || 0);
    }
    const normalized = normalizeAnswer(response);
    const accepted = questionItem.type === 'short-answer'
      ? questionItem.correctAnswer
      : [questionItem.correctAnswer];
    return accepted.some(answer => normalizeAnswer(answer) === normalized);
  }
  function matches(questionItem, filters = {}) {
    return (!filters.countryId || questionItem.countryId === filters.countryId) &&
      (!filters.curriculumId || questionItem.curriculumId === filters.curriculumId) &&
      (!filters.educationLevelId || questionItem.educationLevelId === filters.educationLevelId) &&
      (!filters.gradeId || questionItem.gradeId === filters.gradeId) &&
      (!filters.subjectId || questionItem.subjectId === filters.subjectId) &&
      (!filters.topicId || questionItem.topicId === filters.topicId) &&
      (!filters.difficulty || questionItem.difficulty === filters.difficulty) &&
      (!filters.type || questionItem.type === filters.type);
  }
  function createQuestion(input, existing = []) {
    const result = validateQuestion(input);
    if (!result.valid) return result;
    if (existing.some(item => item.id === result.question.id)) return { valid: false, error: 'Question identifiers must be unique.' };
    return { valid: true, question: result.question };
  }
  function updateQuestion(id, input, existing = []) {
    if (!existing.some(item => item.id === id)) return { valid: false, error: 'The question to update could not be found.' };
    if (input.id !== id && existing.some(item => item.id === input.id)) return { valid: false, error: 'Question identifiers must be unique.' };
    return validateQuestion({ ...input, id });
  }
  function newId() {
    return `q-custom-${globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`}`;
  }

  window.AtlasQuestionBank = Object.freeze({ difficultyRank, questionTypes, questions, matches, validateQuestion, gradeAnswer, createQuestion, updateQuestion, newId });
})();
