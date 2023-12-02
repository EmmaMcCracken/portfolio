
const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://emma.oatley.ie',
  title: 'EO.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Emma Oatley',
  role: 'Software Engineer',
  description:
    'Open-minded mathematician turned coder who loves learning. Looking for challenges to solve in software, whether they be in the back-end or the front-end.  ',
  resume:
    'https://drive.google.com/file/d/1sHunbCCLHocHF73JQnAec3wFj77nMSFk/view?usp=sharing',
  social: {
    linkedin: 'http://linkedin.com/in/eoatley',
    github: 'https://github.com/eoatley',
  },
}

const projects = [
  // projects can be added and removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Decision Making Helper App',
    description:
      'Add or remove choices, attributes and their associated weightings. The app will calculate your best choice.',
    stack: ['TypeScript', 'React', 'React Flow'],
    sourceCode: 'https://github.com/eoatley/decision-making-helper',
    livePreview: 'https://help-me-choose-please.netlify.app/',
  },
  {
    name: 'Dog Breed Voting App',
    description: 'Warning: there will be a sound when you vote! Group project.',
    stack: ['TypeScript', 'React', 'Node.js', 'Express', 'PostgreSQL'],
    sourceCode: 'https://github.com/marthabowler/dog-breed-frontend',
    livePreview: 'https://dog-breed-c3b4.netlify.app/',
  },
  {
    name: 'TV Shows App',
    description:
      'An app where you can view episodes from a TV-Show of your choice.',
    stack: ['TypeScript', 'React'],
    sourceCode: 'https://github.com/eoatley/TV-Shows-App',
    livePreview: 'https://emmastvshows.netlify.app/',
  },
  // {
  //   name: "Resource Catalogue (Willy Wonka's Resource Factory)",
  //   description: 'A tool to add, rate, and save resources. Group project.',
  //   stack: ['TypeScript', 'React', 'Node.js', 'Express', 'PostgreSQL'],
  //   sourceCode: 'https://github.com/c3c3-academy/resource-catalogue-fe',
  //   livePreview: 'https://c3c3-resource-catalogue.netlify.app/',
  // },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Scala',
  'TypeScript',
  'JavaScript',

  'Akka',
  'Kubernetes',
  'Express',
  'Docker',

  'PostgreSQL',
  'MongoDB',

  'Jest',
  'React',
  'Node.js',

  'Git',
  'CI/CD',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'emma@oatley.ie',
}

export { about, projects, skills, contact, header }
