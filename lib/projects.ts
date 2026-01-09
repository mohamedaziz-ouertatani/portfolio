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
      'Developed a MERN-stack e-commerce platform. Users can browse, purchase, and manage products in their shopping cart. Implemented backend services for product and user management, as well as order processing. Admin side features include efficient stock and order management with a user-friendly dashboard.',
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
      'Collaborative website project developed during the 2nd year of my engineering program. My contributions included writing code for various UIs using HTML and Bootstrap. I implemented CRUD operations for entities using PHP and managed the database using Oracle. Version control was handled through GitHub and Git.',
    role: 'Front-End Developer & Database Engineer',
    problem:
      'Academic project requiring a full-stack web application with database integration.',
    approach:
      'Collaborated with a team using Git for version control, implemented responsive UIs with Bootstrap, and created PHP-based CRUD operations with Oracle database.',
    result:
      'Successfully delivered a collaborative web application demonstrating full-stack development skills and teamwork.',
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
      'Collaborative 2D game project during the 1st year. My contributions included writing code in C language alongside with the SDL library for game development. Used GitHub for version control. Designed game elements using Adobe softwares. Integrated Joystick components using Arduino hardware and software.',
    role: 'Game Developer & Hardware Integration',
    problem: 'Create an engaging 2D game with custom hardware controls.',
    approach:
      'Utilized C and SDL library for game logic and rendering, designed visual assets with Adobe tools, and integrated Arduino-based joystick for enhanced gameplay.',
    result:
      'Completed a playable 2D game with custom hardware controls, showcasing low-level programming and hardware integration skills.',
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
      'A collaborative academic project in my 2nd-year using Qt and C++. Developed a charity management desktop application, Share and Care. Implemented features like PDF generation, QR encoding and decoding, and statistical analysis tools to enhance the application\'s functionality.',
    role: 'Desktop Application Developer',
    problem:
      'Charity organizations needed a desktop solution for managing donations and beneficiaries.',
    approach:
      'Built a Qt-based C++ application with PDF generation, QR code support, and data visualization features for comprehensive charity management.',
    result:
      'Delivered a feature-rich desktop application with document generation, QR functionality, and analytics capabilities.',
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
];

export { projectsData };
