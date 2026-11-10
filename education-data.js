(() => {
  const topic = (id, name, description) => ({ id, name, description });
  const subject = (id, name, icon, description, gradeIds, topics) => ({
    id, name, icon, description, gradeIds, topics, sample: true
  });
  const grade = (id, levelId, curriculumId, name, stage, subjectIds = []) => ({
    id, levelId, curriculumId, name, stage, subjectIds
  });

  const grades = [
    grade('pp1', 'pre-primary', 'cbc-kenya', 'PP1', 'Pre-primary'),
    grade('pp2', 'pre-primary', 'cbc-kenya', 'PP2', 'Pre-primary'),
    ...Array.from({ length: 6 }, (_, index) =>
      grade(`primary-grade-${index + 1}`, 'primary', 'cbc-kenya', `Grade ${index + 1}`, 'Primary')),
    ...[7, 8, 9].map(number =>
      grade(`cbc-grade-${number}`, 'secondary', 'cbc-kenya', `Grade ${number}`, 'Junior School')),
    ...[10, 11, 12].map(number =>
      grade(`cbc-grade-${number}`, 'secondary', 'cbc-kenya', `Grade ${number}`, 'Senior School')),
    ...[1, 2, 3, 4].map(number =>
      grade(`844-form-${number}`, 'secondary', '844-kenya', `Form ${number}`, '8-4-4')),
    grade('university-year-1', 'university', 'university-studies', 'Year 1', 'Academic year'),
    grade('university-year-2', 'university', 'university-studies', 'Year 2', 'Academic year'),
    grade('university-year-3', 'university', 'university-studies', 'Year 3', 'Academic year'),
    grade('university-year-4', 'university', 'university-studies', 'Year 4', 'Academic year')
  ];

  const pp = ['pp1', 'pp2'];
  const primaryLower = [1, 2, 3].map(number => `primary-grade-${number}`);
  const primaryUpper = [4, 5, 6].map(number => `primary-grade-${number}`);
  const primary = [...primaryLower, ...primaryUpper];
  const junior = [7, 8, 9].map(number => `cbc-grade-${number}`);
  const senior = [10, 11, 12].map(number => `cbc-grade-${number}`);
  const forms = [1, 2, 3, 4].map(number => `844-form-${number}`);
  const yearOne = ['university-year-1'];
  const yearTwo = ['university-year-2'];
  const yearThree = ['university-year-3'];
  const yearFour = ['university-year-4'];

  const subjects = [
    subject('pp-language', 'Language Activities', '💬', 'Early listening, speaking and communication activities.', pp, [
      topic('pp-language-sounds', 'Sounds and words', 'Explore sounds, familiar words and early ways to communicate.'),
      topic('pp-language-stories', 'Stories and conversation', 'Listen to short stories and share ideas in conversation.')
    ]),
    subject('pp-mathematics', 'Mathematical Activities', '🔢', 'Early number, shape, pattern and sorting activities.', pp, [
      topic('pp-math-counting', 'Counting and matching', 'Connect small groups of objects with number words.'),
      topic('pp-math-shapes', 'Shapes and patterns', 'Notice familiar shapes and repeating patterns around you.')
    ]),
    subject('pp-environment', 'Environmental Activities', '🌱', 'Explore familiar places, living things and everyday observations.', pp, [
      topic('pp-environment-plants', 'Plants around us', 'Observe common plants and describe what you notice.'),
      topic('pp-environment-community', 'People in our community', 'Talk about familiar people, places and helpful roles.')
    ]),
    subject('pp-creative', 'Creative Activities', '🎨', 'Try playful art, music, movement and making activities.', pp, [
      topic('pp-creative-colour', 'Colour and drawing', 'Use lines, shapes and colour to express an idea.'),
      topic('pp-creative-rhythm', 'Music and rhythm', 'Listen for a beat and explore rhythm through movement.')
    ]),
    subject('pp-movement', 'Movement and Play', '🤸', 'Build coordination and cooperation through age-appropriate play.', pp, [
      topic('pp-movement-balance', 'Balance and coordination', 'Practise simple movements with care and confidence.'),
      topic('pp-movement-teamwork', 'Taking turns', 'Explore sharing, turn-taking and cooperative play.')
    ]),
    subject('pp-religion', 'Religious Education', '🌟', 'Sample stories and activities about values, care and belonging.', pp, [
      topic('pp-religion-kindness', 'Kindness and care', 'Notice kind actions and ways to care for others.'),
      topic('pp-religion-stories', 'Stories and values', 'Talk about a story and the positive choices within it.')
    ]),
    subject('primary-math-lower', 'Mathematics', '∑', 'Sample number, pattern and measurement activities.', primaryLower, [
      topic('primary-math-counting', 'Numbers and place value', 'Represent numbers in different ways and compare quantities.'),
      topic('primary-math-operations', 'Everyday operations', 'Use addition and subtraction in simple situations.'),
      topic('primary-math-shapes', 'Shapes and patterns', 'Describe shapes and continue a repeating pattern.')
    ]),
    subject('primary-english-lower', 'English', '📖', 'Sample reading, writing, listening and speaking activities.', primaryLower, [
      topic('primary-english-reading', 'Reading for meaning', 'Read a short passage and identify its main idea.'),
      topic('primary-english-writing', 'Sentences and stories', 'Write clear sentences and organise a short story.')
    ]),
    subject('primary-kiswahili-lower', 'Kiswahili', '🗣️', 'Sample Kiswahili language and communication activities.', primaryLower, [
      topic('primary-kiswahili-msamiati', 'Msamiati wa kila siku', 'Tumia msamiati wa kawaida katika mazungumzo.'),
      topic('primary-kiswahili-kusoma', 'Kusoma na kuelewa', 'Soma kifungu kifupi na ueleze wazo kuu.')
    ]),
    subject('primary-environment-lower', 'Environmental Activities', '🌍', 'Sample integrated activities about people and the natural world.', primaryLower, [
      topic('primary-environment-living', 'Living things', 'Observe similarities and differences among familiar living things.'),
      topic('primary-environment-home', 'Home and community', 'Describe familiar places and ways people help one another.')
    ]),
    subject('primary-creative-lower', 'Creative Arts', '🎨', 'Sample creative making, drawing, music and movement activities.', primaryLower, [
      topic('primary-creative-art', 'Making with shapes and colour', 'Plan and make a picture using basic shapes and colours.'),
      topic('primary-creative-music', 'Music and movement', 'Explore rhythm and movement through a short activity.')
    ]),
    subject('primary-religion', 'Religious Education', '🌟', 'Sample activities about stories, values and respectful communities.', primary, [
      topic('primary-religion-values', 'Values in everyday life', 'Discuss fairness, responsibility and care in familiar situations.'),
      topic('primary-religion-stories', 'Learning through stories', 'Reflect on a story and the choices its characters make.')
    ]),
    subject('primary-math-upper', 'Mathematics', '∑', 'Sample number, geometry, measurement and data activities.', primaryUpper, [
      topic('primary-upper-math-fractions', 'Fractions and decimals', 'Compare common fractions and decimal representations.'),
      topic('primary-upper-math-measure', 'Measurement', 'Choose appropriate units to describe length, time and capacity.'),
      topic('primary-upper-math-data', 'Representing data', 'Organise a small data set and describe what it shows.')
    ]),
    subject('primary-english-upper', 'English', '📖', 'Sample reading comprehension, writing and language activities.', primaryUpper, [
      topic('primary-upper-english-comprehension', 'Reading comprehension', 'Use details from a passage to support an interpretation.'),
      topic('primary-upper-english-writing', 'Purposeful writing', 'Plan and revise a short piece for a clear audience.')
    ]),
    subject('primary-kiswahili-upper', 'Kiswahili', '🗣️', 'Sample Kiswahili reading, writing and communication activities.', primaryUpper, [
      topic('primary-upper-kiswahili-sarufi', 'Sarufi katika matumizi', 'Tambua miundo ya lugha katika sentensi za mfano.'),
      topic('primary-upper-kiswahili-uandishi', 'Uandishi wa aya', 'Panga mawazo na uandike aya fupi inayoeleweka.')
    ]),
    subject('primary-science-technology', 'Science and Technology', '🔬', 'Sample observations and technology activities for the selected grades.', primaryUpper, [
      topic('primary-science-observation', 'Making observations', 'Describe a simple observation and record what changes.'),
      topic('primary-science-materials', 'Materials around us', 'Compare familiar materials by observable properties.'),
      topic('primary-science-technology', 'Technology in daily life', 'Identify a tool and explain a problem it can help solve.')
    ]),
    subject('primary-social-studies', 'Social Studies', '🧭', 'Sample activities about places, communities and the past.', primaryUpper, [
      topic('primary-social-maps', 'Places and simple maps', 'Use a simple map or diagram to describe a familiar place.'),
      topic('primary-social-community', 'Community and citizenship', 'Explore shared responsibilities in a community.')
    ]),
    subject('primary-agriculture', 'Agriculture', '🌾', 'Sample activities about plants, soil and responsible food growing.', primaryUpper, [
      topic('primary-agriculture-plants', 'Plant needs', 'Explore the conditions that support plant growth.'),
      topic('primary-agriculture-soil', 'Soil and care', 'Observe soil and discuss caring for a growing space.')
    ]),
    subject('primary-creative-upper', 'Creative Arts', '🎨', 'Sample activities in art, music, design and movement.', primaryUpper, [
      topic('primary-upper-creative-design', 'Planning a design', 'Develop and refine a creative idea for a simple purpose.'),
      topic('primary-upper-creative-performance', 'Sound and performance', 'Explore rhythm, expression and constructive feedback.')
    ]),
    subject('cbc-junior-math', 'Mathematics', '∑', 'Sample number, algebraic thinking, geometry and data topics.', junior, [
      topic('cbc-junior-math-number', 'Number and proportion', 'Use number relationships to solve practical examples.'),
      topic('cbc-junior-math-algebra', 'Algebraic thinking', 'Represent a relationship with a simple expression.'),
      topic('cbc-junior-math-data', 'Data and chance', 'Summarise a small data set and discuss uncertainty.')
    ]),
    subject('cbc-junior-english', 'English', '📖', 'Sample language, reading and communication topics.', junior, [
      topic('cbc-junior-english-reading', 'Reading and interpretation', 'Support an interpretation with details from a text.'),
      topic('cbc-junior-english-communication', 'Speaking and writing', 'Organise ideas for a clear audience and purpose.')
    ]),
    subject('cbc-junior-kiswahili', 'Kiswahili', '🗣️', 'Sample Kiswahili reading, writing and oral communication.', junior, [
      topic('cbc-junior-kiswahili-lugha', 'Matumizi ya lugha', 'Chunguza matumizi ya lugha katika mawasiliano ya kila siku.'),
      topic('cbc-junior-kiswahili-fasihi', 'Kusoma na kujadili', 'Jadili mawazo na mifano kutoka kwa matini fupi.')
    ]),
    subject('cbc-junior-science', 'Integrated Science', '🔬', 'Sample inquiry activities across living and physical science.', junior, [
      topic('cbc-junior-science-inquiry', 'Asking scientific questions', 'Turn an observation into a question that can be investigated.'),
      topic('cbc-junior-science-living', 'Living systems', 'Describe how parts of a familiar living system relate.'),
      topic('cbc-junior-science-energy', 'Energy in everyday settings', 'Identify forms and observable effects of energy.')
    ]),
    subject('cbc-junior-social', 'Social Studies', '🧭', 'Sample geographic, historical and civic learning topics.', junior, [
      topic('cbc-junior-social-geography', 'People and places', 'Describe how people interact with their environment.'),
      topic('cbc-junior-social-citizenship', 'Citizenship and society', 'Explore rights, responsibilities and shared decision-making.')
    ]),
    subject('cbc-junior-computing', 'Pre-Technical Studies', '💻', 'Sample digital literacy, design and practical problem-solving topics.', junior, [
      topic('cbc-junior-computing-digital', 'Digital information', 'Organise information and use digital tools thoughtfully.'),
      topic('cbc-junior-computing-design', 'Designing a solution', 'Describe a need, sketch an idea and consider improvements.')
    ]),
    subject('cbc-junior-agriculture', 'Agriculture and Nutrition', '🌾', 'Sample food systems, growing and nutrition topics.', junior, [
      topic('cbc-junior-agriculture-growing', 'Growing plants', 'Plan observations of a plant as it grows.'),
      topic('cbc-junior-agriculture-food', 'Food choices and care', 'Explore food sources and safe everyday handling.')
    ]),
    subject('cbc-junior-creative', 'Creative Arts and Sports', '🎨', 'Sample creative expression, performance and movement topics.', junior, [
      topic('cbc-junior-creative-expression', 'Creative expression', 'Develop an idea through making, performance or movement.'),
      topic('cbc-junior-creative-teamwork', 'Teamwork and reflection', 'Practise collaboration and constructive reflection.')
    ]),
    subject('cbc-junior-religion', 'Religious Education', '🌟', 'Sample comparative stories, values and respectful dialogue.', junior, [
      topic('cbc-junior-religion-values', 'Values and choices', 'Discuss values and choices in familiar examples.'),
      topic('cbc-junior-religion-community', 'Beliefs and community', 'Explore how beliefs and traditions can shape community life.')
    ]),
    subject('cbc-senior-math', 'Mathematics', '∑', 'Sample quantitative reasoning topics for a pathway combination.', senior, [
      topic('cbc-senior-math-functions', 'Functions and relationships', 'Represent relationships and interpret their properties.'),
      topic('cbc-senior-math-statistics', 'Statistics and modelling', 'Use data to describe a question and evaluate a model.')
    ]),
    subject('cbc-senior-english', 'English', '📖', 'Sample communication, language and text analysis topics.', senior, [
      topic('cbc-senior-english-analysis', 'Analysing a text', 'Examine how purpose and audience shape a text.'),
      topic('cbc-senior-english-research', 'Research and communication', 'Develop a supported explanation from suitable sources.')
    ]),
    subject('cbc-senior-kiswahili', 'Kiswahili', '🗣️', 'Sample Kiswahili language and literature topics.', senior, [
      topic('cbc-senior-kiswahili-matumizi', 'Matumizi ya lugha', 'Chambua matumizi ya lugha katika muktadha uliotolewa.'),
      topic('cbc-senior-kiswahili-fasihi', 'Fasihi na jamii', 'Jadili jinsi matini inavyowasilisha mawazo kuhusu jamii.')
    ]),
    subject('cbc-senior-biology', 'Biology', '🧬', 'Sample biology inquiry and living-systems topics.', senior, [
      topic('cbc-senior-biology-cells', 'Cells and organisation', 'Relate cell structures to functions in a living system.'),
      topic('cbc-senior-biology-ecosystems', 'Ecosystems', 'Explore interactions among organisms and their environment.')
    ]),
    subject('cbc-senior-chemistry', 'Chemistry', '⚗️', 'Sample matter, reactions and evidence topics.', senior, [
      topic('cbc-senior-chemistry-matter', 'Matter and change', 'Describe observable changes using a particle model.'),
      topic('cbc-senior-chemistry-evidence', 'Evidence in reactions', 'Use observations to compare a starting material and a product.')
    ]),
    subject('cbc-senior-physics', 'Physics', '⚡', 'Sample motion, forces, energy and measurement topics.', senior, [
      topic('cbc-senior-physics-motion', 'Motion and forces', 'Use a simple model to describe motion and forces.'),
      topic('cbc-senior-physics-energy', 'Energy and measurement', 'Relate measurements to energy transfers in a system.')
    ]),
    subject('cbc-senior-geography', 'Geography', '🌍', 'Sample physical and human geography topics.', senior, [
      topic('cbc-senior-geography-systems', 'Earth systems', 'Explore relationships among physical processes and places.'),
      topic('cbc-senior-geography-settlements', 'People and settlements', 'Compare how communities shape and use places.')
    ]),
    subject('cbc-senior-history', 'History', '⌛', 'Sample historical evidence, change and interpretation topics.', senior, [
      topic('cbc-senior-history-evidence', 'Using historical evidence', 'Compare sources and explain what each can show.'),
      topic('cbc-senior-history-change', 'Continuity and change', 'Describe change over time with evidence from examples.')
    ]),
    subject('cbc-senior-computing', 'Computer Studies', '💻', 'Sample algorithms, data and digital systems topics.', senior, [
      topic('cbc-senior-computing-algorithms', 'Algorithms and logic', 'Describe a process as clear ordered steps.'),
      topic('cbc-senior-computing-data', 'Data and digital systems', 'Explore how a digital system stores and uses information.')
    ]),
    subject('cbc-senior-business', 'Business Studies', '📊', 'Sample enterprise, finance and decision-making topics.', senior, [
      topic('cbc-senior-business-enterprise', 'Enterprise and value', 'Explore how an enterprise responds to a need.'),
      topic('cbc-senior-business-finance', 'Financial decisions', 'Compare simple costs, income and planning choices.')
    ]),
    subject('cbc-senior-arts', 'Creative Arts', '🎭', 'Sample creative practice, interpretation and production topics.', senior, [
      topic('cbc-senior-arts-practice', 'Creative practice', 'Develop a creative work through experimentation and revision.'),
      topic('cbc-senior-arts-production', 'Interpreting and presenting', 'Explain creative choices and plan a presentation.')
    ]),
    subject('cbc-senior-sports', 'Sports and Physical Education', '🏅', 'Sample movement, performance and wellbeing topics.', senior, [
      topic('cbc-senior-sports-performance', 'Movement and performance', 'Reflect on performance using an agreed observation.'),
      topic('cbc-senior-sports-wellbeing', 'Wellbeing and teamwork', 'Explore respectful teamwork and healthy participation.')
    ]),
    subject('844-math', 'Mathematics', '∑', 'Sample number, algebra, geometry and statistics topics.', forms, [
      topic('844-math-algebra', 'Algebra and equations', 'Represent and solve a simple equation.'),
      topic('844-math-geometry', 'Geometry and measurement', 'Use geometric relationships in a practical example.')
    ]),
    subject('844-english', 'English', '📖', 'Sample language, literature and communication topics.', forms, [
      topic('844-english-grammar', 'Language and grammar', 'Examine language choices in a short passage.'),
      topic('844-english-literature', 'Reading literature', 'Support an interpretation with examples from a text.')
    ]),
    subject('844-kiswahili', 'Kiswahili', '🗣️', 'Sample Kiswahili language, composition and literature topics.', forms, [
      topic('844-kiswahili-sarufi', 'Sarufi na matumizi', 'Chunguza sarufi na matumizi yake katika sentensi.'),
      topic('844-kiswahili-fasihi', 'Fasihi na uandishi', 'Jadili mawazo yanayowasilishwa katika kifungu.')
    ]),
    subject('844-biology', 'Biology', '🧬', 'Sample living-organism and ecology topics.', forms, [
      topic('844-biology-cells', 'Cells and organisms', 'Explore how cells contribute to living systems.'),
      topic('844-biology-ecology', 'Ecology and the environment', 'Describe interactions in a familiar ecosystem.')
    ]),
    subject('844-chemistry', 'Chemistry', '⚗️', 'Sample matter, reactions and practical observation topics.', forms, [
      topic('844-chemistry-matter', 'Structure and properties of matter', 'Relate observable properties to a simple model of matter.'),
      topic('844-chemistry-reactions', 'Chemical change', 'Use observations to describe a chemical change.')
    ]),
    subject('844-physics', 'Physics', '⚡', 'Sample mechanics, electricity, waves and measurement topics.', forms, [
      topic('844-physics-mechanics', 'Mechanics and motion', 'Use measurements to describe motion in an example.'),
      topic('844-physics-energy', 'Energy and electricity', 'Explore energy transfer in a simple circuit model.')
    ]),
    subject('844-geography', 'Geography', '🌍', 'Sample physical landscapes, climate and human geography topics.', forms, [
      topic('844-geography-landforms', 'Landforms and processes', 'Describe how a physical process can shape a landscape.'),
      topic('844-geography-settlement', 'Climate and settlement', 'Explore connections between climate and human activity.')
    ]),
    subject('844-history', 'History and Government', '⌛', 'Sample historical interpretation and civic topics.', forms, [
      topic('844-history-sources', 'Historical sources', 'Compare accounts and identify evidence in each.'),
      topic('844-history-government', 'Government and society', 'Explore how institutions and communities make decisions.')
    ]),
    subject('844-computing', 'Computer Studies', '💻', 'Sample programming, data and computer systems topics.', forms, [
      topic('844-computing-programming', 'Programming logic', 'Break a small task into ordered computational steps.'),
      topic('844-computing-systems', 'Computer systems', 'Identify components and explain their roles in a system.')
    ]),
    subject('844-business', 'Business Studies', '📊', 'Sample business activity, markets and financial literacy topics.', forms, [
      topic('844-business-enterprise', 'Business activity', 'Describe how a business creates and delivers value.'),
      topic('844-business-finance', 'Business finance', 'Compare basic income, costs and financial records.')
    ]),
    subject('844-agriculture', 'Agriculture', '🌾', 'Sample crop production, soil and agricultural enterprise topics.', forms, [
      topic('844-agriculture-crops', 'Crop production', 'Explore factors that can affect plant growth.'),
      topic('844-agriculture-soil', 'Soil and sustainable practice', 'Describe ways to observe and care for soil.')
    ]),
    subject('844-cre', 'Religious Education', '🌟', 'Sample religious education topics and reflective activities.', forms, [
      topic('844-cre-scripture', 'Texts and interpretation', 'Discuss an idea using an example from a selected text.'),
      topic('844-cre-ethics', 'Ethics and society', 'Consider values and responsibilities in a social example.')
    ])
  ];

  const pathways = [
    {
      id: 'stem', name: 'STEM', description: 'Sample science, technology, engineering and mathematics combinations.',
      combinations: [
        { id: 'stem-physical-sciences', name: 'Physical Sciences', subjectIds: ['cbc-senior-math', 'cbc-senior-english', 'cbc-senior-kiswahili', 'cbc-senior-chemistry', 'cbc-senior-physics', 'cbc-senior-computing'] },
        { id: 'stem-life-sciences', name: 'Life Sciences', subjectIds: ['cbc-senior-math', 'cbc-senior-english', 'cbc-senior-kiswahili', 'cbc-senior-biology', 'cbc-senior-chemistry', 'cbc-senior-computing'] }
      ]
    },
    {
      id: 'social-sciences', name: 'Social Sciences', description: 'Sample society, communication and business combinations.',
      combinations: [
        { id: 'social-humanities', name: 'Humanities', subjectIds: ['cbc-senior-math', 'cbc-senior-english', 'cbc-senior-kiswahili', 'cbc-senior-geography', 'cbc-senior-history', 'cbc-senior-business'] },
        { id: 'social-business', name: 'Business and Society', subjectIds: ['cbc-senior-math', 'cbc-senior-english', 'cbc-senior-kiswahili', 'cbc-senior-business', 'cbc-senior-geography', 'cbc-senior-computing'] }
      ]
    },
    {
      id: 'arts-sports-science', name: 'Arts and Sports Science', description: 'Sample creative practice, communication and movement combinations.',
      combinations: [
        { id: 'arts-creative', name: 'Creative Arts', subjectIds: ['cbc-senior-math', 'cbc-senior-english', 'cbc-senior-kiswahili', 'cbc-senior-arts', 'cbc-senior-history', 'cbc-senior-geography'] },
        { id: 'arts-sports', name: 'Sports and Performance', subjectIds: ['cbc-senior-math', 'cbc-senior-english', 'cbc-senior-kiswahili', 'cbc-senior-sports', 'cbc-senior-biology', 'cbc-senior-business'] }
      ]
    }
  ];

  const unit = (id, name, year, semester, topicNames) => ({
    id, name, description: `Sample learning unit for ${name}.`,
    academicYearId: `university-year-${year}`,
    semesterId: `university-year-${year}-semester-${semester}`,
    topics: topicNames.map((nameOfTopic, index) => topic(
      `${id}-topic-${index + 1}`,
      nameOfTopic,
      `${nameOfTopic} in the context of ${name}.`
    )),
    sample: true
  });
  const programme = (id, name, units) => ({
    id,
    name,
    description: `Sample academic programme in ${name}.`,
    units: [
      ...units,
      ...[3, 4].flatMap(year => [1, 2].map(semester => {
        const topics = year === 3
          ? ['Advanced concepts and methods', 'Applied analysis and evaluation']
          : ['Specialist practice', 'Research and project design'];
        return unit(
          `${id}-year-${year}-semester-${semester}`,
          year === 3
            ? `Advanced ${name} ${semester === 1 ? 'I' : 'II'}`
            : `${name} Capstone ${semester === 1 ? 'I' : 'II'}`,
          year,
          semester,
          topics
        );
      }))
    ]
  });
  const university = [
    {
      id: 'computing-and-informatics', name: 'Faculty of Computing and Informatics', icon: '💻',
      programmes: [
        programme('software-engineering', 'Software Engineering', [
          unit('software-programming', 'Programming Fundamentals', 1, 1, ['Problem decomposition', 'Variables and expressions']),
          unit('software-web', 'Web Development Foundations', 1, 2, ['Page structure and semantics', 'Responsive design']),
          unit('software-design', 'Software Design', 2, 1, ['Requirements and modelling', 'Design patterns']),
          unit('software-quality', 'Software Quality', 2, 2, ['Testing strategies', 'Reliable delivery'])
        ]),
        programme('computer-science', 'Computer Science', [
          unit('cs-programming', 'Programming and Algorithms', 1, 1, ['Algorithmic thinking', 'Data and control flow']),
          unit('cs-mathematics', 'Discrete Mathematics', 1, 2, ['Logic and sets', 'Counting and relations']),
          unit('cs-data-structures', 'Data Structures', 2, 1, ['Abstract data types', 'Trees and graphs']),
          unit('cs-systems', 'Computer Systems', 2, 2, ['Operating system concepts', 'Networks and protocols'])
        ]),
        programme('information-technology', 'Information Technology', [
          unit('it-digital-systems', 'Digital Systems', 1, 1, ['Hardware and software', 'Information representation']),
          unit('it-networks', 'Networks and Connectivity', 1, 2, ['Network models', 'Secure communication concepts']),
          unit('it-databases', 'Database Foundations', 2, 1, ['Relational data models', 'Queries and integrity']),
          unit('it-service', 'IT Service Management', 2, 2, ['Service design', 'Support and improvement'])
        ])
      ]
    },
    {
      id: 'business-and-economics', name: 'School of Business and Economics', icon: '📊',
      programmes: [
        programme('business-administration', 'Business Administration', [
          unit('ba-management', 'Management Principles', 1, 1, ['Organisations and management', 'Planning and decisions']),
          unit('ba-marketing', 'Marketing Foundations', 1, 2, ['Customers and value', 'Marketing communication']),
          unit('ba-strategy', 'Business Strategy', 2, 1, ['Competitive context', 'Strategic choices']),
          unit('ba-entrepreneurship', 'Entrepreneurship', 2, 2, ['Opportunity discovery', 'Business models'])
        ]),
        programme('accounting', 'Accounting', [
          unit('accounting-records', 'Accounting Foundations', 1, 1, ['Transactions and records', 'Financial statements']),
          unit('accounting-costs', 'Cost Accounting', 1, 2, ['Cost behaviour', 'Budgeting basics']),
          unit('accounting-reporting', 'Financial Reporting', 2, 1, ['Reporting principles', 'Interpreting statements']),
          unit('accounting-audit', 'Auditing Concepts', 2, 2, ['Evidence and assurance', 'Internal controls'])
        ]),
        programme('economics', 'Economics', [
          unit('economics-micro', 'Microeconomics', 1, 1, ['Choice and scarcity', 'Markets and incentives']),
          unit('economics-macro', 'Macroeconomics', 1, 2, ['Output and employment', 'Prices and economic activity']),
          unit('economics-development', 'Development Economics', 2, 1, ['Development indicators', 'Institutions and growth']),
          unit('economics-policy', 'Economic Policy', 2, 2, ['Policy objectives', 'Evaluating policy choices'])
        ])
      ]
    },
    {
      id: 'education', name: 'School of Education', icon: '📚',
      programmes: [
        programme('education', 'Education', [
          unit('education-learning', 'Learning and Development', 1, 1, ['Learners and learning', 'Development across contexts']),
          unit('education-teaching', 'Teaching Foundations', 1, 2, ['Planning a learning experience', 'Classroom communication']),
          unit('education-assessment', 'Assessment for Learning', 2, 1, ['Evidence of learning', 'Feedback and reflection']),
          unit('education-curriculum', 'Curriculum Studies', 2, 2, ['Curriculum concepts', 'Learning design'])
        ])
      ]
    },
    {
      id: 'engineering', name: 'School of Engineering', icon: '⚙️',
      programmes: [
        programme('engineering', 'Engineering', [
          unit('engineering-design', 'Engineering Design', 1, 1, ['Design constraints', 'Prototyping concepts']),
          unit('engineering-mechanics', 'Engineering Mechanics', 1, 2, ['Forces and equilibrium', 'Engineering measurement']),
          unit('engineering-materials', 'Materials and Processes', 2, 1, ['Material properties', 'Manufacturing processes']),
          unit('engineering-systems', 'Engineering Systems', 2, 2, ['System modelling', 'Safety and reliability'])
        ])
      ]
    },
    {
      id: 'law', name: 'School of Law', icon: '⚖️',
      programmes: [
        programme('law', 'Law', [
          unit('law-legal-systems', 'Legal Systems', 1, 1, ['Sources of law', 'Courts and institutions']),
          unit('law-reasoning', 'Legal Reasoning', 1, 2, ['Reading legal materials', 'Applying a legal rule']),
          unit('law-public', 'Public Law', 2, 1, ['Public institutions', 'Rights and responsibilities']),
          unit('law-research', 'Legal Research', 2, 2, ['Research questions', 'Citing legal sources'])
        ])
      ]
    },
    {
      id: 'communication-and-media', name: 'School of Communication and Media', icon: '🎙️',
      programmes: [
        programme('communication-media', 'Communication and Media', [
          unit('media-communication', 'Communication Foundations', 1, 1, ['Communication models', 'Audience and context']),
          unit('media-writing', 'Media Writing', 1, 2, ['Clear news writing', 'Verification and sources']),
          unit('media-digital', 'Digital Media', 2, 1, ['Digital storytelling', 'Media platforms']),
          unit('media-ethics', 'Media Ethics', 2, 2, ['Ethical decisions', 'Media and society'])
        ])
      ]
    }
  ];

  const levels = [
    { id: 'pre-primary', name: 'Pre-Primary Education', shortName: 'Pre-Primary', icon: '🧸', description: 'Playful foundations in language, early maths, movement and discovery.', gradeIds: ['pp1', 'pp2'] },
    { id: 'primary', name: 'Primary Education', shortName: 'Primary', icon: '🎒', description: 'Build confidence with core learning and creative exploration.', gradeIds: primary.map((_, index) => `primary-grade-${index + 1}`) },
    { id: 'secondary', name: 'Secondary Education', shortName: 'Secondary', icon: '🔭', description: 'Choose a curriculum pathway and explore a broad range of subjects.', gradeIds: [...junior, ...senior, ...forms] },
    { id: 'university', name: 'University Education', shortName: 'University', icon: '🎓', description: 'Explore faculties, programmes, academic years, semesters and units.', gradeIds: ['university-year-1', 'university-year-2', 'university-year-3', 'university-year-4'] }
  ];
  const curricula = [
    { id: 'cbc-kenya', name: 'CBC · Kenya', country: 'KE', levelIds: ['pre-primary', 'primary', 'secondary'] },
    { id: '844-kenya', name: '8-4-4 · Kenya', country: 'KE', levelIds: ['secondary'] },
    { id: 'university-studies', name: 'University studies', country: 'KE', levelIds: ['university'] }
  ];
  const faculties = university.map(({ id, name, icon }) => ({ id, name, icon }));
  grades.forEach(item => {
    item.subjectIds = subjects.filter(learningSubject => learningSubject.gradeIds.includes(item.id))
      .map(learningSubject => learningSubject.id);
  });

  const getById = (items, id) => items.find(item => item.id === id) || null;
  const getCurricula = levelId => curricula.filter(item => item.levelIds.includes(levelId));
  const getGrades = (levelId, curriculumId) =>
    grades.filter(item => item.levelId === levelId && item.curriculumId === curriculumId);
  const getSubjectsForGrade = (gradeId, subjectIds = []) => {
    const gradeItem = getById(grades, gradeId);
    if (!gradeItem) return [];
    const allowedIds = subjectIds.length ? subjectIds : gradeItem.subjectIds;
    return allowedIds.map(id => getById(subjects, id)).filter(item =>
      item && item.gradeIds.includes(gradeId));
  };
  const getProgramme = programmeId => university.flatMap(faculty => faculty.programmes)
    .find(item => item.id === programmeId) || null;
  const getUnits = (programmeId, academicYearId, semesterId) => {
    const programmeItem = getProgramme(programmeId);
    return programmeItem ? programmeItem.units.filter(item =>
      item.academicYearId === academicYearId && item.semesterId === semesterId) : [];
  };

  window.AtlasEducation = Object.freeze({
    countries: [{ id: 'KE', name: 'Kenya' }],
    levels, curricula, grades, pathways, subjects, faculties, university,
    getById, getCurricula, getGrades, getSubjectsForGrade, getProgramme, getUnits
  });
})();
