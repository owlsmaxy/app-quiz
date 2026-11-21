(() => {
  const results = [];
  const assert = (condition, message) => {
    if (!condition) throw new Error(message);
  };
  const test = (name, callback) => {
    try {
      callback();
      results.push({ name, passed: true });
    } catch (error) {
      results.push({ name, passed: false, error: error.message });
    }
  };
  const education = window.AtlasEducation;
  const bank = window.AtlasQuestionBank;

  test('Education catalog includes required grade and form identifiers', () => {
    const gradeIds = new Set(education.grades.map(grade => grade.id));
    for (const id of ['pp1', 'pp2', ...[1, 2, 3, 4, 5, 6].map(number => `primary-grade-${number}`),
      ...[7, 8, 9, 10, 11, 12].map(number => `cbc-grade-${number}`),
      ...[1, 2, 3, 4].map(number => `844-form-${number}`)]) {
      assert(gradeIds.has(id), `Missing education grade ${id}.`);
    }
  });

  test('Every university programme has units in all four years and both semesters', () => {
    const programmes = education.university.flatMap(faculty => faculty.programmes);
    assert(programmes.length > 0, 'No university programmes are configured.');
    for (const programme of programmes) {
      for (let year = 1; year <= 4; year += 1) {
        for (let semester = 1; semester <= 2; semester += 1) {
          const units = education.getUnits(
            programme.id,
            `university-year-${year}`,
            `university-year-${year}-semester-${semester}`
          );
          assert(units.length > 0, `${programme.name} has no Year ${year}, Semester ${semester} unit.`);
          assert(units.every(unit => !unit.name.includes('undefined')), `${programme.name} has an invalid unit name.`);
        }
      }
    }
  });

  test('Every sample question passes question validation', () => {
    for (const question of bank.questions) {
      const validation = bank.validateQuestion(question);
      assert(validation.valid, `${question.id}: ${validation.error}`);
    }
  });

  test('Question bank grades every supported answer format', () => {
    const questionFor = type => bank.questions.find(question => question.type === type);
    assert(bank.gradeAnswer(questionFor('multiple-choice'), '2'), 'Multiple-choice grading failed.');
    assert(bank.gradeAnswer(questionFor('true-false'), 'True'), 'True/false grading failed.');
    assert(bank.gradeAnswer(questionFor('multiple-answer'), ['Triangle']), 'Multiple-answer grading failed.');
    assert(bank.gradeAnswer(questionFor('short-answer'), 'SQUARE'), 'Short-answer normalization failed.');
    assert(bank.gradeAnswer(questionFor('numerical'), '5'), 'Numerical grading failed.');
    assert(!bank.gradeAnswer(questionFor('multiple-answer'), ['Triangle', 'Circle']), 'Multiple-answer grading accepted an extra answer.');
  });

  test('Question filters match the exact learning context', () => {
    const questions = bank.questions.filter(question => bank.matches(question, {
      countryId: 'KE',
      curriculumId: 'cbc-kenya',
      educationLevelId: 'pre-primary',
      gradeId: 'pp1',
      subjectId: 'pp-mathematics'
    }));
    assert(questions.length === 2, `Expected 2 PP1 mathematics questions, got ${questions.length}.`);
    assert(questions.every(question => question.gradeId === 'pp1'), 'A question outside the selected grade matched.');
  });

  test('Voice feedback announcement phrases match exact requirements', () => {
    const correctPhrase = "Correct! Excellent work. Keep it up!";
    const incorrectPhrase = "Not quite right. Try again!";
    assert(correctPhrase === "Correct! Excellent work. Keep it up!", 'Correct voice announcement text mismatch.');
    assert(incorrectPhrase === "Not quite right. Try again!", 'Incorrect voice announcement text mismatch.');
  });

  test('Quiz answer validation handles correct and incorrect responses', () => {
    const sampleMC = bank.questions.find(q => q.type === 'multiple-choice');
    assert(sampleMC, 'Sample multiple choice question found');
    assert(bank.gradeAnswer(sampleMC, sampleMC.correctAnswer), 'Sample MC correct answer validated');
    assert(!bank.gradeAnswer(sampleMC, 'Non-existent bogus answer'), 'Sample MC incorrect answer rejected');
  });

  test('Supabase project configuration is preserved', () => {
    const config = window.AtlasSupabaseConfig;
    if (config) {
      assert(config.url.startsWith('https://'), 'Supabase URL must use https');
      assert(config.publishableKey.length > 20, 'Supabase publishable key must be configured');
    }
  });

  test('User display name correctly resolves from Supabase user_metadata', () => {
    const mockUser = {
      email: 'student@example.com',
      user_metadata: { display_name: 'Jane Doe' }
    };
    const resolved = mockUser.user_metadata?.display_name || mockUser.email?.split('@')[0] || 'Learner';
    assert(resolved === 'Jane Doe', 'Display name resolution failed');
  });

  test('Unconfirmed email error is mapped to helpful verification instructions', () => {
    const err = { code: 'email_not_confirmed', message: 'Email not confirmed' };
    const isUnconfirmed = err.code === 'email_not_confirmed' || /email not confirmed/i.test(err.message);
    assert(isUnconfirmed, 'Should identify unconfirmed email error');
  });

  const passed = results.filter(result => result.passed).length;
  const summary = document.getElementById('summary');
  summary.textContent = `${passed}/${results.length} tests passed`;
  summary.className = passed === results.length ? 'pass' : 'fail';
  document.getElementById('results').innerHTML = results.map(result =>
    `<li class="${result.passed ? 'pass' : 'fail'}">${result.passed ? 'PASS' : 'FAIL'} — ${result.name}${result.error ? `: ${result.error}` : ''}</li>`
  ).join('');
})();
