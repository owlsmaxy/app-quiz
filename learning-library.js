/* Atlas Learn content metadata and reference registry.
 * Notes written in the local catalogue remain original Atlas Learn sample material.
 * External links are kept as references; this file does not reproduce textbook text.
 */
(() => {
  const accessedOn = '2026-11-21';
  const references = {
    kicd: {
      id: 'kicd-cbc-materials', title: 'CBC Materials and Curriculum Designs',
      author: 'Kenya Institute of Curriculum Development', publisher: 'KICD', year: null,
      edition: null, section: 'Curriculum designs and approved learning materials',
      url: 'https://kicd.ac.ke/cbc-materials/', rights: 'Official institutional resource; see source terms.', accessedOn
    },
    openstaxMath: {
      id: 'openstax-college-algebra-2e', title: 'College Algebra 2e', author: 'OpenStax, Rice University', publisher: 'OpenStax', year: null,
      edition: '2nd edition', section: 'Use the chapter index to find the relevant algebra, functions, geometry or probability section',
      url: 'https://openstax.org/books/college-algebra-2e/pages/index', rights: 'CC BY-NC-SA 4.0; attribution and ShareAlike apply.', accessedOn
    },
    openstaxStats: {
      id: 'openstax-introductory-statistics-2e', title: 'Introductory Statistics 2e', author: 'OpenStax, Rice University', publisher: 'OpenStax', year: 2023,
      edition: '2nd edition', section: 'Definitions, data, descriptive statistics and probability',
      url: 'https://openstax.org/books/introductory-statistics-2e/pages/index', rights: 'CC BY 4.0; attribution applies.', accessedOn
    },
    openstaxBiology: {
      id: 'openstax-biology-2e', title: 'Biology 2e', author: 'OpenStax, Rice University', publisher: 'OpenStax', year: null,
      edition: '2nd edition', section: 'Use the chapter index to locate the relevant biology section',
      url: 'https://openstax.org/books/biology-2e/pages/index', rights: 'OpenStax open licence; check the source page for current reuse terms.', accessedOn
    },
    openstaxChemistry: {
      id: 'openstax-chemistry-2e', title: 'Chemistry 2e', author: 'OpenStax, Rice University', publisher: 'OpenStax', year: null,
      edition: '2nd edition', section: 'Use the chapter index to locate atoms, bonding, reactions and matter',
      url: 'https://openstax.org/books/chemistry-2e/pages/index', rights: 'OpenStax open licence; check the source page for current reuse terms.', accessedOn
    },
    openstaxPhysics: {
      id: 'openstax-college-physics-2e', title: 'College Physics 2e', author: 'OpenStax, Rice University', publisher: 'OpenStax', year: null,
      edition: '2nd edition', section: 'Use the chapter index to locate mechanics, energy, waves and electricity',
      url: 'https://openstax.org/books/college-physics-2e/pages/index', rights: 'OpenStax open licence; check the source page for current reuse terms.', accessedOn
    },
    mitOcw: {
      id: 'mit-ocw-mathematics', title: 'MIT OpenCourseWare Mathematics', author: 'Massachusetts Institute of Technology', publisher: 'MIT OpenCourseWare', year: null,
      edition: null, section: 'Lecture notes, assignments and course materials', url: 'https://ocw.mit.edu/courses/mathematics/', rights: 'See the licence shown on each MIT OpenCourseWare course page.', accessedOn
    },
    openstaxSubjects: {
      id: 'openstax-subjects', title: 'OpenStax free textbook collection', author: 'OpenStax, Rice University', publisher: 'OpenStax', year: null,
      edition: null, section: 'Browse mathematics, science, business, computing and social-science books', url: 'https://openstax.org/subjects', rights: 'OpenStax open licences vary by title; check each book page.', accessedOn
    }
  };

  function referencesFor(subject = {}) {
    const name = String(subject.name || '').toLocaleLowerCase();
    const items = [];
    if (['pp1', 'pp2', 'primary', 'junior-secondary', 'senior-secondary', '8-4-4'].includes(subject.level)) items.push(references.kicd);
    if (/(mathemat|algebra|geometry|calculus|trigonometry)/.test(name)) items.push(references.openstaxMath, references.mitOcw);
    if (/statistic|probability/.test(name)) items.push(references.openstaxStats);
    if (/biology|health|anatomy|environment/.test(name)) items.push(references.openstaxBiology);
    if (/chemistry/.test(name)) items.push(references.openstaxChemistry);
    if (/physics|engineering/.test(name)) items.push(references.openstaxPhysics);
    if (/computer|software|information technology|programming|data science/.test(name)) items.push(references.openstaxSubjects, references.mitOcw);
    if (!items.length) items.push(references.kicd, references.openstaxSubjects);
    return [...new Map(items.map(item => [item.id, { ...item }])).values()];
  }

  function studyMaterials(topic = {}, subject = {}) {
    const lessons = Array.isArray(topic.lessons) ? topic.lessons : [];
    const firstLesson = lessons[0];
    const objectives = [
      `Explain the main idea of ${topic.name || 'this topic'} in your own words.`,
      ...(lessons.length ? [`Use the ${lessons.length} study example${lessons.length === 1 ? '' : 's'} to connect the idea to a real task.`] : []),
      ...(topic.practiceQuestions?.length ? [`Check your understanding with ${topic.practiceQuestions.length} revision question${topic.practiceQuestions.length === 1 ? '' : 's'}.`] : [])
    ];
    return {
      introduction: topic.description || 'Study this topic through the available learning materials.',
      objectives,
      definitions: [{ term: topic.name || 'Topic', meaning: topic.description || 'A structured area of study in this subject.' }],
      notes: lessons.map(lesson => ({ title: lesson.title, body: lesson.content, source: 'Atlas Learn original study note' })),
      examples: lessons.slice(0, 3).map(lesson => ({ title: lesson.title, body: lesson.content })),
      summary: firstLesson ? `${firstLesson.title}: ${firstLesson.content}` : topic.description || 'Review the topic description and try the related quiz.',
      revisionQuestions: topic.practiceQuestions || [],
      references: referencesFor(subject)
    };
  }

  window.AtlasLearningLibrary = Object.freeze({ references, referencesFor, studyMaterials });
})();
