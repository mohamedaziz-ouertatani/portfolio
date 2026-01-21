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
      '/images/FLOCKOFF/flockoff3.png',
      '/images/FLOCKOFF/flockoff1.png',
      '/images/FLOCKOFF/flockoff2.png',
    ],
    priority: 70,
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
  {
    id: '10',
    title: 'Smart Inventory Forecasting & Replenishment Platform',
    description:
      'Production-style smart inventory system with demand forecasting, model selection, MLOps tracking, and replenishment recommendations served via secured APIs.',
    role: 'ML Engineer / Backend Engineer',
    problem:
      'Retail inventory decisions require accurate demand forecasts, model transparency, and reproducible pipelines to avoid stockouts and overstock.',
    approach:
      'Built an end-to-end, containerized platform with data ingestion, feature engineering, rolling backtests, ETS/ARIMA model selection, MLflow tracking, and PostgreSQL-backed ops schemas. Forecasts and accuracy metrics are persisted and exposed through protected Fastify APIs.',
    result:
      'Delivered a stable system that ingests data, trains and evaluates multiple forecasting models, tracks experiments, generates replenishment recommendations, and serves validated forecasts via authenticated endpoints.',
    technologies: [
      'Python',
      'Fastify',
      'TypeScript',
      'PostgreSQL',
      'Docker',
      'MLflow',
      'statsmodels',
      'Pandas',
      'NumPy',
      'JWT',
    ],
    githubLink: 'https://github.com/mohamedaziz-ouertatani/smart_inventory', // add when repo is public
    liveDemoLink: '',
    images: [
      '/images/SmartInventory/architecture.png',
      '/images/SmartInventory/mlflow_runs.png',
    ],
    priority: 95,
  },
  {
    id: '11',
    title: 'Estate-Mind: Tunisian Real Estate Data Pipeline & Advanced EDA',
    description:
      'Comprehensive data pipeline and exploratory data analysis (EDA) project for multi-source Tunisian real estate listings dataset. Includes full data cleaning, standardization, enrichment, statistics, and advanced visualization in Python notebooks.',
    role: 'Data Engineer & Analyst',
    problem:
      'Tunisia’s second-hand real estate market had fragmented, unstructured online listing data from multiple sources with inconsistent fields and limited actionable insights.',
    approach:
      'Engineered a robust data pipeline using pandas for loading and cleaning scraped data from various sources, parsed and standardized location & price fields, extracted features (e.g., type, bedrooms, listing “age”), and produced cleaned artifacts for analysis. Built detailed EDA notebooks with summary stats, geographic and price distribution visualizations, density heatmaps, and property-type clustering.',
    result:
      'Delivered a reproducible pipeline and advanced analysis notebooks yielding actionable market insights (e.g., price distribution by region, listing activity, rental/sale split, spatial visualizations, and clustering of property segments). Created high-quality figures and reporting-ready visuals for portfolio and business use.',
    technologies: [
      'Python',
      'pandas',
      'seaborn',
      'matplotlib',
      'plotly',
      'scikit-learn',
      'Jupyter Notebook',
      'Data Cleaning',
      'Data Visualization',
      'Clustering',
      'EDA',
    ],
    githubLink: 'https://github.com/mohamedaziz-ouertatani/estate-mind',
    liveDemoLink: '',
    images: ['/images/mind-estate/Figure_1.png'],
    priority: 100,
  },
  // Add other projects here...
];

export { projectsData };
