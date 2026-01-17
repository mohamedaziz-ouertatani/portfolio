export interface Project {
  id: string;
  title: string;
  description: string;
  role?: string;
  problem?: string;
  approach?: string;
  result?: string;
  technologies: string[];
  githubLink?: string;
  liveDemoLink?: string;
  images: string[];
  // Higher number = more important
  priority?: number;
}

const projectsData: Project[] = [
  {
    id: '1',
    title: 'FLOCK OFF E-Commerce Platform',
    description:
      'Developed a MERN-stack e-commerce platform with customer and admin interfaces, cart management, order processing, and stock control dashboard.',
    role: 'Full Stack Developer',
    problem:
      'Small businesses needed an affordable e-commerce solution with inventory management.',
    approach:
      'Built a complete MERN stack solution with RESTful APIs and MongoDB persistence.',
    result:
      'Delivered a fully functional e-commerce platform with admin dashboard and order management.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap'],
    githubLink: 'https://github.com/mohamedaziz-ouertatani/flock-off-ecommerce',
    liveDemoLink: '',
    images: [
      '/images/FLOCKOFF/flockoff1.png',
      '/images/FLOCKOFF/flockoff2.png',
      '/images/FLOCKOFF/flockoff3.png',
    ],
    priority: 100,
  },
  {
    id: '8',
    title: 'Full-Stack Web Application',
    description:
      'Type-safe full-stack app with authentication, Fastify backend, PostgreSQL database, and Next.js frontend.',
    role: 'Full Stack Developer',
    problem: 'Provide a modern, maintainable full-stack template.',
    approach:
      'Implemented Fastify REST APIs, PostgreSQL, and Next.js with Tailwind CSS.',
    result: 'Clean foundation demonstrating full-stack patterns.',
    technologies: [
      'Fastify',
      'TypeScript',
      'PostgreSQL',
      'Next.js',
      'Tailwind CSS',
    ],
    githubLink: '',
    liveDemoLink: '',
    images: ['/images/Fastify/fastify.png'],
    priority: 90,
  },
  {
    id: '6',
    title: 'ML Project – MLOps Pipeline',
    description:
      'End-to-end ML pipeline with experiment tracking, containerized deployment, and reproducible training.',
    role: 'MLOps Engineer',
    problem: 'Deploy and track ML models from experimentation to production.',
    approach:
      'Built scikit-learn pipeline, tracked experiments in MLflow, containerized inference app.',
    result:
      'Reproducible training and deployment with versioned artifacts and metrics.',
    technologies: [
      'Python',
      'scikit-learn',
      'MLflow',
      'Docker',
      'Joblib',
      'Makefile',
      'Supervisor',
    ],
    githubLink: '',
    liveDemoLink: '',
    images: ['/images/MLOpsProject/MLOps1.png'],
    priority: 80,
  },
  {
    id: '7',
    title: 'Business Intelligence Dashboards',
    description:
      'BI project transforming raw data into dashboards using Power BI, Power Query, and Google Data Studio.',
    role: 'Data Analyst',
    problem: 'Turn raw business data into clear, accessible dashboards.',
    approach:
      'Performed EDA, cleaned datasets, designed dashboards, published via Google Data Studio.',
    result: 'Interactive dashboards supporting decision-making.',
    technologies: ['Power BI', 'Power Query', 'Google Data Studio', 'EDA'],
    githubLink: '',
    liveDemoLink: '',
    images: ['/images/BI_ImportExport/BI.png'],
    priority: 70,
  },
  {
    id: '4',
    title: 'Share and Care',
    description:
      'Desktop application for charity management with PDF generation, QR encoding/decoding, and statistical analysis.',
    role: 'Desktop Application Developer',
    problem:
      'Charity organizations needed a desktop solution for managing donations and beneficiaries.',
    approach:
      'Built a Qt-based C++ application with document generation and analytics.',
    result: 'Feature-rich desktop app supporting charity operations.',
    technologies: ['C++', 'Qt', 'Arduino'],
    githubLink: 'https://github.com/Projet-CPP/2a1_smart_share_and_care_center',
    liveDemoLink: '',
    images: ['/images/ShareAndCare/shareandcare1.jpg'],
    priority: 60,
  },
  {
    id: '2',
    title: 'WASHA Website',
    description:
      'Academic full-stack project with responsive UIs, PHP CRUD operations, and Oracle database integration.',
    role: 'Front-End Developer & Database Engineer',
    problem:
      'Required a collaborative web application with database integration.',
    approach:
      'Implemented responsive UIs with Bootstrap, PHP CRUD operations, and Oracle DB.',
    result:
      'Delivered a collaborative web application demonstrating teamwork and full-stack skills.',
    technologies: ['HTML', 'Bootstrap', 'PHP', 'Oracle'],
    githubLink: 'https://github.com/2A-22-23/project2223_2a1-2a1_mind-benders',
    liveDemoLink: '',
    images: ['/images/WASHA/washa1.png'],
    priority: 50,
  },
  {
    id: '3',
    title: 'The Motherland',
    description:
      '2D game built with C and SDL, featuring custom joystick controls via Arduino and assets designed with Adobe tools.',
    role: 'Game Developer & Hardware Integration',
    problem: 'Create an engaging 2D game with custom hardware controls.',
    approach:
      'Developed game logic with C/SDL, designed assets, and integrated Arduino joystick.',
    result:
      'Playable 2D game showcasing low-level programming and hardware integration.',
    technologies: ['C', 'SDL', 'Adobe Suite', 'Arduino'],
    githubLink: 'https://github.com/mohamedaziz-ouertatani/1A1-Achilles',
    liveDemoLink: '',
    images: ['/images/TheMotherLand/motherland1.jpeg'],
    priority: 40,
  },
  {
    id: '5',
    title: 'PhotoCube Shop',
    description:
      'Web platform for selling custom photo cubes with image upload, product selection, and order management.',
    role: 'Full Stack Developer',
    problem: 'Needed a simple, customizable product sales experience.',
    approach:
      'Implemented React front end with Node.js/Express APIs and MongoDB persistence.',
    result: 'Usable storefront demonstrating full-stack fundamentals.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap'],
    githubLink: '',
    liveDemoLink: '',
    images: ['/images/placeholder.png'],
    priority: 30,
  },
  {
    id: '9',
    title: 'Data Analysis Projects',
    description:
      'Statistical analysis and hypothesis testing with reproducible reporting in R Markdown.',
    role: 'Data Analyst',
    problem: 'Derive insights from datasets and communicate them clearly.',
    approach:
      'Performed EDA, statistical tests, reproducible notebooks in Python/R.',
    result: 'Actionable insights and reproducible artifacts.',
    technologies: [
      'R',
      'R Markdown',
      'Statistics',
      'Python',
      'Pandas',
      'NumPy',
    ],
    githubLink: '',
    liveDemoLink: '',
    images: ['/images/DataAnalysis/DataAnalysis.png'],
    priority: 20,
  },
];

export { projectsData };
