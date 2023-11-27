// ProjectData.js

const portfolioImage1 =
  process.env.PUBLIC_URL + "/assets/images/Portfolio/portfolio.png";

const flockOffImage1 =
  process.env.PUBLIC_URL + "/assets/images/FLOCKOFF/flockoff1.png";

const flockOffImage2 =
  process.env.PUBLIC_URL + "/assets/images/FLOCKOFF/flockoff2.png";

const flockOffImage3 =
  process.env.PUBLIC_URL + "/assets/images/FLOCKOFF/flockoff3.png";

const flockOffImage4 =
  process.env.PUBLIC_URL + "/assets/images/FLOCKOFF/flockoff4.png";

const flockOffImage5 =
  process.env.PUBLIC_URL + "/assets/images/FLOCKOFF/flockoff5.png";

const flockOffImage6 =
  process.env.PUBLIC_URL + "/assets/images/FLOCKOFF/flockoff6.png";

const flockOffImage7 =
  process.env.PUBLIC_URL + "/assets/images/FLOCKOFF/flockoff7.png";

const flockOffImage8 =
  process.env.PUBLIC_URL + "/assets/images/FLOCKOFF/flockoff8.png";

const flockOffImage9 =
  process.env.PUBLIC_URL + "/assets/images/FLOCKOFF/flockoff9.png";

const flockOffImage10 =
  process.env.PUBLIC_URL + "/assets/images/FLOCKOFF/flockoff10.png";

const flockOffImage11 =
  process.env.PUBLIC_URL + "/assets/images/FLOCKOFF/flockoff11.png";

const flockOffImage12 =
  process.env.PUBLIC_URL + "/assets/images/FLOCKOFF/flockoff12.png";

const flockOffImage13 =
  process.env.PUBLIC_URL + "/assets/images/FLOCKOFF/flockoff13.png";

const flockOffImage14 =
  process.env.PUBLIC_URL + "/assets/images/FLOCKOFF/flockoff14.png";

const flockOffImage15 =
  process.env.PUBLIC_URL + "/assets/images/FLOCKOFF/flockoff15.png";

const flockOffImage16 =
  process.env.PUBLIC_URL + "/assets/images/FLOCKOFF/flockoff16.png";

const flockOffImage17 =
  process.env.PUBLIC_URL + "/assets/images/FLOCKOFF/flockoff17.png";
const projectsData = [
  {
    id: "1",
    title: "FLOCK OFF E-Commerce Platform",
    description:
      "A full-stack e-commerce platform for FLOCK OFF brand, allowing users to browse featured products and add them to a shopping cart. The platform includes backend services for product management, user management, and order processing.",
    technologies: ["ReactJS", "Node.js", "Express", "MongoDB", "Bootstrap"],
    githubLink: "https://github.com/mohamedaziz-ouertatani/flock-off-ecommerce",
    liveDemoLink: "",
    images: [
      flockOffImage1,
      flockOffImage2,
      flockOffImage3,
      flockOffImage4,
      flockOffImage5,
      flockOffImage6,
      flockOffImage7,
      flockOffImage8,
      flockOffImage9,
      flockOffImage10,
      flockOffImage11,
      flockOffImage12,
      flockOffImage13,
      flockOffImage14,
      flockOffImage15,
      flockOffImage16,
      flockOffImage17,
    ],
  },
  {
    id: "2",
    title: "Portfolio",
    description:
      "A personal portfolio static website to showcase my skills, experiences, and projects.",
    technologies: ["ReactJS", "JavaScript", "Bootstrap"],
    githubLink: "https://github.com/mohamedaziz-ouertatani/portfolio",
    liveDemoLink: "https://mohamedaziz-ouertatani.github.io/portfolio/",
    images: [portfolioImage1],
  },
  {
    id: "3",
    title: "EXPRIT Student Portal",
    description:
      "A React app for easy access to academic info. Features include absences, credits, marks, internships, results, and schedules.",
    technologies: ["ReactJS", "TypeScript", "Bootstrap"],
    githubLink:
      "https://github.com/mohamedaziz-ouertatani/exprit-student-portal",
    liveDemoLink: "",
    images: [],
  },
  {
    id: "4",
    title: "WASHA Website",
    description:
      "Collaborative 2nd-year project. Contributed to code for creating different UIs using HTML+Bootstrap. Implemented CRUDs for entities using PHP. Created and managed the database using Oracle. Used GitHub and Git for version control.",
    technologies: ["HTML", "Bootstrap", "PHP", "Oracle"],
    githubLink: "https://github.com/2A-22-23/project2223_2a1-2a1_mind-benders",
    liveDemoLink: "",
    images: [],
  },
  {
    id: "5",
    title: "The Motherland Game",
    description:
      "A collaborative 1st-year project. Contributed to code in C alongside SDL library. Used GitHub for version control. Designed using Adobe software. Integrated Joystick components with Arduino hardware and software.",
    technologies: ["C", "SDL", "Adobe", "Arduino"],
    githubLink: "https://github.com/mohamedaziz-ouertatani/1A1-Achilles",
    liveDemoLink: "",
    images: [],
  },
];

export { projectsData };
