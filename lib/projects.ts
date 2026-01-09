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
}

const projectsData: Project[] = [
  {
    id: '1',
    title: 'FLOCK OFF E-Commerce Platform',
    description:
      'Developed a MERN-stack e-commerce platform. Users can browse, purchase, and manage products in their shopping cart. Implemented backend services for product and user management, as well as order processing. Admin features include efficient stock and order management with a user-friendly dashboard.',
    role: 'Full Stack Developer',
    problem:
      'Small businesses needed an affordable e-commerce solution with inventory management.',
    approach:
      'Built a complete MERN stack solution with separate customer and admin interfaces, implementing RESTful APIs and MongoDB for data persistence.',
    result:
      'Delivered a fully functional e-commerce platform with cart management, order processing, and admin dashboard for stock control.',
    technologies: ['ReactJS', 'Node.js', 'Express', 'MongoDB', 'Bootstrap'],
    githubLink: 'https://github.com/mohamedaziz-ouertatani/flock-off-ecommerce',
    liveDemoLink: '',
    images: [
      '/images/FLOCKOFF/flockoff1.png',
      '/images/FLOCKOFF/flockoff2.png',
      '/images/FLOCKOFF/flockoff3.png',
      '/images/FLOCKOFF/flockoff4.png',
      '/images/FLOCKOFF/flockoff5.png',
      '/images/FLOCKOFF/flockoff6.png',
      '/images/FLOCKOFF/flockoff7.png',
      '/images/FLOCKOFF/flockoff8.png',
      '/images/FLOCKOFF/flockoff9.png',
      '/images/FLOCKOFF/flockoff10.png',
    ],
  },
  {
    id: '2',
    title: 'WASHA Website',
    description:
      'Collaborative website project during the 2nd year of my engineering program. Built UIs with HTML/Bootstrap, implemented CRUD operations in PHP, and managed an Oracle database. Version control with GitHub.',
    role: 'Front-End Developer & Database Engineer',
    problem:
      'Academic project requiring a full-stack web application with database integration.',
    approach:
      'Collaborated using Git; implemented responsive UIs with Bootstrap and created PHP-based CRUD operations with Oracle.',
    result:
      'Delivered a collaborative web application demonstrating full-stack skills and teamwork.',
    technologies: ['HTML', 'Bootstrap', 'PHP', 'Oracle'],
    githubLink:
      'https://github.com/2A-22-23/project2223_2a1-2a1_mind-benders',
    liveDemoLink: '',
    images: [
      '/images/WASHA/washa1.png',
      '/images/WASHA/washa2.png',
      '/images/WASHA/washa3.png',
      '/images/WASHA/washa4.png',
      '/images/WASHA/washa5.png',
      '/images/WASHA/washa6.png',
    ],
  },
  {
    id: '3',
    title: 'The Motherland',
    description:
      'Collaborative 2D game project (1st year). Contributed C + SDL game logic, designed assets with Adobe tools, and integrated Arduino-based joystick controls. Version control with GitHub.',
    role: 'Game Developer & Hardware Integration',
    problem: 'Create an engaging 2D game with custom hardware controls.',
    approach:
      'Utilized C and SDL for logic/rendering, designed assets with Adobe tools, and integrated Arduino joystick.',
    result:
      'Playable 2D game with custom hardware controls showcasing low-level programming and hardware integration.',
    technologies: ['C', 'SDL', 'Adobe', 'Arduino'],
    githubLink: 'https://github.com/mohamedaziz-ouertatani/1A1-Achilles',
    liveDemoLink: '',
    images: [
      '/images/TheMotherLand/motherland1.jpeg',
      '/images/TheMotherLand/motherland2.jpg',
      '/images/TheMotherLand/motherland3.jpg',
      '/images/TheMotherLand/motherland4.jpeg',
    ],
  },
  {
    id: '4',
    title: 'Share and Care',
    description:
      'Charity management desktop application using Qt and C++. Implemented PDF generation, QR encoding/decoding, and statistics to support operations.',
    role: 'Desktop Application Developer',
    problem:
      'Charity organizations needed a desktop solution for managing donations and beneficiaries.',
    approach:
      'Built a Qt-based C++ application with PDF generation, QR code support, and data visualization.',
    result:
      'Feature-rich desktop app with document generation, QR functionality, and analytics.',
    technologies: ['C++', 'Qt', 'Arduino'],
    githubLink:
      'https://github.com/Projet-CPP/2a1_smart_share_and_care_center',
    liveDemoLink: '',
    images: [
      '/images/ShareAndCare/shareandcare1.jpg',
      '/images/ShareAndCare/shareandcare2.jpg',
      '/images/ShareAndCare/shareandcare3.jpg',
      '/images/ShareAndCare/shareandcare4.jpg',
      '/images/ShareAndCare/shareandcare5.jpeg',
    ],
  },
  {
    id: '5',
    title: 'PhotoCube Shop',
    description:
      'Web platform for showcasing and selling custom photo cubes. Users upload images, select product types, and place orders. Implemented backend services for order processing.',
    role: 'Full Stack Developer',
    problem:
      'Simple, customizable product sales experience with reliable order flow.',
    approach:
      'Implemented a React front end with Node.js/Express APIs and MongoDB persistence. Focused on upload UX and clean checkout.',
    result:
      'A usable storefront demonstrating full-stack fundamentals and e-commerce patterns.',
    technologies: ['ReactJS', 'Node.js', 'Express', 'MongoDB', 'Bootstrap'],
    githubLink: '',
    liveDemoLink: '',
    images: [],
  },
  {
    id: '6',
    title: 'ML Project 2 – MLOps Pipeline',
    description:
      'End-to-end machine learning pipeline with experiment tracking and containerized deployment. Includes MLflow tracking (mlflow.db, mlruns), reproducible training (model_pipeline.py), serialized models (model.joblib), and a Dockerized inference service.',
    role: 'MLOps Engineer',
    problem:
      'Deploy and track ML models from experimentation to production with reproducibility.',
    approach:
      'Built a scikit-learn pipeline; tracked experiments in MLflow; containerized the inference app; added Makefile tasks and environment tests; used Supervisor for process management.',
    result:
      'Reproducible training and deployment with versioned artifacts and metrics; one-command build/run for demos.',
    technologies: ['Python', 'scikit-learn', 'MLflow', 'Docker', 'Joblib', 'Makefile', 'Supervisor'],
    githubLink: '',
    liveDemoLink: '',
    images: [],
  },
  {
    id: '7',
    title: 'Business Intelligence Dashboards',
    description:
      'Academic BI project transforming raw business data into actionable insights. Performed EDA, cleaned datasets with Power Query, designed dashboards in Power BI, and published via Google Data Studio for accessible sharing.',
    role: 'Data Analyst',
    problem:
      'Turn raw business data into clear, accessible dashboards that inform decisions.',
    approach:
      'EDA for trends and relationships; Power Query for cleaning/prep; Power BI for visual dashboards; Google Data Studio for publishing and sharing.',
    result:
      'Interactive dashboards that communicate data stories and support decision-making.',
    technologies: ['Power BI', 'Power Query', 'Google Data Studio', 'EDA'],
    githubLink: '',
    liveDemoLink: '',
    images: [],
  },
  {
    id: '8',
    title: 'Full-Stack Web Application',
    description:
      'End-to-end full-stack app with authentication and user management. Backend built with Fastify and TypeScript, PostgreSQL database, and a responsive Next.js + Tailwind CSS frontend.',
    role: 'Full Stack Developer',
    problem:
      'Provide a modern, type-safe full-stack template with auth and CRUD features.',
    approach:
      'TypeScript across the stack; Fastify REST APIs; PostgreSQL for data; Next.js app router UI with Tailwind components.',
    result:
      'Clean, maintainable foundation demonstrating full-stack patterns and DX best practices.',
    technologies: ['Fastify', 'TypeScript', 'PostgreSQL', 'Next.js', 'Tailwind CSS'],
    githubLink: '',
    liveDemoLink: '',
    images: [],
  },
  {
    id: '9',
    title: 'Data Analysis Projects',
    description:
      'Statistical analysis and hypothesis testing with reproducible reporting. Produced analyses and visualizations and delivered reports using R Markdown.',
    role: 'Data Analyst',
    problem:
      'Derive insights from datasets and communicate them clearly and reproducibly.',
    approach:
      'EDA and statistical tests; cleaned datasets; reproducible notebooks and R Markdown reports; selected Python/R tools when appropriate.',
    result:
      'Actionable insights and reproducible artifacts suitable for academic and practical contexts.',
    technologies: ['R', 'R Markdown', 'Statistics', 'Python', 'Pandas', 'NumPy'],
    githubLink: '',
    liveDemoLink: '',
    images: [],
  },
];

export { projectsData };
