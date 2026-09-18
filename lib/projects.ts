export interface Project {
  id: string;
  /** Human-readable URL segment. The numeric `id` still resolves for links
   *  that were published before slugs existed. */
  slug: string;
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
  /**
   * Architecture stages, in order. Every entry is drawn from the project's
   * own `approach` text — nothing here describes work that is not already
   * documented in this file.
   */
  pipeline?: string[];
  /** Notable engineering decisions and the reasoning behind them. */
  keyDecisions?: { decision: string; why: string }[];
  /** Real obstacles hit during the build and how they were resolved. */
  challenges?: { challenge: string; resolution: string }[];
  /** Quantified outcomes, only where a real number exists. */
  metrics?: { label: string; value: string }[];
  // Higher number = more important
  priority?: number;
}

// '/images/placeholder.png' is a stub asset, not a real screenshot —
// treat it the same as "no image" so weak projects get the clean fallback.
export function hasRealScreenshot(project: Project): boolean {
  return Boolean(
    project.images?.[0] &&
    !project.images[0].includes('/images/placeholder.png')
  );
}

const projectsData: Project[] = [
  {
    id: '1',
    slug: 'researchbridge',
    title: 'ResearchBridge — Research Intelligence Platform',
    description:
      'Solo-built platform that takes a research idea or uploaded paper and returns an evidence-grounded assessment: related work, novelty, research gap, plausible applications, and feasibility.',
    role: 'Solo Developer',
    problem:
      'Researchers need a fast, trustworthy way to check novelty and find prior art without every claim risking fabrication from an LLM.',
    approach:
      'Architected the full pipeline — literature ingestion from arXiv, Semantic Scholar, Springer Nature and CORE; PostgreSQL + pgvector semantic retrieval; LLM-based knowledge extraction; and gap/opportunity detection. Every claim is tied to cited evidence, with categorical (non-fabricated) confidence scoring, loud/logged ingestion failures, and a free/open-source-first stack with LLM providers behind a replaceable interface.',
    result:
      'Shipped an end-to-end, evidence-grounded research assessment tool built and deployed solo, from ingestion to retrieval to reasoning.',
    technologies: [
      'Python',
      'FastAPI',
      'PostgreSQL',
      'pgvector',
      'sentence-transformers',
      'Next.js',
      'TypeScript',
      'LLM APIs',
      'Docker',
    ],
    pipeline: [
      'Research idea or uploaded paper',
      'Literature ingestion — arXiv, Semantic Scholar, Springer Nature, CORE',
      'PostgreSQL + pgvector semantic retrieval',
      'LLM-based knowledge extraction',
      'Gap and opportunity detection',
      'Cited, evidence-grounded assessment',
    ],
    keyDecisions: [
      {
        decision: 'Tie every claim to cited evidence',
        why: 'The point of the tool is a trustworthy novelty check, so an assessment is only as good as the papers behind it. Claims that cannot be traced to a source do not get made.',
      },
      {
        decision: 'Categorical confidence scoring instead of invented numbers',
        why: 'A fabricated percentage looks precise and is not. Coarse, categorical confidence stays honest about what the evidence supports.',
      },
      {
        decision: 'Loud, logged ingestion failures',
        why: 'A silent gap in the literature would quietly skew every novelty and gap result downstream, so a failed source is surfaced instead of skipped.',
      },
      {
        decision: 'LLM providers behind a replaceable interface',
        why: 'The stack is free and open-source first, and keeping providers behind one interface means the model can be swapped without touching ingestion or retrieval.',
      },
      {
        decision: 'Compare four retrieval baselines before committing to one',
        why: 'TF-IDF, BM25, embedding retrieval (all-MiniLM-L6-v2) and a hybrid of lexical and semantic are all implemented and evaluated against each other, so the retrieval choice rests on measurements rather than assumption.',
      },
      {
        decision: 'Measure extraction against a hand-annotated benchmark',
        why: 'A 40-paper annotated benchmark gives field-level precision, recall and F1 for each extractor, with per-domain packs and a warning that the samples are small.',
      },
      {
        decision: 'Corpus Q&A returns verbatim quotes, never generated prose',
        why: 'Answers are the grounded passages themselves. An optional, off-by-default local Ollama layer can summarise them, with citation markers validated against the real hits before display.',
      },
    ],
    challenges: [
      {
        challenge:
          'Springer Nature’s free tier rejects field-scoped queries and large pages',
        resolution:
          'Field-scoped queries and page sizes above 25 both returned 403 as a “premium feature”, verified against the live API. The connector defaults to a free-text query and a page size of 25.',
      },
    ],
    metrics: [
      { label: 'Literature sources', value: '4' },
      { label: 'Retrieval baselines compared', value: '4' },
      { label: 'Benchmark papers annotated', value: '40' },
    ],
    githubLink: 'https://github.com/mohamedaziz-ouertatani/ResearchBridge.git',
    liveDemoLink: '',
    images: ['/images/ResearchBridge/project.png'],
    priority: 95,
  },
  {
    id: '2',
    slug: 'flock-off-ecommerce',
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
    images: ['/images/FLOCKOFF/project.png'],
    priority: 90,
  },
  {
    id: '3',
    slug: 'fullstack-fastify-next',
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
    images: ['/images/Fastify/project.png'],
    priority: 80,
  },
  {
    id: '4',
    slug: 'mlops-pipeline',
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
    images: ['/images/MLOpsProject/project.png'],
    pipeline: [
      'scikit-learn training pipeline',
      'MLflow experiment tracking',
      'Versioned artifacts with Joblib',
      'Containerised inference app',
    ],
    priority: 80,
  },
  {
    id: '5',
    slug: 'business-intelligence-dashboards',
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
    images: ['/images/BI_ImportExport/project.png'],
    priority: 80,
  },
  {
    id: '6',
    slug: 'share-and-care',
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
    images: ['/images/ShareAndCare/project.png'],
    priority: 70,
  },
  {
    id: '7',
    slug: 'washa',
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
    images: ['/images/WASHA/project.png'],
    priority: 70,
  },
  {
    id: '8',
    slug: 'the-motherland',
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
    images: ['/images/TheMotherLand/project.png'],
    priority: 70,
  },
  {
    id: '9',
    slug: 'photocube-shop',
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
    images: ['/images/placeholder.project.png'],
    priority: 60,
  },
  {
    id: '10',
    slug: 'data-analysis',
    title: 'Data Analysis Project',
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
    images: ['/images/DataAnalysis/project.png'],
    priority: 80,
  },
  {
    id: '11',
    slug: 'smart-inventory',
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
      'Next.js',
      'Metabase',
      'GitHub Actions',
    ],
    pipeline: [
      'Data ingestion',
      'Feature engineering',
      'Rolling backtests',
      'ETS/ARIMA model selection',
      'MLflow experiment tracking',
      'PostgreSQL ops schemas',
      'Protected Fastify forecast APIs',
    ],
    keyDecisions: [
      {
        decision: 'Rolling backtests to choose a model per SKU-location',
        why: 'Seasonal Naive, ETS and ARIMA/SARIMA are each backtested over 26 weeks on every SKU-location, and the best is chosen by lowest WAPE with sMAPE as the tie-break, rather than picked by assumption.',
      },
      {
        decision: 'Keep a seasonal-naive baseline in every comparison',
        why: 'A statistical model only earns its place if it beats the simplest forecast, so the baseline is trained and scored alongside ETS and ARIMA.',
      },
      {
        decision: 'Generate seeded synthetic demand data',
        why: 'The pipeline runs end to end from a clean clone with no proprietary retail data, so anyone can reproduce ingestion, training and the API.',
      },
      {
        decision: 'Run the whole pipeline in CI on every push',
        why: 'GitHub Actions builds and type-checks the API, applies the migrations, runs the data pipeline on a small dataset and tests the protected endpoints.',
      },
      {
        decision: 'Track every experiment in MLflow',
        why: 'Reproducible pipelines were a stated requirement, and versioned runs make it possible to see why one model was selected over another.',
      },
      {
        decision:
          'Persist forecasts and accuracy metrics in PostgreSQL ops schemas',
        why: 'Storing results next to the operational data lets replenishment recommendations be generated and audited from one source.',
      },
      {
        decision: 'Serve forecasts through authenticated Fastify endpoints',
        why: 'Forecasts are validated and exposed only through protected APIs, so consumers get checked results rather than raw model output.',
      },
    ],
    metrics: [
      {
        label: 'Model families compared',
        value: 'Seasonal Naive · ETS · ARIMA/SARIMA',
      },
      { label: 'Backtest window', value: '26 weeks' },
      { label: 'Forecast horizon', value: '4 weeks' },
    ],
    githubLink: 'https://github.com/mohamedaziz-ouertatani/smart_inventory',
    liveDemoLink: '',
    images: ['/images/SmartInventory/project.png'],
    priority: 70,
  },
  {
    id: '12',
    slug: 'estate-mind',
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
      'Pandas',
      'Seaborn',
      'Matplotlib',
      'Plotly',
      'scikit-learn',
      'Jupyter Notebook',
      'Web Scraping',
      'Data Cleaning',
      'Data Visualization',
      'Clustering',
      'EDA',
    ],
    pipeline: [
      'Scraped listings — Tayara.tn and Mubawab',
      'Loading and cleaning with pandas',
      'Location and price standardisation',
      'Feature extraction — type, bedrooms, listing age',
      'Cleaned artifacts',
      'Advanced EDA, visualisation and clustering',
    ],
    keyDecisions: [
      {
        decision: 'Standardise location and price before any analysis',
        why: 'Listings came from several sources with inconsistent fields, so comparisons by region or price only mean something once those fields share one format.',
      },
      {
        decision: 'Keep cleaned artifacts separate from the EDA notebooks',
        why: 'The pipeline writes cleaned data once and the analysis reads from it, which keeps the results reproducible.',
      },
    ],
    metrics: [
      { label: 'Source platforms', value: '2' },
      { label: 'Tayara listings scraped', value: '9,510' },
      { label: 'Combined listings', value: '14,222' },
    ],
    challenges: [
      {
        challenge:
          'Fragmented, unstructured listings from multiple sources with inconsistent fields',
        resolution:
          'Parsed and standardised location and price fields with pandas, and extracted features such as property type, bedrooms and listing age to give every source a common shape.',
      },
    ],
    githubLink: 'https://github.com/mohamedaziz-ouertatani/estate-mind',
    liveDemoLink: '',
    images: ['/images/mind-estate/project.png'],
    priority: 95,
  },
  {
    id: '13',
    slug: 'biflow',
    title: 'BIFlow — Multi-Agent BI Pipeline Automation',
    description:
      'Multi-agent system that automates the full Business Intelligence pipeline, from raw data to an interactive dashboard with KPIs and business insights, without manual intervention at each stage.',
    role: 'Multi-Agent Architecture & KPI Logic',
    problem:
      'Turning raw data into a trustworthy BI dashboard normally means manual profiling, cleaning, KPI definition and reporting at every stage, redone from scratch for each new business domain.',
    approach:
      'Built as a 2-person team project around a dedicated Orchestrator Agent coordinating six specialized agents: Data Profiler, Data Quality/ETL, KPI & Semantic Layer, BI Analyst, Dashboard Generator, and a BI Auditor/XAI agent for traceability and explainability. The pipeline is not hardcoded to one dataset: it runs on e-commerce (Olist), banking/transactions (Berka, Czech Bank PKDD’99) and telecom churn (IBM Telco) data, using a per-agent registry pattern of business-domain-keyed KPI, cleaning and ETL definitions, so a new domain means extending a registry rather than rewriting logic. Agents never call each other: every hand-off is a validated Pydantic contract routed through the orchestrator. The Dashboard Generator serves a FastAPI JSON API to a Next.js “Audit Console” where each KPI traces back to its formula and the pipeline stage that produced it, and the Auditor also produces a PDF report.',
    result:
      'One pipeline that carries three unrelated business domains from raw data to a dashboard with KPIs and insights, with an auditor agent making each result traceable and explainable.',
    technologies: [
      'Python',
      'Pandas',
      'Multi-Agent Orchestration',
      'Pydantic',
      'FastAPI',
      'PostgreSQL',
      'Next.js',
      'TypeScript',
      'Recharts',
      'Docker',
      'GitHub Actions',
    ],
    pipeline: [
      'Raw business data',
      'Orchestrator Agent coordinating the pipeline',
      'Data Profiler',
      'Data Quality / ETL',
      'KPI & Semantic Layer',
      'BI Analyst',
      'Dashboard Generator',
      'BI Auditor / XAI — traceability and explainability',
    ],
    keyDecisions: [
      {
        decision:
          'Per-agent domain registries instead of a domain-adapter hierarchy',
        why: 'Each agent keeps business-domain-keyed KPI, cleaning and ETL definitions in its own registry. Adding a domain means extending a registry rather than rewriting logic, and there is no centralized adapter hierarchy to keep in sync.',
      },
      {
        decision: 'A dedicated Orchestrator Agent above six specialists',
        why: 'Each stage of the BI pipeline has one agent responsible for it, and a single orchestrator coordinates them so the run needs no manual intervention between stages.',
      },
      {
        decision:
          'Agents talk only to the orchestrator, through Pydantic contracts',
        why: 'Every hand-off is a validated model, so each agent can be tested and understood on its own and the contracts are the seam. When the domain field was missing from one contract, it was threaded through explicitly instead of hiding behind a default.',
      },
      {
        decision: 'Postgres loading is opt-in in the library, on in the CLI',
        why: 'Making it automatic would have tied every agent test to a live database. The CLI is the real-run entrypoint, so it loads into Postgres by default and offers --no-postgres to opt out.',
      },
      {
        decision:
          'Replace the Streamlit app with a JSON API and a Next.js frontend',
        why: 'The dashboard agent now only serves a layout over HTTP, and the frontend owns rendering, polling and UI state.',
      },
      {
        decision: 'A separate BI Auditor / XAI agent',
        why: 'Traceability and explainability are a stage of their own rather than an afterthought, so every KPI and insight can be traced back through the pipeline.',
      },
    ],
    challenges: [
      {
        challenge:
          'Profiling and KPIs on heterogeneous data, including a flat dataset with no calendar dimension',
        resolution:
          'The telecom churn data is flat and non-time-series, unlike the e-commerce and banking sources. The KPI and profiling logic was implemented to work across these differing structures instead of assuming a time axis.',
      },
      {
        challenge:
          'A false “-100% collapse” in every metric on the full dataset',
        resolution:
          'A single straggler Olist order dated September 2018 sat far after volume dropped to zero, so the last-two-months comparison read as a total collapse. Months with an order count below 20% of the busiest month are now excluded before picking the comparison window, a ratio rule that works on both the 500-order sample and the full dataset.',
      },
      {
        challenge:
          'The orchestrator container failed on its first real pipeline run',
        resolution:
          'It imports every agent in-process, so it needs their runtime dependencies too, not only its own. The transitive requirements were added to its image.',
      },
    ],
    metrics: [
      { label: 'Business domains', value: '3' },
      { label: 'Specialized agents', value: '6' },
      { label: 'Team size', value: '2' },
      { label: 'Olist orders processed', value: '~99k' },
      { label: 'Full-dataset run time', value: '~9 s' },
    ],
    githubLink: 'https://github.com/mohamedaziz-ouertatani/BIFlow.git',
    liveDemoLink: '',
    images: ['/images/BIFlow/project.png'],
    priority: 100,
  },
  // Add other projects here...
];

// Only surface strong, currently-relevant work in the public listing —
// lower-priority coursework stays in the data but off the front page.
export const STRONG_PROJECT_THRESHOLD = 70;

export const strongProjects = projectsData.filter(
  (project) => (project.priority ?? 0) >= STRONG_PROJECT_THRESHOLD
);

/** Projects sorted the way they should always be presented. */
export const rankedProjects = [...strongProjects].sort(
  (a, b) => (b.priority ?? 0) - (a.priority ?? 0)
);

export function projectHref(project: Project): string {
  return `/projects/${project.slug}`;
}

/**
 * Resolves either a slug or a legacy numeric id, so URLs shared before the
 * slug migration keep working.
 */
export function findProject(idOrSlug: string): Project | undefined {
  return projectsData.find(
    (project) => project.slug === idOrSlug || project.id === idOrSlug
  );
}

/** The next project in ranked order, for case-study navigation. */
export function nextProject(current: Project): Project {
  const index = rankedProjects.findIndex((p) => p.id === current.id);
  if (index === -1) return rankedProjects[0];
  return rankedProjects[(index + 1) % rankedProjects.length];
}

export { projectsData };
