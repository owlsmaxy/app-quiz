(() => {
  const catalogueStorageKey = 'atlas-learn-catalogue-v1';
  const defaultLevelOrder = ['pp1','pp2','primary','junior-secondary','senior-secondary','8-4-4','undergraduate','postgraduate','doctoral','professional','independent'];
  const levelLabels = {
    pp1: 'PP1', pp2: 'PP2', primary: 'Primary', 'junior-secondary': 'Junior Secondary',
    'senior-secondary': 'Senior Secondary', '8-4-4': '8-4-4', undergraduate: 'Undergraduate',
    postgraduate: 'Postgraduate & Master\'s', doctoral: 'Doctoral & PhD', professional: 'Professional & Vocational',
    independent: 'Independent & Personal Interest'
  };
  const levelIcon = {
    pp1: '🧸', pp2: '🧸', primary: '🎒', 'junior-secondary': '🔬', 'senior-secondary': '🏛️',
    '8-4-4': '📘', undergraduate: '🎓', postgraduate: '🎓', doctoral: '🎓', professional: '💼', independent: '✦'
  };

  const topic = (id, name, description) => ({ id, name, description, verified: true });
  const lesson = (id, subtopicId, title, content) => ({ id, subtopicId, title, content, verified: true });
  const practiceQuestion = (id, lessonId, prompt, options, answer, explanation) => ({
    id, lessonId, prompt, options, answer, explanation, verified: true
  });

  const subtopic = (id, topicId, name, description, lessons, questions) => ({
    id, topicId, name, description, lessons: lessons || [], practiceQuestions: questions || [], verified: true
  });

  const course = (id, specializationId, name, description, subtopics) => ({
    id, specializationId, name, description, subtopics: subtopics || [], verified: true
  });

  const specialization = (id, subjectId, name, description, courses) => ({
    id, subjectId, name, description, courses: courses || [], verified: true
  });

  const subject = (id, disciplineId, name, icon, description, level, specializations) => ({
    id, disciplineId, name, icon, description, level, specializations: specializations || [], verified: true
  });

  const discipline = (id, name, icon, description, level, subjects) => ({
    id, name, icon, description, level, subjects: subjects || [], verified: true
  });

  const disciplines = [];

  // ---------- PP1 & PP2 ----------
  const ppEarly = [
    subject('pp-language-activities', 'pp-discipline-early', 'Language Activities', '💬', 'Listening, speaking, naming and early communication through stories, songs and conversation.', 'pp1', [
      specialization('pp-language-listening', 'pp-language-activities', 'Listening and Speaking', 'Hearing sounds, following simple instructions and speaking clearly.', [
        course('pp-language-sounds', 'pp-language-listening', 'Sounds Around Me', 'Recognise everyday sounds and name what is heard.', [
          subtopic('pp-language-sounds-animals', 'pp-language-sounds', 'Animal Sounds', 'Match animals to the sounds they make.', [
            lesson('pp-language-sounds-animals-lesson-1', 'pp-language-sounds-animals', 'Farm Animal Sounds', 'Cows moo, sheep baa, pigs oink and hens cluck. Listen carefully and try to copy each sound.'),
            lesson('pp-language-sounds-animals-lesson-2', 'pp-language-sounds-animals', 'Wild Animal Sounds', 'Lions roar, elephants trumpet and monkeys chatter. Each animal has its own special voice.')
          ], [
            practiceQuestion('pp-language-sounds-animals-q1', 'pp-language-sounds-animals-lesson-1', 'Which animal says "moo"?', ['Cow', 'Sheep', 'Hen'], 'Cow', 'Cows make a mooing sound.')
          ])
        ]),
        course('pp-language-words', 'pp-language-listening', 'My First Words', 'Learn familiar words for people, places and things.', [
          subtopic('pp-language-words-family', 'pp-language-words', 'Family Members', 'Names for mother, father, sister, brother and friends.', [
            lesson('pp-language-words-family-lesson-1', 'pp-language-words-family', 'People I Love', 'A family can include mother, father, sisters, brothers, grandparents and friends who care for us.')
          ])
        ])
      ]),
      specialization('pp-language-stories', 'pp-language-activities', 'Stories and Conversation', 'Enjoy short stories, ask questions and share ideas.', [
        course('pp-language-story-time', 'pp-language-stories', 'Picture Story Time', 'Look at pictures, listen to a story and talk about what happens.', [
          subtopic('pp-language-story-listening', 'pp-language-story-time', 'Listening to a Story', 'Pay attention to the beginning, middle and end of a short story.', [
            lesson('pp-language-story-listening-lesson-1', 'pp-language-story-listening', 'The Friendly Cat', 'A short story about a cat who helps a mouse. Listen and talk about being kind.')
          ])
        ])
      ])
    ]),
    subject('pp-mathematics', 'pp-discipline-early', 'Mathematical Activities', '🔢', 'Counting, matching, shapes, patterns and sorting through play.', 'pp1', [
      specialization('pp-math-counting', 'pp-mathematics', 'Counting and Matching', 'Connect objects with number words and compare small groups.', [
        course('pp-math-numbers-1-5', 'pp-math-counting', 'Numbers 1 to 5', 'Say number names and match them to groups of up to five objects.', [
          subtopic('pp-math-count-objects', 'pp-math-numbers-1-5', 'Count Objects', 'Point to each object once while saying its number.', [
            lesson('pp-math-count-objects-lesson-1', 'pp-math-count-objects', 'Counting Blocks', 'Place blocks in a line. Touch each block and say one number for each block.')
          ], [
            practiceQuestion('pp-math-count-objects-q1', 'pp-math-count-objects-lesson-1', 'If you count three blocks, what is the last number you say?', ['1', '2', '3'], '3', 'The last number you say tells you how many blocks there are.')
          ])
        ])
      ]),
      specialization('pp-math-shapes', 'pp-mathematics', 'Shapes and Patterns', 'Notice circles, squares, triangles and repeating patterns.', [
        course('pp-math-basic-shapes', 'pp-math-shapes', 'Basic Shapes', 'Sort and name circles, squares and triangles.', [
          subtopic('pp-math-circle-square', 'pp-math-basic-shapes', 'Circle and Square', 'A circle is round with no corners. A square has four equal sides.', [
            lesson('pp-math-circle-square-lesson-1', 'pp-math-circle-square', 'Find the Round One', 'Look around the room and point to things that are round like a circle.')
          ])
        ])
      ])
    ]),
    subject('pp-environment', 'pp-discipline-early', 'Environmental Activities', '🌱', 'Explore familiar places, plants, animals and everyday observations.', 'pp1', [
      specialization('pp-environment-plants', 'pp-environment', 'Plants Around Us', 'Observe common plants, leaves, flowers and trees.', [
        course('pp-environment-garden', 'pp-environment-plants', 'Garden Discovery', 'Look at plants growing nearby and describe their colours and shapes.', [
          subtopic('pp-environment-leaves', 'pp-environment-garden', 'Leaves and Colours', 'Notice green leaves, brown stems and colourful flowers.', [
            lesson('pp-environment-leaves-lesson-1', 'pp-environment-leaves', 'Leaf Hunt', 'Collect fallen leaves and talk about their shapes, sizes and colours.')
          ])
        ])
      ])
    ]),
    subject('pp-creative', 'pp-discipline-early', 'Creative Activities', '🎨', 'Drawing, colouring, music, movement and making things.', 'pp1', [
      specialization('pp-creative-art', 'pp-creative', 'Colour and Drawing', 'Use crayons, paint and paper to express ideas.', [
        course('pp-creative-shapes', 'pp-creative-art', 'Drawing Shapes', 'Draw lines, circles and squares to make simple pictures.', [
          subtopic('pp-creative-lines', 'pp-creative-shapes', 'Lines and Curves', 'Draw straight lines, wavy lines and curly lines.', [
            lesson('pp-creative-lines-lesson-1', 'pp-creative-lines', 'My Wavy Line', 'Hold a crayon and draw a long wavy line across the page.')
          ])
        ])
      ])
    ])
  ];

  const pp2Early = [
    subject('pp2-mathematics', 'pp-discipline-early', 'Mathematical Activities', '🔢', 'Counting to ten, simple addition, shapes and patterns.', 'pp2', [
      specialization('pp2-math-counting', 'pp2-mathematics', 'Counting to Ten', 'Count objects up to ten and match numbers to groups.', [
        course('pp2-math-numbers-1-10', 'pp2-math-counting', 'Numbers 1 to 10', 'Say number names in order and match each to a group of objects.', [
          subtopic('pp2-math-count-to-ten', 'pp2-math-numbers-1-10', 'Count to Ten', 'Point and count from one to ten without skipping.', [
            lesson('pp2-math-count-to-ten-lesson-1', 'pp2-math-count-to-ten', 'Finger Counting', 'Hold up one finger for each number as you count to ten.')
          ], [
            practiceQuestion('pp2-math-count-to-ten-q1', 'pp2-math-count-to-ten-lesson-1', 'What number comes after 4 when counting?', ['3', '5', '6'], '5', 'Counting forward: 1, 2, 3, 4, 5. The number after 4 is 5.')
          ])
        ])
      ]),
      specialization('pp2-math-addition', 'pp2-mathematics', 'Simple Addition', 'Add two small groups together to find the total.', [
        course('pp2-math-add-to-five', 'pp2-math-addition', 'Adding Up to Five', 'Combine two groups of objects and count the total.', [
          subtopic('pp2-math-add-groups', 'pp2-math-add-to-five', 'Combining Groups', 'Put two groups together and count all the objects.', [
            lesson('pp2-math-add-groups-lesson-1', 'pp2-math-add-groups', 'Two and Two Make Four', 'Two blocks plus two blocks make four blocks in total.')
          ])
        ])
      ])
    ]),
    subject('pp2-english', 'pp-discipline-early', 'English Language Activities', '📖', 'Listening, speaking, reading simple words and writing names.', 'pp2', [
      specialization('pp2-english-reading', 'pp2-english', 'Reading Simple Words', 'Recognise letters, sounds and short familiar words.', [
        course('pp2-english-alphabet', 'pp2-english-reading', 'Alphabet Fun', 'Say letter names and match letters to pictures.', [
          subtopic('pp2-english-letter-a', 'pp2-english-alphabet', 'The Letter A', 'A is for apple, ant and arm. Say the sound and the name.', [
            lesson('pp2-english-letter-a-lesson-1', 'pp2-english-letter-a', 'Apple Starts with A', 'Look at an apple picture and say: A for apple.')
          ])
        ])
      ])
    ])
  ];

  disciplines.push(discipline('pp-discipline-early', 'Early Childhood (PP1 & PP2)', '🧸', 'Playful foundations in language, early mathematics, environment and creativity.', 'pp1', [...ppEarly, ...pp2Early]));

  // ---------- PRIMARY ----------
  const primarySubjects = [
    subject('primary-mathematics', 'primary-discipline', 'Mathematics', '∑', 'Numbers, operations, shapes, measurement and data handling.', 'primary', [
      specialization('primary-math-arithmetic', 'primary-mathematics', 'Arithmetic', 'Addition, subtraction, multiplication and division with whole numbers.', [
        course('primary-math-add-subtract', 'primary-math-arithmetic', 'Addition and Subtraction', 'Add and subtract numbers up to 100 using place value.', [
          subtopic('primary-math-addition-2digit', 'primary-math-add-subtract', 'Two-Digit Addition', 'Add numbers with tens and ones, carrying when needed.', [
            lesson('primary-math-addition-2digit-lesson-1', 'primary-math-addition-2digit', 'Adding Tens and Ones', 'Add the ones first, then the tens. If the ones make ten or more, carry one to the tens column.')
          ], [
            practiceQuestion('primary-math-addition-2digit-q1', 'primary-math-addition-2digit-lesson-1', 'What is 27 + 35?', ['52', '62', '57', '67'], '62', '7 + 5 = 12 (write 2, carry 1). 2 + 3 + 1 = 6. The answer is 62.')
          ])
        ])
      ]),
      specialization('primary-math-geometry', 'primary-mathematics', 'Shapes and Measurement', 'Identify 2D and 3D shapes, measure length, mass and time.', [
        course('primary-math-measurement', 'primary-math-geometry', 'Measuring Length', 'Use centimetres and metres to compare and measure objects.', [
          subtopic('primary-math-cm-m', 'primary-math-measurement', 'Centimetres and Metres', 'Choose the right unit and read a ruler.', [
            lesson('primary-math-cm-m-lesson-1', 'primary-math-cm-m', 'Using a Ruler', 'Line up the zero mark with the end of an object and read where it ends.')
          ])
        ])
      ])
    ]),
    subject('primary-english', 'primary-discipline', 'English', '📖', 'Reading comprehension, writing, grammar, spelling and speaking.', 'primary', [
      specialization('primary-english-reading', 'primary-english', 'Reading Comprehension', 'Read passages and identify main ideas, details and sequence.', [
        course('primary-english-passages', 'primary-english-reading', 'Short Passages', 'Read a story and answer questions about what happened.', [
          subtopic('primary-english-main-idea', 'primary-english-passages', 'Main Idea', 'Identify what a passage is mostly about.', [
            lesson('primary-english-main-idea-lesson-1', 'primary-english-main-idea', 'Finding the Main Idea', 'Ask yourself: what is the most important point the writer wants to share?')
          ])
        ])
      ]),
      specialization('primary-english-grammar', 'primary-english', 'Grammar and Sentences', 'Write clear sentences using nouns, verbs and punctuation.', [
        course('primary-english-sentences', 'primary-english-grammar', 'Building Sentences', 'Combine a subject and a verb to make a complete sentence.', [
          subtopic('primary-english-subject-verb', 'primary-english-sentences', 'Subject and Verb', 'Every sentence needs someone or something doing an action.', [
            lesson('primary-english-subject-verb-lesson-1', 'primary-english-subject-verb', 'Who Did What?', 'The cat sleeps. "The cat" is the subject and "sleeps" is the verb.')
          ])
        ])
      ])
    ]),
    subject('primary-science', 'primary-discipline', 'Science and Technology', '🔬', 'Observations, materials, living things, energy and simple technology.', 'primary', [
      specialization('primary-science-materials', 'primary-science', 'Materials Around Us', 'Compare materials by colour, texture, strength and flexibility.', [
        course('primary-science-properties', 'primary-science-materials', 'Observable Properties', 'Describe objects by what you can see, touch and measure.', [
          subtopic('primary-science-hard-soft', 'primary-science-properties', 'Hard and Soft', 'Sort objects into hard things and soft things.', [
            lesson('primary-science-hard-soft-lesson-1', 'primary-science-hard-soft', 'Touch and Describe', 'A stone is hard. A pillow is soft. Feel the difference.')
          ])
        ])
      ]),
      specialization('primary-science-living', 'primary-science', 'Living Things', 'Plants, animals, their needs and life cycles.', [
        course('primary-science-plants', 'primary-science-living', 'Growing Plants', 'What plants need to grow: water, light, soil and air.', [
          subtopic('primary-science-plant-needs', 'primary-science-plants', 'Plant Needs', 'Plants need sunlight, water and soil to grow healthy.', [
            lesson('primary-science-plant-needs-lesson-1', 'primary-science-plant-needs', 'Water and Light', 'Place one plant in sunlight and water it. Keep another in the dark and compare.')
          ])
        ])
      ])
    ]),
    subject('primary-kiswahili', 'primary-discipline', 'Kiswahili', '🗣️', 'Reading, writing, speaking and listening in Kiswahili.', 'primary', [
      specialization('primary-kiswahili-sarufi', 'primary-kiswahili', 'Sarufi na Matumizi', 'Grammar and everyday language use.', [
        course('primary-kiswahili-sentensi', 'primary-kiswahili-sarufi', 'Sentensi za Kawaida', 'Kusoma na kuandika sentensi rahisi.', [
          subtopic('primary-kiswahili-nomino', 'primary-kiswahili-sentensi', 'Nomino', 'Nomino ni jina la mtu, vitu au maeneo.', [
            lesson('primary-kiswahili-nomino-lesson-1', 'primary-kiswahili-nomino', 'Jina la Mtu', 'Mwalimu, mtoto na baba ni nomino.')
          ])
        ])
      ])
    ]),
    subject('primary-social-studies', 'primary-discipline', 'Social Studies', '🧭', 'Communities, maps, history and citizenship.', 'primary', [
      specialization('primary-social-communities', 'primary-social-studies', 'My Community', 'People, places and shared responsibilities nearby.', [
        course('primary-social-places', 'primary-social-communities', 'Places in My Area', 'Identify school, market, hospital and places of worship.', [
          subtopic('primary-social-school', 'primary-social-places', 'My School', 'A school is a place where children learn together.', [
            lesson('primary-social-school-lesson-1', 'primary-social-school', 'People at School', 'Teachers, pupils, cooks and guards all help the school run.')
          ])
        ])
      ])
    ]),
    subject('primary-agriculture', 'primary-discipline', 'Agriculture', '🌾', 'Plants, soil, food growing and caring for the environment.', 'primary', [
      specialization('primary-agriculture-crops', 'primary-agriculture', 'Growing Crops', 'Plant seeds, water them and observe growth.', [
        course('primary-agriculture-seeds', 'primary-agriculture-crops', 'From Seed to Plant', 'Plant a seed and watch it become a seedling.', [
          subtopic('primary-agriculture-planting', 'primary-agriculture-seeds', 'Planting a Seed', 'Put soil in a container, add a seed, water it and place it in light.', [
            lesson('primary-agriculture-planting-lesson-1', 'primary-agriculture-planting', 'My Bean Plant', 'Plant a bean seed in a cup and record how it grows each week.')
          ])
        ])
      ])
    ]),
    subject('primary-creative-arts', 'primary-discipline', 'Creative Arts', '🎨', 'Art, music, dance and drama activities.', 'primary', [
      specialization('primary-creative-drawing', 'primary-creative-arts', 'Drawing and Painting', 'Create pictures using shapes, colours and imagination.', [
        course('primary-creative-colours', 'primary-creative-drawing', 'Mixing Colours', 'Mix primary colours to make new colours.', [
          subtopic('primary-creative-mix', 'primary-creative-colours', 'Primary Colours', 'Red, blue and yellow are primary colours.', [
            lesson('primary-creative-mix-lesson-1', 'primary-creative-mix', 'Red and Blue Make Purple', 'Mix red paint with blue paint to see purple appear.')
          ])
        ])
      ])
    ]),
    subject('primary-religious-education', 'primary-discipline', 'Religious Education', '🌟', 'Stories, values, respect and care in communities.', 'primary', [
      specialization('primary-re-values', 'primary-religious-education', 'Values and Choices', 'Fairness, kindness, honesty and responsibility.', [
        course('primary-re-stories', 'primary-re-values', 'Learning from Stories', 'Reflect on stories and the choices characters make.', [
          subtopic('primary-re-kindness', 'primary-re-stories', 'Kindness', 'Notice kind actions and how they help others.', [
            lesson('primary-re-kindness-lesson-1', 'primary-re-kindness', 'Sharing with Friends', 'Sharing a pencil or a snack is a kind action.')
          ])
        ])
      ])
    ])
  ];

  disciplines.push(discipline('primary-discipline', 'Primary Education', '🎒', 'Build confidence with core learning and creative exploration across subjects.', 'primary', primarySubjects));

  // ---------- JUNIOR SECONDARY ----------
  const juniorSubjects = [
    subject('cbc-junior-mathematics', 'junior-discipline', 'Mathematics', '∑', 'Number, algebra, geometry, data and probability.', 'junior-secondary', [
      specialization('junior-math-algebra', 'cbc-junior-mathematics', 'Algebraic Thinking', 'Use symbols and expressions to represent relationships.', [
        course('junior-math-simple-equations', 'junior-math-algebra', 'Simple Equations', 'Solve equations like x + 3 = 7.', [
          subtopic('junior-math-solving-equations', 'junior-math-simple-equations', 'Solving One-Step Equations', 'Do the same thing to both sides to keep the equation balanced.', [
            lesson('junior-math-solving-equations-lesson-1', 'junior-math-solving-equations', 'Balance the Equation', 'To solve x + 3 = 7, subtract 3 from both sides: x = 4.')
          ], [
            practiceQuestion('junior-math-solving-equations-q1', 'junior-math-solving-equations-lesson-1', 'Solve: x + 5 = 12', ['5', '7', '12', '17'], '7', 'Subtract 5 from both sides: x = 12 - 5 = 7.')
          ])
        ])
      ]),
      specialization('junior-math-data', 'cbc-junior-mathematics', 'Data and Probability', 'Collect, organise and interpret data; explore chance.', [
        course('junior-math-graphs', 'junior-math-data', 'Bar Graphs and Tables', 'Represent data in tables and draw simple bar graphs.', [
          subtopic('junior-math-reading-graphs', 'junior-math-graphs', 'Reading a Bar Graph', 'Read the height of each bar to compare categories.', [
            lesson('junior-math-reading-graphs-lesson-1', 'junior-math-reading-graphs', 'Favourite Fruits', 'A bar graph shows how many learners like apples, bananas and oranges.')
          ])
        ])
      ])
    ]),
    subject('cbc-junior-integrated-science', 'junior-discipline', 'Integrated Science', '🔬', 'Living things, matter, energy, earth and space.', 'junior-secondary', [
      specialization('junior-science-living', 'cbc-junior-integrated-science', 'Living Systems', 'Cells, organisms, ecosystems and health.', [
        course('junior-science-cells', 'junior-science-living', 'Cells and Organisms', 'Plant and animal cells, tissues and organs.', [
          subtopic('junior-science-cell-parts', 'junior-science-cells', 'Parts of a Cell', 'Nucleus, cell membrane, cytoplasm and their functions.', [
            lesson('junior-science-cell-parts-lesson-1', 'junior-science-cell-parts', 'The Cell Nucleus', 'The nucleus holds genetic information and controls cell activities.')
          ], [
            practiceQuestion('junior-science-cell-parts-q1', 'junior-science-cell-parts-lesson-1', 'Which part of the cell holds genetic information?', ['Cell wall', 'Nucleus', 'Cytoplasm'], 'Nucleus', 'The nucleus contains DNA, the genetic instructions of the cell.')
          ])
        ])
      ]),
      specialization('junior-science-matter', 'cbc-junior-integrated-science', 'Matter and Energy', 'States of matter, forces, energy transfers and simple machines.', [
        course('junior-science-states', 'junior-science-matter', 'States of Matter', 'Solid, liquid and gas; changes of state.', [
          subtopic('junior-science-changes-of-state', 'junior-science-states', 'Melting and Freezing', 'Ice melts to water; water freezes to ice.', [
            lesson('junior-science-changes-of-state-lesson-1', 'junior-science-changes-of-state', 'Water Changes State', 'When ice warms up it becomes liquid water; when water cools it becomes ice.')
          ])
        ])
      ])
    ]),
    subject('cbc-junior-english', 'junior-discipline', 'English', '📖', 'Reading, writing, grammar, literature and communication.', 'junior-secondary', [
      specialization('junior-english-literature', 'cbc-junior-english', 'Literature and Texts', 'Read stories, poems and plays; discuss themes and characters.', [
        course('junior-english-stories', 'junior-english-literature', 'Reading Narratives', 'Identify plot, setting, characters and message in a story.', [
          subtopic('junior-english-story-elements', 'junior-english-stories', 'Story Elements', 'Beginning, middle, end; who, what, where and why.', [
            lesson('junior-english-story-elements-lesson-1', 'junior-english-story-elements', 'The Main Character', 'The main character is the person the story follows most closely.')
          ])
        ])
      ]),
      specialization('junior-english-grammar', 'cbc-junior-english', 'Grammar and Writing', 'Sentences, paragraphs, tenses and punctuation.', [
        course('junior-english-paragraphs', 'junior-english-grammar', 'Writing Paragraphs', 'Group related sentences around one main idea.', [
          subtopic('junior-english-topic-sentence', 'junior-english-paragraphs', 'Topic Sentence', 'The first sentence often tells what the paragraph is about.', [
            lesson('junior-english-topic-sentence-lesson-1', 'junior-english-topic-sentence', 'Start with the Idea', 'Begin a paragraph by stating its main point clearly.')
          ])
        ])
      ])
    ]),
    subject('cbc-junior-pre-technical', 'junior-discipline', 'Pre-Technical Studies', '💻', 'Digital literacy, design, materials and practical problem solving.', 'junior-secondary', [
      specialization('junior-tech-digital', 'cbc-junior-pre-technical', 'Digital Literacy', 'Use computers, the internet and digital tools safely.', [
        course('junior-tech-computer-basics', 'junior-tech-digital', 'Computer Basics', 'Hardware, software, files and folders.', [
          subtopic('junior-tech-hardware-software', 'junior-tech-computer-basics', 'Hardware and Software', 'Hardware is what you can touch; software is the programs.', [
            lesson('junior-tech-hardware-software-lesson-1', 'junior-tech-hardware-software', 'Parts of a Computer', 'Keyboard, mouse, screen and processor are hardware parts.')
          ])
        ])
      ]),
      specialization('junior-tech-design', 'cbc-junior-pre-technical', 'Designing Solutions', 'Identify a need, sketch ideas and make a simple model.', [
        course('junior-tech-design-process', 'junior-tech-design', 'The Design Process', 'Ask, imagine, plan, create and improve.', [
          subtopic('junior-tech-ask-imagine', 'junior-tech-design-process', 'Ask and Imagine', 'What problem are we solving? What could work?', [
            lesson('junior-tech-ask-imagine-lesson-1', 'junior-tech-ask-imagine', 'Define the Problem', 'Write down who needs help and what the challenge is.')
          ])
        ])
      ])
    ]),
    subject('cbc-junior-social-studies', 'junior-discipline', 'Social Studies', '🧭', 'Geography, history, citizenship and society.', 'junior-secondary', [
      specialization('junior-social-geography', 'cbc-junior-social-studies', 'People and Places', 'Maps, environments and how people use land.', [
        course('junior-social-maps', 'junior-social-geography', 'Reading Simple Maps', 'Symbols, keys, directions and locating places.', [
          subtopic('junior-social-map-keys', 'junior-social-maps', 'Map Symbols and Keys', 'A key explains what map symbols mean.', [
            lesson('junior-social-map-keys-lesson-1', 'junior-social-map-keys', 'Using a Map Key', 'A blue line on a map often represents a river.')
          ])
        ])
      ]),
      specialization('junior-social-citizenship', 'cbc-junior-social-studies', 'Citizenship', 'Rights, responsibilities, rules and decision-making.', [
        course('junior-social-rights', 'junior-social-citizenship', 'Rights and Responsibilities', 'Children\'s rights and duties at home and school.', [
          subtopic('junior-social-responsibilities', 'junior-social-rights', 'Responsibilities at School', 'Learners help keep classrooms clean and respect others.', [
            lesson('junior-social-responsibilities-lesson-1', 'junior-social-responsibilities', 'Caring for Our Classroom', 'Put litter in the bin and take care of books and desks.')
          ])
        ])
      ])
    ]),
    subject('cbc-junior-agriculture', 'junior-discipline', 'Agriculture and Nutrition', '🌾', 'Food systems, growing crops, livestock and nutrition.', 'junior-secondary', [
      specialization('junior-agri-growing', 'cbc-junior-agriculture', 'Growing Food', 'Crop care, soil health and harvesting.', [
        course('junior-agri-soil', 'junior-agri-growing', 'Soil and Plant Growth', 'Different soil types support different plants.', [
          subtopic('junior-agri-soil-types', 'junior-agri-soil', 'Clay, Loam and Sand', 'Loamy soil holds water and nutrients well for many crops.', [
            lesson('junior-agri-soil-types-lesson-1', 'junior-agri-soil-types', 'Feeling the Soil', 'Rub soil between your fingers to feel if it is gritty, smooth or sticky.')
          ])
        ])
      ])
    ])
  ];

  disciplines.push(discipline('junior-discipline', 'Junior Secondary (CBC Grades 7-9)', '🔬', 'Broad, inquiry-based learning across science, technology, languages, arts and social studies.', 'junior-secondary', juniorSubjects));

  // ---------- SENIOR SECONDARY ----------
  const seniorSubjects = [
    subject('senior-mathematics', 'senior-discipline', 'Mathematics', '∑', 'Algebra, functions, calculus, statistics, trigonometry and geometry.', 'senior-secondary', [
      specialization('senior-math-algebra', 'senior-mathematics', 'Algebra and Functions', 'Expressions, equations, functions and graphs.', [
        course('senior-math-quadratics', 'senior-math-algebra', 'Quadratic Functions', 'Solve and graph quadratic equations.', [
          subtopic('senior-math-solving-quadratics', 'senior-math-quadratics', 'Solving Quadratics', 'Factorising, completing the square and the quadratic formula.', [
            lesson('senior-math-solving-quadratics-lesson-1', 'senior-math-solving-quadratics', 'The Quadratic Formula', 'For ax² + bx + c = 0, x = (-b ± √(b² - 4ac)) / 2a.')
          ], [
            practiceQuestion('senior-math-solving-quadratics-q1', 'senior-math-solving-quadratics-lesson-1', 'Solve x² - 5x + 6 = 0', ['2, 3', '1, 6', '2, 4', '3, 5'], '2, 3', 'Factorise: (x - 2)(x - 3) = 0, so x = 2 or x = 3.')
          ])
        ])
      ]),
      specialization('senior-math-statistics', 'senior-mathematics', 'Statistics and Probability', 'Data presentation, averages, probability and distributions.', [
        course('senior-math-probability', 'senior-math-statistics', 'Probability', 'Theoretical and experimental probability of events.', [
          subtopic('senior-math-simple-probability', 'senior-math-probability', 'Simple Probability', 'Probability = favourable outcomes ÷ total outcomes.', [
            lesson('senior-math-simple-probability-lesson-1', 'senior-math-simple-probability', 'Rolling a Die', 'A fair die has six faces. The chance of rolling a 3 is 1/6.')
          ])
        ])
      ])
    ]),
    subject('senior-biology', 'senior-discipline', 'Biology', '🧬', 'Cell biology, genetics, ecology, evolution and human physiology.', 'senior-secondary', [
      specialization('senior-bio-cells', 'senior-biology', 'Cell Biology', 'Cell structure, division, transport and biomolecules.', [
        course('senior-bio-cell-structure', 'senior-bio-cells', 'Cell Structure and Function', 'Prokaryotic and eukaryotic cells; organelles.', [
          subtopic('senior-bio-mitochondria', 'senior-bio-cell-structure', 'Mitochondria', 'The powerhouse of the cell; aerobic respiration.', [
            lesson('senior-bio-mitochondria-lesson-1', 'senior-bio-mitochondria', 'Energy from Mitochondria', 'Mitochondria release energy from glucose through respiration.')
          ], [
            practiceQuestion('senior-bio-mitochondria-q1', 'senior-bio-mitochondria-lesson-1', 'What is the main function of mitochondria?', ['Make proteins', 'Release energy', 'Store water'], 'Release energy', 'Mitochondria carry out respiration to release usable energy.')
          ])
        ])
      ]),
      specialization('senior-bio-genetics', 'senior-biology', 'Genetics and Inheritance', 'DNA, genes, chromosomes and inheritance patterns.', [
        course('senior-bio-dna', 'senior-bio-genetics', 'DNA and Genes', 'Structure of DNA and how genes code for proteins.', [
          subtopic('senior-bio-dna-structure', 'senior-bio-dna', 'DNA Double Helix', 'DNA has two strands joined by base pairs: A-T, C-G.', [
            lesson('senior-bio-dna-structure-lesson-1', 'senior-bio-dna-structure', 'Base Pairing', 'Adenine pairs with thymine; cytosine pairs with guanine.')
          ])
        ])
      ])
    ]),
    subject('senior-chemistry', 'senior-discipline', 'Chemistry', '⚗️', 'Atomic structure, bonding, reactions, acids, bases and organic chemistry.', 'senior-secondary', [
      specialization('senior-chem-atomic', 'senior-chemistry', 'Atomic Structure and Bonding', 'Atoms, ions, covalent and ionic bonding.', [
        course('senior-chem-bonding', 'senior-chem-atomic', 'Chemical Bonding', 'How atoms join to form molecules.', [
          subtopic('senior-chem-ionic', 'senior-chem-bonding', 'Ionic Bonding', 'Metals transfer electrons to non-metals to form ions.', [
            lesson('senior-chem-ionic-lesson-1', 'senior-chem-ionic', 'Sodium Chloride', 'Sodium gives one electron to chlorine, forming Na⁺ and Cl⁻ ions that attract.')
          ], [
            practiceQuestion('senior-chem-ionic-q1', 'senior-chem-ionic-lesson-1', 'In ionic bonding, atoms:', ['Share electrons', 'Transfer electrons', 'Lose protons'], 'Transfer electrons', 'Ionic bonds form when one atom transfers electrons to another.')
          ])
        ])
      ]),
      specialization('senior-chem-acids', 'senior-chemistry', 'Acids, Bases and Salts', 'pH, indicators, neutralisation and salts.', [
        course('senior-chem-ph', 'senior-chem-acids', 'pH and Indicators', 'Measure acidity and alkalinity using pH scale.', [
          subtopic('senior-chem-ph-scale', 'senior-chem-ph', 'The pH Scale', 'pH below 7 is acidic, 7 is neutral, above 7 is alkaline.', [
            lesson('senior-chem-ph-scale-lesson-1', 'senior-chem-ph-scale', 'Testing with Litmus', 'Blue litmus turns red in acid; red litmus turns blue in base.')
          ])
        ])
      ])
    ]),
    subject('senior-physics', 'senior-discipline', 'Physics', '⚡', 'Mechanics, electricity, waves, energy, matter and modern physics.', 'senior-secondary', [
      specialization('senior-phys-mechanics', 'senior-physics', 'Mechanics', 'Motion, forces, energy, momentum and machines.', [
        course('senior-phys-motion', 'senior-phys-mechanics', 'Motion and Forces', 'Speed, velocity, acceleration and Newton\'s laws.', [
          subtopic('senior-phys-newton-2', 'senior-phys-motion', 'Newton\'s Second Law', 'Force = mass × acceleration (F = ma).', [
            lesson('senior-phys-newton-2-lesson-1', 'senior-phys-newton-2', 'Force and Acceleration', 'Pushing a heavier object with the same force produces less acceleration.')
          ], [
            practiceQuestion('senior-phys-newton-2-q1', 'senior-phys-newton-2-lesson-1', 'F = ma means force equals:', ['Mass × acceleration', 'Mass + acceleration', 'Mass ÷ acceleration'], 'Mass × acceleration', 'Newton\'s second law states force equals mass multiplied by acceleration.')
          ])
        ])
      ]),
      specialization('senior-phys-electricity', 'senior-physics', 'Electricity and Magnetism', 'Circuits, current, voltage, resistance and magnetism.', [
        course('senior-phys-circuits', 'senior-phys-electricity', 'Simple Circuits', 'Series and parallel circuits; Ohm\'s law.', [
          subtopic('senior-phys-ohms-law', 'senior-phys-circuits', 'Ohm\'s Law', 'Voltage = current × resistance (V = IR).', [
            lesson('senior-phys-ohms-law-lesson-1', 'senior-phys-ohms-law', 'Using Ohm\'s Law', 'If current is 2 A and resistance is 5 Ω, voltage is 10 V.')
          ])
        ])
      ])
    ]),
    subject('senior-english', 'senior-discipline', 'English', '📖', 'Literature, language, essay writing and communication.', 'senior-secondary', [
      specialization('senior-english-lit', 'senior-english', 'Literature Analysis', 'Novels, plays, poetry; themes, characters and techniques.', [
        course('senior-english-poetry', 'senior-english-lit', 'Poetry', 'Imagery, rhyme, rhythm, tone and meaning.', [
          subtopic('senior-english-imagery', 'senior-english-poetry', 'Imagery and Figurative Language', 'Metaphor, simile and personification create pictures in words.', [
            lesson('senior-english-imagery-lesson-1', 'senior-english-imagery', 'Metaphor vs Simile', 'A simile uses "like" or "as"; a metaphor states something is something else.')
          ])
        ])
      ]),
      specialization('senior-english-writing', 'senior-english', 'Essay and Composition Writing', 'Planning, drafting, revising and editing essays.', [
        course('senior-english-essay', 'senior-english-writing', 'The Argumentative Essay', 'State a claim and support it with evidence.', [
          subtopic('senior-english-thesis', 'senior-english-essay', 'Thesis Statement', 'A clear, debatable claim at the end of the introduction.', [
            lesson('senior-english-thesis-lesson-1', 'senior-english-thesis', 'Crafting a Thesis', 'A thesis tells the reader your main argument and how you will support it.')
          ])
        ])
      ])
    ]),
    subject('senior-history', 'senior-discipline', 'History', '⌛', 'Historical sources, change, continuity and interpretation.', 'senior-secondary', [
      specialization('senior-history-sources', 'senior-history', 'Historical Evidence', 'Primary and secondary sources; bias and reliability.', [
        course('senior-history-evaluating', 'senior-history-sources', 'Evaluating Sources', 'Ask who made a source, why and when.', [
          subtopic('senior-history-bias', 'senior-history-evaluating', 'Bias in Sources', 'Every source reflects the perspective of its creator.', [
            lesson('senior-history-bias-lesson-1', 'senior-history-bias', 'Reading Critically', 'Compare two accounts of the same event to spot differences.')
          ])
        ])
      ]),
      specialization('senior-history-africa', 'senior-history', 'African History', 'Early societies, kingdoms, colonialism and independence.', [
        course('senior-history-kingdoms', 'senior-history-africa', 'Pre-Colonial Kingdoms', 'Great Zimbabwe, Mali, Buganda and other African states.', [
          subtopic('senior-history-great-zimbabwe', 'senior-history-kingdoms', 'Great Zimbabwe', 'A stone-built city and centre of trade in southern Africa.', [
            lesson('senior-history-great-zimbabwe-lesson-1', 'senior-history-great-zimbabwe', 'Stone Walls and Trade', 'Great Zimbabwe controlled gold and ivory trade routes.')
          ])
        ])
      ])
    ]),
    subject('senior-geography', 'senior-discipline', 'Geography', '🌍', 'Physical landscapes, climate, population and human geography.', 'senior-secondary', [
      specialization('senior-geo-physical', 'senior-geography', 'Physical Geography', 'Landforms, climate, rivers and ecosystems.', [
        course('senior-geo-climate', 'senior-geo-physical', 'Climate and Weather', 'Elements of weather and climate zones.', [
          subtopic('senior-geo-rainfall', 'senior-geo-climate', 'Rainfall Types', 'Convectional, relief and frontal rainfall.', [
            lesson('senior-geo-rainfall-lesson-1', 'senior-geo-rainfall', 'Convectional Rainfall', 'Warm air rises, cools and condenses to form rain, often in the afternoon.')
          ])
        ])
      ]),
      specialization('senior-geo-human', 'senior-geography', 'Human Geography', 'Population, settlement, migration and urbanisation.', [
        course('senior-geo-population', 'senior-geo-human', 'Population Growth', 'Birth rates, death rates and population pyramids.', [
          subtopic('senior-geo-pop-pyramid', 'senior-geo-population', 'Population Pyramids', 'Graphs showing age and sex structure of a population.', [
            lesson('senior-geo-pop-pyramid-lesson-1', 'senior-geo-pop-pyramid', 'Reading a Pyramid', 'A wide base means many young people and a growing population.')
          ])
        ])
      ])
    ]),
    subject('senior-computer-studies', 'senior-discipline', 'Computer Studies', '💻', 'Algorithms, programming, data and digital systems.', 'senior-secondary', [
      specialization('senior-cs-programming', 'senior-computer-studies', 'Programming Fundamentals', 'Variables, loops, conditionals and functions.', [
        course('senior-cs-python-basics', 'senior-cs-programming', 'Python Basics', 'Write and run simple Python programs.', [
          subtopic('senior-cs-variables', 'senior-cs-python-basics', 'Variables and Data Types', 'Store numbers, text and boolean values in named variables.', [
            lesson('senior-cs-variables-lesson-1', 'senior-cs-variables', 'Creating a Variable', 'name = "Atlas" stores the text "Atlas" in a variable called name.')
          ], [
            practiceQuestion('senior-cs-variables-q1', 'senior-cs-variables-lesson-1', 'In Python, which stores text?', ['x = 5', 'name = "Atlas"', 'flag = True'], 'name = "Atlas"', 'Quotes around Atlas make it a string (text) value.')
          ])
        ])
      ]),
      specialization('senior-cs-data', 'senior-computer-studies', 'Data and Digital Systems', 'How computers store, process and transmit information.', [
        course('senior-cs-binary', 'senior-cs-data', 'Binary and Data Representation', 'Bits, bytes and representing text and numbers.', [
          subtopic('senior-cs-binary-basics', 'senior-cs-binary', 'Bits and Bytes', 'A bit is 0 or 1; eight bits make a byte.', [
            lesson('senior-cs-binary-basics-lesson-1', 'senior-cs-binary-basics', 'What Is a Bit?', 'The smallest unit of data a computer stores is a single binary digit.')
          ])
        ])
      ])
    ]),
    subject('senior-business', 'senior-discipline', 'Business Studies', '📊', 'Enterprise, finance, marketing and entrepreneurship.', 'senior-secondary', [
      specialization('senior-bus-enterprise', 'senior-business', 'Enterprise and Entrepreneurship', 'Identifying opportunities and starting ventures.', [
        course('senior-bus-business-plan', 'senior-bus-enterprise', 'Business Planning', 'Write a simple business plan.', [
          subtopic('senior-bus-value-proposition', 'senior-bus-business-plan', 'Value Proposition', 'What need does the business meet and for whom?', [
            lesson('senior-bus-value-proposition-lesson-1', 'senior-bus-value-proposition', 'Solving a Customer Problem', 'A good business idea helps customers solve a real problem.')
          ])
        ])
      ]),
      specialization('senior-bus-finance', 'senior-business', 'Financial Literacy', 'Income, expenses, budgeting and basic records.', [
        course('senior-bus-budgeting', 'senior-bus-finance', 'Budgeting', 'Plan income and spending over time.', [
          subtopic('senior-bus-income-expense', 'senior-bus-budgeting', 'Income and Expenses', 'Income is money received; expenses are money spent.', [
            lesson('senior-bus-income-expense-lesson-1', 'senior-bus-income-expense', 'Tracking Pocket Money', 'Write down money received and money spent each week.')
          ])
        ])
      ])
    ]),
    subject('senior-creative-arts', 'senior-discipline', 'Creative Arts', '🎭', 'Visual art, music, dance, drama and design.', 'senior-secondary', [
      specialization('senior-arts-visual', 'senior-creative-arts', 'Visual Arts', 'Drawing, painting, sculpture and design principles.', [
        course('senior-arts-drawing', 'senior-arts-visual', 'Drawing Techniques', 'Line, tone, texture and perspective.', [
          subtopic('senior-arts-perspective', 'senior-arts-drawing', 'Perspective Drawing', 'Show depth by making distant objects smaller.', [
            lesson('senior-arts-perspective-lesson-1', 'senior-arts-perspective', 'Vanishing Point', 'Parallel lines appear to meet at a vanishing point in the distance.')
          ])
        ])
      ])
    ]),
    subject('senior-sports', 'senior-discipline', 'Sports and Physical Education', '🏅', 'Movement, fitness, teamwork and wellbeing.', 'senior-secondary', [
      specialization('senior-sports-fitness', 'senior-sports', 'Physical Fitness', 'Cardiovascular health, strength and flexibility.', [
        course('senior-sports-exercise', 'senior-sports-fitness', 'Warm-Up and Cool-Down', 'Prepare the body for activity and recover safely.', [
          subtopic('senior-sports-warmup', 'senior-sports-exercise', 'Why Warm Up', 'Warming up raises heart rate and loosens muscles.', [
            lesson('senior-sports-warmup-lesson-1', 'senior-sports-warmup', 'Stretching Before Play', 'Gentle stretches reduce the risk of muscle injury.')
          ])
        ])
      ])
    ])
  ];

  disciplines.push(discipline('senior-discipline', 'Senior Secondary (Grades 10-12)', '🏛️', 'Specialised subjects preparing learners for university, careers and lifelong learning.', 'senior-secondary', seniorSubjects));

  // ---------- 8-4-4 ----------
  const formSubjects = [
    subject('844-mathematics', 'form-discipline', 'Mathematics', '∑', 'Algebra, geometry, trigonometry, statistics and calculus.', '8-4-4', [
      specialization('844-math-algebra', '844-mathematics', 'Algebra', 'Equations, inequalities, sequences and series.', [
        course('844-math-equations', '844-math-algebra', 'Simultaneous Equations', 'Solve two equations with two unknowns.', [
          subtopic('844-math-substitution', '844-math-equations', 'Substitution Method', 'Substitute one equation into the other to solve.', [
            lesson('844-math-substitution-lesson-1', '844-math-substitution', 'Solving by Substitution', 'Make one variable the subject, then substitute into the second equation.')
          ])
        ])
      ]),
      specialization('844-math-trig', '844-mathematics', 'Trigonometry', 'Sine, cosine, tangent and their applications.', [
        course('844-math-trig-ratios', '844-math-trig', 'Trigonometric Ratios', 'Right-angled triangles and SOH CAH TOA.', [
          subtopic('844-math-sohcahtoa', '844-math-trig-ratios', 'SOH CAH TOA', 'Sine = opposite/hypotenuse, cosine = adjacent/hypotenuse, tangent = opposite/adjacent.', [
            lesson('844-math-sohcahtoa-lesson-1', '844-math-sohcahtoa', 'Finding a Side', 'Use sine to find the opposite side when you know the hypotenuse and angle.')
          ])
        ])
      ])
    ]),
    subject('844-biology', 'form-discipline', 'Biology', '🧬', 'Cell biology, genetics, ecology, evolution and classification.', '8-4-4', [
      specialization('844-bio-ecology', '844-biology', 'Ecology', 'Ecosystems, food chains, nutrient cycles and conservation.', [
        course('844-bio-ecosystems', '844-bio-ecology', 'Ecosystems', 'Producers, consumers, decomposers and energy flow.', [
          subtopic('844-bio-food-chain', '844-bio-ecosystems', 'Food Chains', 'Energy flows from producers to consumers to decomposers.', [
            lesson('844-bio-food-chain-lesson-1', '844-bio-food-chain', 'Grass to Lion', 'Grass → zebra → lion shows energy moving through a food chain.')
          ])
        ])
      ])
    ]),
    subject('844-chemistry', 'form-discipline', 'Chemistry', '⚗️', 'Matter, atomic structure, bonding, reactions and organic chemistry.', '8-4-4', [
      specialization('844-chem-mole', '844-chemistry', 'The Mole Concept', 'Molar mass, Avogadro\'s number and stoichiometry.', [
        course('844-chem-mole-calc', '844-chem-mole', 'Mole Calculations', 'Convert between mass, moles and number of particles.', [
          subtopic('844-chem-molar-mass', '844-chem-mole-calc', 'Molar Mass', 'The mass of one mole of a substance in grams.', [
            lesson('844-chem-molar-mass-lesson-1', '844-chem-molar-mass', 'Water Molar Mass', 'H₂O: 2(1) + 16 = 18 g/mol.')
          ])
        ])
      ])
    ]),
    subject('844-physics', 'form-discipline', 'Physics', '⚡', 'Mechanics, waves, electricity, magnetism and modern physics.', '8-4-4', [
      specialization('844-phys-waves', '844-physics', 'Waves', 'Transverse and longitudinal waves, sound and light.', [
        course('844-phys-sound', '844-phys-waves', 'Sound Waves', 'Frequency, pitch, loudness and echoes.', [
          subtopic('844-phys-frequency', '844-phys-sound', 'Frequency and Pitch', 'Higher frequency means higher pitch.', [
            lesson('844-phys-frequency-lesson-1', '844-phys-frequency', 'Whistle vs Drum', 'A whistle makes high-frequency sound; a drum makes low-frequency sound.')
          ])
        ])
      ])
    ]),
    subject('844-english', 'form-discipline', 'English', '📖', 'Grammar, comprehension, composition and literature.', '8-4-4', [
      specialization('844-eng-composition', '844-english', 'Composition Writing', 'Narrative, descriptive, expository and argumentative essays.', [
        course('844-eng-narrative', '844-eng-composition', 'Narrative Essays', 'Tell a story with plot, characters and dialogue.', [
          subtopic('844-eng-dialogue', '844-eng-narrative', 'Writing Dialogue', 'Use quotation marks and show how characters speak.', [
            lesson('844-eng-dialogue-lesson-1', '844-eng-dialogue', 'Quotation Marks', 'Put the spoken words inside quotation marks: "Hello," she said.')
          ])
        ])
      ])
    ]),
    subject('844-kiswahili', 'form-discipline', 'Kiswahili', '🗣️', 'Sarufi, fasihi, usomaji na uandishi.', '8-4-4', [
      specialization('844-swa-sarufi', '844-kiswahili', 'Sarufi', 'Noma, vibakishi na matumizi ya lugha.', [
        course('844-swa-noma', '844-swa-sarufi', 'Noma za Kiswahili', 'Kujua nombo, tukio na kielelezo.', [
          subtopic('844-swa-nombo', '844-eng-narrative', 'Nombo', 'Nombo hula jina.', [
            lesson('844-swa-nombo-lesson-1', '844-swa-nombo', 'Mtu ni Nombo', 'Mwalimu, mtoto na mzee ni watu.')
          ])
        ])
      ])
    ]),
    subject('844-geography', 'form-discipline', 'Geography', '🌍', 'Earth, weather, climate, soils, vegetation and human activities.', '8-4-4', [
      specialization('844-geo-climate', '844-geography', 'Weather and Climate', 'Elements of weather and climate classification.', [
        course('844-geo-instruments', '844-geo-climate', 'Weather Instruments', 'Thermometer, rain gauge, barometer and anemometer.', [
          subtopic('844-geo-rain-gauge', '844-geo-instruments', 'Rain Gauge', 'A rain gauge collects and measures rainfall.', [
            lesson('844-geo-rain-gauge-lesson-1', '844-geo-rain-gauge', 'Measuring Rain', 'Read the millimetres of water collected in the gauge.')
          ])
        ])
      ])
    ]),
    subject('844-history', 'form-discipline', 'History and Government', '⌛', 'Historical sources, African history and government.', '8-4-4', [
      specialization('844-hist-sources', '844-history', 'Historical Sources', 'Oral traditions, archaeology, written records.', [
        course('844-hist-oral', '844-hist-sources', 'Oral Traditions', 'Stories, songs and proverbs passed down generations.', [
          subtopic('844-hist-proverbs', '844-hist-oral', 'Proverbs as Sources', 'Proverbs carry community wisdom and history.', [
            lesson('844-hist-proverbs-lesson-1', '844-hist-proverbs', 'Learning from Elders', 'Elders share history through stories and sayings.')
          ])
        ])
      ])
    ]),
    subject('844-computer-studies', 'form-discipline', 'Computer Studies', '💻', 'Programming, computer systems and information processing.', '8-4-4', [
      specialization('844-cs-programming', '844-computer-studies', 'Programming', 'Problem-solving, algorithms and coding.', [
        course('844-cs-flowcharts', '844-cs-programming', 'Flowcharts and Algorithms', 'Represent steps visually before coding.', [
          subtopic('844-cs-flowchart-symbols', '844-cs-flowcharts', 'Flowchart Symbols', 'Oval = start/end, rectangle = process, diamond = decision.', [
            lesson('844-cs-flowchart-symbols-lesson-1', '844-cs-flowchart-symbols', 'The Decision Diamond', 'A diamond asks a yes/no question and splits the flow.')
          ])
        ])
      ])
    ]),
    subject('844-business', 'form-discipline', 'Business Studies', '📊', 'Business activity, finance, trade and entrepreneurship.', '8-4-4', [
      specialization('844-bus-trade', '844-business', 'Trade and Markets', 'Buying, selling, demand and supply.', [
        course('844-bus-demand-supply', '844-bus-trade', 'Demand and Supply', 'How price affects what people buy and sell.', [
          subtopic('844-bus-law-of-demand', '844-bus-demand-supply', 'Law of Demand', 'When price rises, quantity demanded usually falls.', [
            lesson('844-bus-law-of-demand-lesson-1', '844-bus-law-of-demand', 'Price and Buying', 'If bread becomes very expensive, fewer people buy it.')
          ])
        ])
      ])
    ]),
    subject('844-agriculture', 'form-discipline', 'Agriculture', '🌾', 'Crop production, animal husbandry and farm management.', '8-4-4', [
      specialization('844-agri-crops', '844-agriculture', 'Crop Production', 'Land preparation, planting, weeding and harvesting.', [
        course('844-agri-land-prep', '844-agri-crops', 'Land Preparation', 'Ploughing, harrowing and preparing seedbeds.', [
          subtopic('844-agri-seedbed', '844-agri-land-prep', 'Preparing a Seedbed', 'Loose, level soil helps seeds germinate evenly.', [
            lesson('844-agri-seedbed-lesson-1', '844-agri-seedbed', 'Why Loosen Soil', 'Loose soil lets roots grow and water soak in.')
          ])
        ])
      ])
    ]),
    subject('844-cre', 'form-discipline', 'Religious Education (CRE)', '🌟', 'Bible, Christian ethics and values.', '8-4-4', [
      specialization('844-cre-bible', '844-cre', 'Bible Study', 'Old and New Testament stories and teachings.', [
        course('844-cre-parables', '844-cre-bible', 'Parables of Jesus', 'Short stories with spiritual lessons.', [
          subtopic('844-cre-good-samaritan', '844-cre-parables', 'The Good Samaritan', 'Helping anyone in need, even a stranger.', [
            lesson('844-cre-good-samaritan-lesson-1', '844-cre-good-samaritan', 'Showing Mercy', 'The Samaritan cared for the injured man when others passed by.')
          ])
        ])
      ])
    ])
  ];

  disciplines.push(discipline('form-discipline', '8-4-4 Secondary (Forms 1-4)', '📘', 'Kenya 8-4-4 secondary subjects preparing for national examinations.', '8-4-4', formSubjects));

  // ---------- UNIVERSITY / UNDERGRADUATE ----------
  const uniSubjects = [
    subject('uni-computer-science', 'university-discipline', 'Computer Science', '💻', 'Programming, algorithms, systems and software development.', 'undergraduate', [
      specialization('uni-cs-programming', 'uni-computer-science', 'Software Development', 'Programming paradigms, version control and testing.', [
        course('uni-cs-oop', 'uni-cs-programming', 'Object-Oriented Programming', 'Classes, objects, inheritance and polymorphism.', [
          subtopic('uni-cs-classes', 'uni-cs-oop', 'Classes and Objects', 'A class is a blueprint; an object is an instance.', [
            lesson('uni-cs-classes-lesson-1', 'uni-cs-classes', 'Defining a Class', 'In Python: class Dog: defines the Dog blueprint with attributes and methods.')
          ], [
            practiceQuestion('uni-cs-classes-q1', 'uni-cs-classes-lesson-1', 'What is an object?', ['A class blueprint', 'An instance of a class', 'A function'], 'An instance of a class', 'An object is created from a class and holds its own data.')
          ])
        ]),
        course('uni-cs-algorithms', 'uni-cs-programming', 'Algorithms and Complexity', 'Sorting, searching, recursion and Big O.', [
          subtopic('uni-cs-big-o', 'uni-cs-algorithms', 'Big O Notation', 'Describe how runtime grows with input size.', [
            lesson('uni-cs-big-o-lesson-1', 'uni-cs-big-o', 'Linear vs Constant', 'O(1) takes the same time whatever the input; O(n) grows with input size.')
          ])
        ])
      ]),
      specialization('uni-cs-systems', 'uni-computer-science', 'Computer Systems', 'Operating systems, networks, architecture and security.', [
        course('uni-cs-os', 'uni-cs-systems', 'Operating Systems', 'Processes, memory, scheduling and file systems.', [
          subtopic('uni-cs-processes', 'uni-cs-os', 'Processes and Threads', 'A process is a running program; threads share its memory.', [
            lesson('uni-cs-processes-lesson-1', 'uni-cs-processes', 'Running a Program', 'When you launch an app, the OS creates a process for it.')
          ])
        ])
      ])
    ]),
    subject('uni-artificial-intelligence', 'university-discipline', 'Artificial Intelligence & Machine Learning', '🤖', 'Machine learning, neural networks, NLP and AI ethics.', 'undergraduate', [
      specialization('uni-ai-ml', 'uni-artificial-intelligence', 'Machine Learning', 'Supervised, unsupervised and reinforcement learning.', [
        course('uni-ai-supervised', 'uni-ai-ml', 'Supervised Learning', 'Classification and regression with labelled data.', [
          subtopic('uni-ai-classification', 'uni-ai-supervised', 'Classification Models', 'Predict a category from input features.', [
            lesson('uni-ai-classification-lesson-1', 'uni-ai-classification', 'Spam or Not Spam', 'A model classifies emails as spam or legitimate based on words.')
          ], [
            practiceQuestion('uni-ai-classification-q1', 'uni-ai-classification-lesson-1', 'Supervised learning needs:', ['Unlabelled data only', 'Labelled training data', 'No data'], 'Labelled training data', 'Supervised models learn from examples with known correct answers.')
          ])
        ]),
        course('uni-ai-neural', 'uni-ai-ml', 'Neural Networks', 'Neurons, layers, backpropagation and training.', [
          subtopic('uni-ai-perceptron', 'uni-ai-neural', 'The Perceptron', 'A single neuron that makes binary decisions.', [
            lesson('uni-ai-perceptron-lesson-1', 'uni-ai-perceptron', 'Weighted Inputs', 'Inputs are multiplied by weights and summed to produce an output.')
          ])
        ])
      ]),
      specialization('uni-ai-nlp', 'uni-artificial-intelligence', 'Natural Language Processing', 'Text processing, embeddings and language models.', [
        course('uni-ai-embeddings', 'uni-ai-nlp', 'Word Embeddings', 'Represent words as vectors capturing meaning.', [
          subtopic('uni-ai-word2vec', 'uni-ai-embeddings', 'Word2Vec', 'Words used in similar contexts have similar vectors.', [
            lesson('uni-ai-word2vec-lesson-1', 'uni-ai-word2vec', 'Similar Vectors', '"King" and "queen" have vector directions close to each other.')
          ])
        ])
      ])
    ]),
    subject('uni-mathematics', 'university-discipline', 'Mathematics & Statistics', '∑', 'Calculus, linear algebra, probability, statistics and modelling.', 'undergraduate', [
      specialization('uni-math-calculus', 'uni-mathematics', 'Calculus', 'Limits, derivatives, integrals and series.', [
        course('uni-math-derivatives', 'uni-math-calculus', 'Differentiation', 'Rates of change and slopes of curves.', [
          subtopic('uni-math-power-rule', 'uni-math-derivatives', 'Power Rule', 'd/dx of xⁿ is n·xⁿ⁻¹.', [
            lesson('uni-math-power-rule-lesson-1', 'uni-math-power-rule', 'Differentiating x³', 'The derivative of x³ is 3x².')
          ], [
            practiceQuestion('uni-math-power-rule-q1', 'uni-math-power-rule-lesson-1', 'Differentiate x⁵', ['5x⁴', 'x⁴', '5x⁵'], '5x⁴', 'Apply the power rule: 5 · x⁵⁻¹ = 5x⁴.')
          ])
        ])
      ]),
      specialization('uni-math-stats', 'uni-mathematics', 'Statistics and Probability', 'Distributions, hypothesis testing, regression.', [
        course('uni-math-probability', 'uni-math-stats', 'Probability Distributions', 'Normal, binomial and Poisson distributions.', [
          subtopic('uni-math-normal', 'uni-math-probability', 'Normal Distribution', 'The bell curve; mean and standard deviation.', [
            lesson('uni-math-normal-lesson-1', 'uni-math-normal', 'The Bell Curve', 'Most values cluster near the mean; fewer are far away.')
          ])
        ])
      ])
    ]),
    subject('uni-physics', 'university-discipline', 'Physics', '⚡', 'Classical mechanics, electromagnetism, thermodynamics and quantum.', 'undergraduate', [
      specialization('uni-phys-mechanics', 'uni-physics', 'Classical Mechanics', 'Laws of motion, energy, momentum and gravitation.', [
        course('uni-phys-newton', 'uni-phys-mechanics', 'Newtonian Mechanics', 'Newton\'s laws, work, energy and conservation.', [
          subtopic('uni-phys-energy', 'uni-phys-newton', 'Conservation of Energy', 'Energy cannot be created or destroyed, only transformed.', [
            lesson('uni-phys-energy-lesson-1', 'uni-phys-energy', 'Potential to Kinetic', 'A falling ball converts potential energy into kinetic energy.')
          ])
        ])
      ])
    ]),
    subject('uni-chemistry', 'university-discipline', 'Chemistry', '⚗️', 'Organic, inorganic, physical and analytical chemistry.', 'undergraduate', [
      specialization('uni-chem-organic', 'uni-chemistry', 'Organic Chemistry', 'Hydrocarbons, functional groups and reactions.', [
        course('uni-chem-alkanes', 'uni-chem-organic', 'Hydrocarbons', 'Alkanes, alkenes, alkynes and aromatic compounds.', [
          subtopic('uni-chem-alkanes', 'uni-chem-alkanes', 'Alkanes', 'Saturated hydrocarbons with single bonds only.', [
            lesson('uni-chem-alkanes-lesson-1', 'uni-chem-alkanes', 'Methane', 'CH₄ is the simplest alkane, the main part of natural gas.')
          ])
        ])
      ])
    ]),
    subject('uni-biology', 'university-discipline', 'Biology & Life Sciences', '🧬', 'Molecular biology, genetics, ecology and physiology.', 'undergraduate', [
      specialization('uni-bio-molecular', 'uni-biology', 'Molecular Biology', 'DNA, RNA, proteins and gene expression.', [
        course('uni-bio-dna-replication', 'uni-bio-molecular', 'DNA Replication', 'How cells copy their genetic material.', [
          subtopic('uni-bio-replication', 'uni-bio-dna-replication', 'Semiconservative Replication', 'Each new DNA molecule has one old and one new strand.', [
            lesson('uni-bio-replication-lesson-1', 'uni-bio-replication', 'Unzipping DNA', 'Helicase unzips the double helix so each strand can be copied.')
          ])
        ])
      ])
    ]),
    subject('uni-business', 'university-discipline', 'Business & Management', '📊', 'Accounting, finance, marketing, strategy and operations.', 'undergraduate', [
      specialization('uni-bus-accounting', 'uni-business', 'Accounting', 'Financial statements, bookkeeping and auditing.', [
        course('uni-bus-financial-statements', 'uni-bus-accounting', 'Financial Statements', 'Income statement, balance sheet and cash flow.', [
          subtopic('uni-bus-balance-sheet', 'uni-bus-financial-statements', 'Balance Sheet', 'Assets = liabilities + equity.', [
            lesson('uni-bus-balance-sheet-lesson-1', 'uni-bus-balance-sheet', 'The Accounting Equation', 'Everything a business owns is funded by debt or owners\' funds.')
          ])
        ])
      ]),
      specialization('uni-bus-marketing', 'uni-business', 'Marketing', 'Market research, branding, promotion and distribution.', [
        course('uni-bus-4ps', 'uni-bus-marketing', 'The Marketing Mix', 'Product, price, place and promotion.', [
          subtopic('uni-bus-product', 'uni-bus-4ps', 'Product Decisions', 'Features, quality, branding and packaging.', [
            lesson('uni-bus-product-lesson-1', 'uni-bus-product', 'Solving Customer Needs', 'A product should meet a customer need or want.')
          ])
        ])
      ])
    ]),
    subject('uni-law', 'university-discipline', 'Law', '⚖️', 'Legal systems, contracts, torts, criminal and constitutional law.', 'undergraduate', [
      specialization('uni-law-systems', 'uni-law', 'Legal Systems', 'Sources of law, courts and legal reasoning.', [
        course('uni-law-contracts', 'uni-law-systems', 'Contract Law', 'Agreements, offer, acceptance and consideration.', [
          subtopic('uni-law-offer', 'uni-law-contracts', 'Offer and Acceptance', 'A contract forms when an offer is accepted.', [
            lesson('uni-law-offer-lesson-1', 'uni-law-offer', 'Making an Offer', 'One party proposes terms and the other agrees to them.')
          ])
        ])
      ])
    ]),
    subject('uni-psychology', 'university-discipline', 'Psychology', '🧠', 'Human behaviour, cognition, development and mental health.', 'undergraduate', [
      specialization('uni-psych-cognitive', 'uni-psychology', 'Cognitive Psychology', 'Memory, attention, perception and thinking.', [
        course('uni-psych-memory', 'uni-psych-cognitive', 'Memory', 'Encoding, storage and retrieval of information.', [
          subtopic('uni-psych-short-term', 'uni-psych-memory', 'Short-Term Memory', 'Holds a small amount of information briefly.', [
            lesson('uni-psych-short-term-lesson-1', 'uni-psych-short-term', 'Miller\'s Law', 'Short-term memory holds about seven items, plus or minus two.')
          ])
        ])
      ])
    ]),
    subject('uni-education', 'university-discipline', 'Education & Research', '📚', 'Pedagogy, curriculum, assessment and educational research.', 'undergraduate', [
      specialization('uni-ed-pedagogy', 'uni-education', 'Teaching and Learning', 'Lesson planning, classroom management and assessment.', [
        course('uni-ed-lesson-planning', 'uni-ed-pedagogy', 'Lesson Planning', 'Objectives, activities and evaluation.', [
          subtopic('uni-ed-objectives', 'uni-ed-lesson-planning', 'Learning Objectives', 'What learners should know or do by the end.', [
            lesson('uni-ed-objectives-lesson-1', 'uni-ed-objectives', 'Writing Objectives', 'Use action verbs like "explain", "solve" or "design".')
          ])
        ])
      ])
    ]),
    subject('uni-philosophy', 'university-discipline', 'Philosophy', '🤔', 'Ethics, logic, metaphysics and epistemology.', 'undergraduate', [
      specialization('uni-phil-ethics', 'uni-philosophy', 'Ethics', 'Right and wrong, moral theories and applied ethics.', [
        course('uni-phil-utilitarianism', 'uni-phil-ethics', 'Moral Theories', 'Utilitarianism, deontology and virtue ethics.', [
          subtopic('uni-phil-utilitarian', 'uni-phil-utilitarianism', 'Utilitarianism', 'The best action maximises overall well-being.', [
            lesson('uni-phil-utilitarian-lesson-1', 'uni-phil-utilitarian', 'The Greatest Good', 'Choose the action that helps the most people.')
          ])
        ])
      ])
    ]),
    subject('uni-languages', 'university-discipline', 'Languages & Linguistics', '🗣️', 'Language structure, acquisition and communication.', 'undergraduate', [
      specialization('uni-lang-linguistics', 'uni-languages', 'Linguistics', 'Phonetics, syntax, semantics and sociolinguistics.', [
        course('uni-lang-syntax', 'uni-lang-linguistics', 'Syntax', 'How words combine into sentences.', [
          subtopic('uni-lang-sentence-structure', 'uni-lang-syntax', 'Subject-Verb-Object', 'English typically orders subject, verb, object.', [
            lesson('uni-lang-sentence-structure-lesson-1', 'uni-lang-sentence-structure', 'The Cat Sat', 'The cat (subject) sat (verb) on the mat (object).')
          ])
        ])
      ])
    ]),
    subject('uni-engineering', 'university-discipline', 'Engineering & Technology', '⚙️', 'Design, materials, circuits and systems engineering.', 'undergraduate', [
      specialization('uni-eng-circuits', 'uni-engineering', 'Electrical Engineering', 'Circuits, signals, power and electronics.', [
        course('uni-eng-dc-circuits', 'uni-eng-circuits', 'DC Circuits', 'Voltage, current, resistance and Kirchhoff\'s laws.', [
          subtopic('uni-eng-kirchhoff', 'uni-eng-dc-circuits', 'Kirchhoff\'s Laws', 'Current and voltage rules for circuit loops.', [
            lesson('uni-eng-kirchhoff-lesson-1', 'uni-eng-kirchhoff', 'Loop Rule', 'The sum of voltage changes around a loop is zero.')
          ])
        ])
      ])
    ]),
    subject('uni-medicine', 'university-discipline', 'Medicine & Health Sciences', '🏥', 'Anatomy, physiology, pathology and clinical foundations.', 'undergraduate', [
      specialization('uni-med-anatomy', 'uni-medicine', 'Human Anatomy', 'Body systems, organs and their structure.', [
        course('uni-med-cardiovascular', 'uni-med-anatomy', 'Cardiovascular System', 'Heart, blood vessels and circulation.', [
          subtopic('uni-med-heart', 'uni-med-cardiovascular', 'The Heart', 'Four chambers pump blood to lungs and body.', [
            lesson('uni-med-heart-lesson-1', 'uni-med-heart', 'Heart Chambers', 'Right and left atria and ventricles work together.')
          ])
        ])
      ])
    ])
  ];

  disciplines.push(discipline('university-discipline', 'University & Undergraduate Studies', '🎓', 'Undergraduate degrees across computing, sciences, business, humanities and professional fields.', 'undergraduate', uniSubjects));

  // ---------- POSTGRADUATE ----------
  const pgSubjects = [
    subject('pg-machine-learning', 'postgraduate-discipline', 'Advanced Machine Learning', '🤖', 'Deep learning, generative models and ML research methods.', 'postgraduate', [
      specialization('pg-ml-deep', 'pg-machine-learning', 'Deep Learning', 'CNNs, RNNs, transformers and training at scale.', [
        course('pg-ml-transformers', 'pg-ml-deep', 'Transformer Architectures', 'Attention mechanisms and large language models.', [
          subtopic('pg-ml-attention', 'pg-ml-transformers', 'Self-Attention', 'Weigh the importance of different parts of an input sequence.', [
            lesson('pg-ml-attention-lesson-1', 'pg-ml-attention', 'Query, Key, Value', 'Attention computes a weighted sum using Q, K and V vectors.')
          ])
        ])
      ]),
      specialization('pg-ml-research', 'pg-machine-learning', 'ML Research and Ethics', 'Reproducibility, fairness and responsible AI.', [
        course('pg-ml-fairness', 'pg-ml-research', 'Fairness in AI', 'Bias detection and mitigation in models.', [
          subtopic('pg-ml-bias', 'pg-ml-fairness', 'Algorithmic Bias', 'Models can inherit bias from training data.', [
            lesson('pg-ml-bias-lesson-1', 'pg-ml-bias', 'Auditing Models', 'Test model outcomes across different demographic groups.')
          ])
        ])
      ])
    ]),
    subject('pg-public-health', 'postgraduate-discipline', 'Public Health & Epidemiology', '🏥', 'Disease prevention, health systems and biostatistics.', 'postgraduate', [
      specialization('pg-ph-epidemiology', 'pg-public-health', 'Epidemiology', 'Study of disease distribution and determinants.', [
        course('pg-ph-outbreak', 'pg-ph-epidemiology', 'Outbreak Investigation', 'Tracking and controlling infectious disease spread.', [
          subtopic('pg-ph-r-naught', 'pg-ph-outbreak', 'Basic Reproduction Number', 'R₀ is the average number of secondary cases from one infection.', [
            lesson('pg-ph-r-naught-lesson-1', 'pg-ph-r-naught', 'R₀ Above One', 'If R₀ > 1, an outbreak can grow; if below 1, it tends to die out.')
          ])
        ])
      ])
    ]),
    subject('pg-education-research', 'postgraduate-discipline', 'Educational Research', '📚', 'Research design, qualitative and quantitative methods.', 'postgraduate', [
      specialization('pg-ed-research-methods', 'pg-education-research', 'Research Methods', 'Mixed methods, sampling and data analysis.', [
        course('pg-ed-qualitative', 'pg-ed-research-methods', 'Qualitative Research', 'Interviews, case studies and thematic analysis.', [
          subtopic('pg-ed-interviews', 'pg-ed-qualitative', 'Semi-Structured Interviews', 'Guided conversations with open questions.', [
            lesson('pg-ed-interviews-lesson-1', 'pg-ed-interviews', 'Recording Consent', 'Always get permission before recording an interview.')
          ])
        ])
      ])
    ]),
    subject('pg-law', 'postgraduate-discipline', 'Advanced Legal Studies', '⚖️', 'International law, human rights and legal theory.', 'postgraduate', [
      specialization('pg-law-international', 'pg-law', 'International Law', 'Treaties, state responsibility and global courts.', [
        course('pg-law-human-rights', 'pg-law-international', 'Human Rights Law', 'Universal declarations and enforcement mechanisms.', [
          subtopic('pg-law-udhr', 'pg-law-human-rights', 'Universal Declaration of Human Rights', 'A milestone document setting out fundamental rights.', [
            lesson('pg-law-udhr-lesson-1', 'pg-law-udhr', 'Born Free and Equal', 'All human beings are born free and equal in dignity and rights.')
          ])
        ])
      ])
    ]),
    subject('pg-climate-science', 'postgraduate-discipline', 'Climate & Environmental Science', '🌍', 'Climate change, mitigation, adaptation and policy.', 'postgraduate', [
      specialization('pg-climate-modelling', 'pg-climate-science', 'Climate Modelling', 'Models, scenarios and projections.', [
        course('pg-climate-ipcc', 'pg-climate-modelling', 'IPCC Scenarios', 'Representative concentration pathways and warming.', [
          subtopic('pg-climate-rcp', 'pg-climate-ipcc', 'Representative Concentration Pathways', 'Scenarios of future greenhouse gas concentrations.', [
            lesson('pg-climate-rcp-lesson-1', 'pg-climate-rcp', 'Lower Emissions Pathways', 'Strong mitigation can limit warming to safer levels.')
          ])
        ])
      ])
    ])
  ];

  disciplines.push(discipline('postgraduate-discipline', 'Postgraduate & Master\'s Studies', '🎓', 'Advanced research and specialisation beyond the bachelor\'s degree.', 'postgraduate', pgSubjects));

  // ---------- DOCTORAL ----------
  const phdSubjects = [
    subject('phd-cognitive-neuroscience', 'doctoral-discipline', 'Cognitive Neuroscience', '🧠', 'Brain mechanisms of perception, memory and decision-making.', 'doctoral', [
      specialization('phd-cn-methods', 'phd-cognitive-neuroscience', 'Neuroimaging Methods', 'fMRI, EEG and experimental design.', [
        course('phd-cn-fmri', 'phd-cn-methods', 'fMRI Experiments', 'Designing and analysing neuroimaging studies.', [
          subtopic('phd-cn-hrf', 'phd-cn-fmri', 'Haemodynamic Response', 'Blood flow changes follow neural activity with a delay.', [
            lesson('phd-cn-hrf-lesson-1', 'phd-cn-hrf', 'The BOLD Signal', 'fMRI measures blood-oxygen-level-dependent changes.')
          ])
        ])
      ])
    ]),
    subject('phd-quantum-physics', 'doctoral-discipline', 'Theoretical Physics', '⚡', 'Quantum mechanics, relativity and field theory.', 'doctoral', [
      specialization('phd-qp-quantum', 'phd-quantum-physics', 'Quantum Mechanics', 'Wave functions, operators and measurement.', [
        course('phd-qp-schrodinger', 'phd-qp-quantum', 'The Schrödinger Equation', 'How quantum states evolve over time.', [
          subtopic('phd-qp-superposition', 'phd-qp-schrodinger', 'Superposition', 'A quantum system can be in multiple states at once.', [
            lesson('phd-qp-superposition-lesson-1', 'phd-qp-superposition', 'Schrödinger\'s Cat', 'A thought experiment illustrating superposition and measurement.')
          ])
        ])
      ])
    ]),
    subject('phd-development-economics', 'doctoral-discipline', 'Development Economics', '📊', 'Growth, poverty, institutions and policy evaluation.', 'doctoral', [
      specialization('phd-de-impact', 'phd-development-economics', 'Impact Evaluation', 'Randomised trials and causal inference.', [
        course('phd-de-rct', 'phd-de-impact', 'Randomised Controlled Trials', 'Assigning treatment randomly to estimate effects.', [
          subtopic('phd-de-placebo', 'phd-de-rct', 'Control Groups', 'Compare treated and untreated groups fairly.', [
            lesson('phd-de-placebo-lesson-1', 'phd-de-placebo', 'Why Randomise', 'Randomisation balances known and unknown factors between groups.')
          ])
        ])
      ])
    ])
  ];

  disciplines.push(discipline('doctoral-discipline', 'Doctoral & PhD Studies', '🎓', 'Original research contributing new knowledge to a discipline.', 'doctoral', phdSubjects));

  // ---------- PROFESSIONAL & VOCATIONAL ----------
  const profSubjects = [
    subject('prof-digital-marketing', 'professional-discipline', 'Digital Marketing', '📱', 'SEO, social media, content strategy and analytics.', 'professional', [
      specialization('prof-dm-seo', 'prof-digital-marketing', 'Search Engine Optimisation', 'Improving visibility in search results.', [
        course('prof-dm-keywords', 'prof-dm-seo', 'Keyword Research', 'Finding the terms people search for.', [
          subtopic('prof-dm-intent', 'prof-dm-keywords', 'Search Intent', 'Informational, navigational and transactional queries.', [
            lesson('prof-dm-intent-lesson-1', 'prof-dm-intent', 'Matching Content to Intent', 'Answer the question the searcher is actually asking.')
          ])
        ])
      ]),
      specialization('prof-dm-social', 'prof-digital-marketing', 'Social Media Strategy', 'Platforms, campaigns and community management.', [
        course('prof-dm-content', 'prof-dm-social', 'Content Planning', 'Calendars, formats and publishing.', [
          subtopic('prof-dm-calendar', 'prof-dm-content', 'Editorial Calendar', 'Plan posts in advance across channels.', [
            lesson('prof-dm-calendar-lesson-1', 'prof-dm-calendar', 'Consistent Posting', 'Regular publishing builds audience trust and reach.')
          ])
        ])
      ])
    ]),
    subject('prof-project-management', 'professional-discipline', 'Project Management', '📋', 'Planning, execution, Agile and risk management.', 'professional', [
      specialization('prof-pm-agile', 'prof-project-management', 'Agile and Scrum', 'Iterative delivery, sprints and retrospectives.', [
        course('prof-pm-scrum', 'prof-pm-agile', 'Scrum Framework', 'Roles, events and artefacts in Scrum.', [
          subtopic('prof-pm-sprint', 'prof-pm-scrum', 'The Sprint', 'A time-boxed period of work, usually 2-4 weeks.', [
            lesson('prof-pm-sprint-lesson-1', 'prof-pm-sprint', 'Sprint Planning', 'The team chooses what to deliver in the coming sprint.')
          ])
        ])
      ]),
      specialization('prof-pm-risk', 'prof-project-management', 'Risk Management', 'Identifying, assessing and mitigating project risks.', [
        course('prof-pm-risk-register', 'prof-pm-risk', 'Risk Registers', 'Log, score and track project risks.', [
          subtopic('prof-pm-mitigation', 'prof-pm-risk-register', 'Mitigation Strategies', 'Reduce the chance or impact of a risk.', [
            lesson('prof-pm-mitigation-lesson-1', 'prof-pm-mitigation', 'Backup Plans', 'Have a fallback if a key supplier is late.')
          ])
        ])
      ])
    ]),
    subject('prof-graphic-design', 'professional-discipline', 'Graphic Design', '🎨', 'Typography, layout, branding and visual communication.', 'professional', [
      specialization('prof-gd-typography', 'prof-graphic-design', 'Typography', 'Typefaces, hierarchy and readability.', [
        course('prof-gd-type-basics', 'prof-gd-typography', 'Type Fundamentals', 'Serif, sans-serif and font pairing.', [
          subtopic('prof-gd-hierarchy', 'prof-gd-type-basics', 'Visual Hierarchy', 'Size, weight and colour guide the reader\'s eye.', [
            lesson('prof-gd-hierarchy-lesson-1', 'prof-gd-hierarchy', 'Headings and Body', 'Make headings larger and bolder than body text.')
          ])
        ])
      ])
    ]),
    subject('prof-cybersecurity', 'professional-discipline', 'Cybersecurity', '🔐', 'Network security, threats, defence and compliance.', 'professional', [
      specialization('prof-cyber-fundamentals', 'prof-cybersecurity', 'Security Fundamentals', 'Confidentiality, integrity and availability (CIA).', [
        course('prof-cyber-cia', 'prof-cyber-fundamentals', 'The CIA Triad', 'Protecting data from unauthorised access and change.', [
          subtopic('prof-cyber-auth', 'prof-cyber-cia', 'Authentication', 'Verifying who a user claims to be.', [
            lesson('prof-cyber-auth-lesson-1', 'prof-cyber-auth', 'Strong Passwords', 'Long, unique passwords are harder to guess or crack.')
          ])
        ])
      ])
    ]),
    subject('prof-teaching-cert', 'professional-discipline', 'Teaching & Education Practice', '👩‍🏫', 'Classroom practice, assessment and inclusive education.', 'professional', [
      specialization('prof-ed-inclusion', 'prof-teaching-cert', 'Inclusive Education', 'Supporting diverse learners in mainstream classrooms.', [
        course('prof-ed-differentiation', 'prof-ed-inclusion', 'Differentiation', 'Adapting teaching to learner needs.', [
          subtopic('prof-ed-scaffolding', 'prof-ed-differentiation', 'Scaffolding', 'Temporary support that is removed as learners gain skill.', [
            lesson('prof-ed-scaffolding-lesson-1', 'prof-ed-scaffolding', 'Modelling First', 'Show how to do a task before asking learners to try it alone.')
          ])
        ])
      ])
    ])
  ];

  disciplines.push(discipline('professional-discipline', 'Professional & Vocational Skills', '💼', 'Workplace skills, certifications and career-focused learning.', 'professional', profSubjects));

  // ---------- INDEPENDENT / PERSONAL INTEREST ----------
  const indepSubjects = [
    subject('indep-astronomy', 'independent-discipline', 'Astronomy & Space Science', '🌌', 'Planets, stars, galaxies and cosmology.', 'independent', [
      specialization('indep-astro-solar', 'indep-astronomy', 'The Solar System', 'Planets, moons, asteroids and comets.', [
        course('indep-astro-planets', 'indep-astro-solar', 'The Planets', 'Mercury through Neptune and their features.', [
          subtopic('indep-astro-mars', 'indep-astro-planets', 'Mars', 'The red planet, rovers and the search for water.', [
            lesson('indep-astro-mars-lesson-1', 'indep-astro-mars', 'Why Mars Is Red', 'Iron oxide on its surface gives Mars a rusty colour.')
          ])
        ])
      ]),
      specialization('indep-astro-stars', 'indep-astronomy', 'Stars and Galaxies', 'Stellar life cycles and galaxy types.', [
        course('indep-astro-stellar', 'indep-astro-stars', 'Stellar Evolution', 'From nebulae to white dwarfs, neutron stars and black holes.', [
          subtopic('indep-astro-life-cycle', 'indep-astro-stellar', 'Life Cycle of a Star', 'Mass determines how a star lives and dies.', [
            lesson('indep-astro-life-cycle-lesson-1', 'indep-astro-life-cycle', 'Birth in a Nebula', 'Stars form from collapsing clouds of gas and dust.')
          ])
        ])
      ])
    ]),
    subject('indep-culinary', 'independent-discipline', 'Cooking & Nutrition', '🍳', 'Ingredients, techniques, meal planning and nutrition.', 'independent', [
      specialization('indep-cook-basics', 'indep-culinary', 'Cooking Fundamentals', 'Knife skills, heat control and food safety.', [
        course('indep-cook-heat', 'indep-cook-basics', 'Applying Heat', 'Boiling, steaming, frying, roasting and baking.', [
          subtopic('indep-cook-boil', 'indep-cook-heat', 'Boiling and Simmering', 'Cook food in water at or just below boiling point.', [
            lesson('indep-cook-boil-lesson-1', 'indep-cook-boil', 'Boiling Pasta', 'Boil salted water, add pasta and cook until tender.')
          ])
        ])
      ]),
      specialization('indep-cook-nutrition', 'indep-culinary', 'Nutrition Basics', 'Macronutrients, micronutrients and balanced meals.', [
        course('indep-nutri-macros', 'indep-cook-nutrition', 'Macronutrients', 'Proteins, carbohydrates and fats.', [
          subtopic('indep-nutri-protein', 'indep-nutri-macros', 'Protein', 'Builds and repairs body tissues.', [
            lesson('indep-nutri-protein-lesson-1', 'indep-nutri-protein', 'Protein Sources', 'Beans, eggs, fish, chicken and lentils provide protein.')
          ])
        ])
      ])
    ]),
    subject('indep-music-theory', 'independent-discipline', 'Music Theory & Appreciation', '🎵', 'Notes, scales, rhythm and listening skills.', 'independent', [
      specialization('indep-music-basics', 'indep-music-theory', 'Music Fundamentals', 'Pitch, rhythm, scales and chords.', [
        course('indep-music-notes', 'indep-music-basics', 'Reading Notes', 'The staff, clefs and note values.', [
          subtopic('indep-music-staff', 'indep-music-notes', 'The Musical Staff', 'Five lines and four spaces where notes are placed.', [
            lesson('indep-music-staff-lesson-1', 'indep-music-staff', 'Lines and Spaces', 'Each line and space represents a different pitch.')
          ])
        ])
      ])
    ]),
    subject('indep-diy', 'independent-discipline', 'DIY & Home Repair', '🔧', 'Basic tools, plumbing, electrical safety and carpentry.', 'independent', [
      specialization('indep-diy-tools', 'indep-diy', 'Tools and Safety', 'Using tools safely around the home.', [
        course('indep-diy-toolbox', 'indep-diy-tools', 'The Home Toolbox', 'Hammer, screwdrivers, pliers, tape measure and level.', [
          subtopic('indep-diy-screwdrivers', 'indep-diy-toolbox', 'Screwdrivers', 'Flathead and Phillips for different screw heads.', [
            lesson('indep-diy-screwdrivers-lesson-1', 'indep-diy-screwdrivers', 'Match the Tip', 'Use a screwdriver tip that fits the screw head snugly.')
          ])
        ])
      ])
    ]),
    subject('indep-gardening', 'independent-discipline', 'Gardening & Plant Care', '🌿', 'Soil, planting, watering and pest management.', 'independent', [
      specialization('indep-garden-soil', 'indep-gardening', 'Soil and Compost', 'Improving soil and recycling kitchen waste.', [
        course('indep-garden-compost', 'indep-garden-soil', 'Making Compost', 'Turn food scraps and garden waste into rich soil.', [
          subtopic('indep-garden-compost-basics', 'indep-garden-compost', 'Green and Brown Materials', 'Mix nitrogen-rich greens with carbon-rich browns.', [
            lesson('indep-garden-compost-basics-lesson-1', 'indep-garden-compost-basics', 'Starting a Heap', 'Layer vegetable scraps with dry leaves and turn occasionally.')
          ])
        ])
      ])
    ])
  ];

  disciplines.push(discipline('independent-discipline', 'Independent & Personal Interest', '✦', 'Hobbies, practical skills and subjects explored for curiosity rather than a formal qualification.', 'independent', indepSubjects));

  // ---------- Exported module ----------
  let customDisciplines = [];
  let customSubjects = [];
  let customSpecializations = [];
  let customCourses = [];
  let customTopics = [];
  let customSubtopics = [];
  let customLessons = [];
  let customPracticeQuestions = [];
  let customBookmarks = [];
  let searchHistory = [];
  let recentSearches = [];

  function load() {
    try {
      const raw = localStorage.getItem(catalogueStorageKey);
      if (!raw) return;
      const saved = JSON.parse(raw);
      customDisciplines = Array.isArray(saved.customDisciplines) ? saved.customDisciplines : [];
      customSubjects = Array.isArray(saved.customSubjects) ? saved.customSubjects : [];
      customSpecializations = Array.isArray(saved.customSpecializations) ? saved.customSpecializations : [];
      customCourses = Array.isArray(saved.customCourses) ? saved.customCourses : [];
      customTopics = Array.isArray(saved.customTopics) ? saved.customTopics : [];
      customSubtopics = Array.isArray(saved.customSubtopics) ? saved.customSubtopics : [];
      customLessons = Array.isArray(saved.customLessons) ? saved.customLessons : [];
      customPracticeQuestions = Array.isArray(saved.customPracticeQuestions) ? saved.customPracticeQuestions : [];
      customBookmarks = Array.isArray(saved.customBookmarks) ? saved.customBookmarks : [];
      searchHistory = Array.isArray(saved.searchHistory) ? saved.searchHistory : [];
      recentSearches = Array.isArray(saved.recentSearches) ? saved.recentSearches : [];
    } catch (error) {
      console.error('Unable to read subject catalogue.', error);
    }
  }
  function persist() {
    try {
      localStorage.setItem(catalogueStorageKey, JSON.stringify({
        customDisciplines, customSubjects, customSpecializations, customCourses,
        customTopics, customSubtopics, customLessons, customPracticeQuestions,
        customBookmarks, searchHistory, recentSearches
      }));
      return true;
    } catch (error) {
      console.error('Unable to save subject catalogue.', error);
      return false;
    }
  }
  load();

  function allDisciplines() { return [...disciplines, ...customDisciplines]; }
  function allSubjects() { return [...disciplines.flatMap(d => d.subjects.map(s => ({ ...s, discipline: d }))), ...customSubjects.map(s => ({ ...s, discipline: allDisciplines().find(d => d.id === s.disciplineId) }))]; }
  function getById(items, id) { return items.find(item => item.id === id) || null; }
  function getDiscipline(id) { return getById(allDisciplines(), id); }
  function getSubject(id) { return getById(allSubjects(), id); }
  function getSpecialization(id) {
    const all = [...disciplines.flatMap(d => d.subjects.flatMap(s => s.specializations.map(sp => ({ ...sp, subject: s })))), ...customSpecializations];
    return getById(all, id);
  }
  function getCourse(id) {
    const all = [...disciplines.flatMap(d => d.subjects.flatMap(s => s.specializations.flatMap(sp => sp.courses.map(c => ({ ...c, specialization: sp }))))), ...customCourses];
    return getById(all, id);
  }
  function getTopic(id) {
    const all = [...disciplines.flatMap(d => d.subjects.flatMap(s => s.specializations.flatMap(sp => sp.courses.flatMap(c => c.subtopics.map(t => ({ ...t, course: c })))))), ...customTopics];
    return getById(all, id);
  }
  function getSubtopic(id) {
    const all = [...disciplines.flatMap(d => d.subjects.flatMap(s => s.specializations.flatMap(sp => sp.courses.flatMap(c => c.subtopics.flatMap(st => st.lessons.map(l => ({ ...l, subtopic: st }))))))), ...customSubtopics];
    return getById(all, id);
  }
  function getLesson(id) {
    const all = [...disciplines.flatMap(d => d.subjects.flatMap(s => s.specializations.flatMap(sp => sp.courses.flatMap(c => c.subtopics.flatMap(st => st.lessons))))), ...customLessons];
    return getById(all, id);
  }

  function searchCatalogue(query, options = {}) {
    const term = (query || '').trim().toLocaleLowerCase();
    if (!term) return { subjects: [], topics: [], lessons: [], suggestions: [] };
    const limit = options.limit || 20;
    const levelFilter = options.levelId || 'all';
    const subjectFilter = options.subjectId || 'all';
    const results = { subjects: [], topics: [], lessons: [], suggestions: [] };
    const seenSubjects = new Set();
    const seenTopics = new Set();
    const seenLessons = new Set();
    const collectSubjects = (subjects) => {
      for (const subject of subjects) {
        const text = `${subject.name} ${subject.description}`.toLocaleLowerCase();
        const matches = !term || text.includes(term);
        const levelMatch = levelFilter === 'all' || subject.level === levelFilter;
        const subjectMatch = subjectFilter === 'all' || subject.id === subjectFilter;
        if (matches && levelMatch && subjectMatch && !seenSubjects.has(subject.id)) {
          seenSubjects.add(subject.id);
          results.subjects.push({ ...subject, type: 'subject' });
        }
        if (subject.specializations) {
          for (const sp of subject.specializations) {
            if (sp.courses) {
              for (const course of sp.courses) {
                if (course.subtopics) {
                  for (const topic of course.subtopics) {
                    const tText = `${topic.name} ${topic.description}`.toLocaleLowerCase();
                    if (tText.includes(term) && levelMatch && subjectMatch && !seenTopics.has(topic.id)) {
                      seenTopics.add(topic.id);
                      results.topics.push({ ...topic, type: 'topic', subjectName: subject.name, courseName: course.name });
                    }
                    if (topic.lessons) {
                      for (const lesson of topic.lessons) {
                        const lText = `${lesson.title} ${lesson.content}`.toLocaleLowerCase();
                        if (lText.includes(term) && levelMatch && subjectMatch && !seenLessons.has(lesson.id)) {
                          seenLessons.add(lesson.id);
                          results.lessons.push({ ...lesson, type: 'lesson', topicName: topic.name, subjectName: subject.name });
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    };
    collectSubjects(disciplines.flatMap(d => d.subjects));
    collectSubjects(customSubjects);
    results.subjects.sort((a, b) => a.name.localeCompare(b.name)).slice(0, limit);
    results.topics.sort((a, b) => a.name.localeCompare(b.name)).slice(0, limit);
    results.lessons.sort((a, b) => a.title.localeCompare(b.title)).slice(0, limit);
    results.suggestions = [...new Set([...results.subjects.map(s => s.name), ...results.topics.map(t => t.name)])].slice(0, 8);
    return results;
  }

  function addSearchHistory(query) {
    if (!query || !query.trim()) return;
    searchHistory = searchHistory.filter(item => item !== query).slice(0, -50);
    searchHistory.unshift(query.trim());
    searchHistory = searchHistory.slice(0, 100);
    persist();
  }
  function getSearchHistory() { return [...searchHistory].slice(0, 20); }
  function clearSearchHistory() { searchHistory = []; persist(); }

  function addRecentSearch(query) {
    if (!query || !query.trim()) return;
    recentSearches = recentSearches.filter(item => item.query !== query).slice(0, -50);
    recentSearches.unshift({ query: query.trim(), at: Date.now() });
    recentSearches = recentSearches.slice(0, 20);
    persist();
  }
  function getRecentSearches() { return [...recentSearches]; }

  function toggleBookmark(itemId, itemType, title) {
    const existing = customBookmarks.findIndex(item => item.id === itemId && item.type === itemType);
    if (existing >= 0) {
      customBookmarks.splice(existing, 1);
    } else {
      customBookmarks.push({ id: itemId, type: itemType, title, at: Date.now() });
      customBookmarks = customBookmarks.slice(0, 500);
    }
    persist();
    return existing < 0;
  }
  function isBookmarked(itemId, itemType) {
    return customBookmarks.some(item => item.id === itemId && item.type === itemType);
  }
  function getBookmarks() { return [...customBookmarks]; }

  function addDiscipline(disciplineItem) {
    customDisciplines.push({ ...disciplineItem, verified: false, id: disciplineItem.id || `custom-d-${Date.now()}` });
    persist();
  }
  function addSubject(subjectItem) {
    customSubjects.push({ ...subjectItem, verified: false, id: subjectItem.id || `custom-s-${Date.now()}` });
    persist();
  }
  function addSpecialization(specializationItem) {
    customSpecializations.push({ ...specializationItem, verified: false, id: specializationItem.id || `custom-sp-${Date.now()}` });
    persist();
  }
  function addCourse(courseItem) {
    customCourses.push({ ...courseItem, verified: false, id: courseItem.id || `custom-c-${Date.now()}` });
    persist();
  }
  function addTopic(topicItem) {
    customTopics.push({ ...topicItem, verified: false, id: topicItem.id || `custom-t-${Date.now()}` });
    persist();
  }
  function addSubtopic(subtopicItem) {
    customSubtopics.push({ ...subtopicItem, verified: false, id: subtopicItem.id || `custom-st-${Date.now()}` });
    persist();
  }
  function addLesson(lessonItem) {
    customLessons.push({ ...lessonItem, verified: false, id: lessonItem.id || `custom-l-${Date.now()}` });
    persist();
  }
  function addPracticeQuestion(questionItem) {
    customPracticeQuestions.push({ ...questionItem, verified: false, id: questionItem.id || `custom-q-${Date.now()}` });
    persist();
  }

  window.SubjectCatalogue = Object.freeze({
    levelLabels, levelIcon, defaultLevelOrder,
    allDisciplines, allSubjects, getDiscipline, getSubject, getSpecialization, getCourse, getTopic, getSubtopic, getLesson,
    searchCatalogue, addSearchHistory, getSearchHistory, clearSearchHistory, addRecentSearch, getRecentSearches,
    toggleBookmark, isBookmarked, getBookmarks,
    addDiscipline, addSubject, addSpecialization, addCourse, addTopic, addSubtopic, addLesson, addPracticeQuestion,
    disciplines: Object.freeze(disciplines.map(d => Object.freeze({ ...d, subjects: d.subjects.map(s => Object.freeze({ ...s, specializations: s.specializations.map(sp => Object.freeze({ ...sp, courses: sp.courses.map(c => Object.freeze({ ...c, subtopics: c.subtopics.map(t => Object.freeze({ ...t, lessons: t.lessons.map(l => Object.freeze(l)).sort((a,b)=>a.title.localeCompare(b.title)) }))).sort((a,b)=>a.name.localeCompare(b.name)) }))).sort((a,b)=>a.name.localeCompare(b.name)) }))).sort((a,b)=>a.name.localeCompare(b.name)) }))
  });
})();
