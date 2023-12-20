// ProjectData.js

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

const washaImage1 = process.env.PUBLIC_URL + "/assets/images/WASHA/washa1.png";
const washaImage2 = process.env.PUBLIC_URL + "/assets/images/WASHA/washa2.png";
const washaImage3 = process.env.PUBLIC_URL + "/assets/images/WASHA/washa3.png";
const washaImage4 = process.env.PUBLIC_URL + "/assets/images/WASHA/washa4.png";
const washaImage5 = process.env.PUBLIC_URL + "/assets/images/WASHA/washa5.png";
const washaImage6 = process.env.PUBLIC_URL + "/assets/images/WASHA/washa6.png";

const theMotherlandImage1 =
  process.env.PUBLIC_URL + "/assets/images/TheMotherLand/motherland1.jpeg";
const theMotherlandImage2 =
  process.env.PUBLIC_URL + "/assets/images/TheMotherLand/motherland2.jpg";
const theMotherlandImage3 =
  process.env.PUBLIC_URL + "/assets/images/TheMotherLand/motherland3.jpg";
const theMotherlandImage4 =
  process.env.PUBLIC_URL + "/assets/images/TheMotherLand/motherland4.jpeg";

const shareAndCareImage1 =
  process.env.PUBLIC_URL + "/assets/images/ShareAndCare/shareandcare1.jpg";
const shareAndCareImage2 =
  process.env.PUBLIC_URL + "/assets/images/ShareAndCare/shareandcare2.jpg";
const shareAndCareImage3 =
  process.env.PUBLIC_URL + "/assets/images/ShareAndCare/shareandcare3.jpg";
const shareAndCareImage4 =
  process.env.PUBLIC_URL + "/assets/images/ShareAndCare/shareandcare4.jpg";
const shareAndCareImage5 =
  process.env.PUBLIC_URL + "/assets/images/ShareAndCare/shareandcare5.jpeg";

const projectsData = [
  {
    id: "1",
    title: "FLOCK OFF E-Commerce Platform",
    description:
      "Developed a MERN-stack e-commerce platform. Users can browse, purchase, and manage products in their shopping cart. Implemented backend services for product and user management, as well as order processing. Admin side features include efficient stock and order management with a user-friendly dashboard.",
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
    ],
  },
  {
    id: "2",
    title: "WASHA Website",
    description:
      "Collaborative website project developed during the 2nd year of my engineering program. My contributions included writing code for various UIs using HTML and Bootstrap. I implemented CRUD operations for entities using PHP and managed the database using Oracle. Version control was handled through GitHub and Git.",
    technologies: ["HTML", "Bootstrap", "PHP", "Oracle"],
    githubLink: "https://github.com/2A-22-23/project2223_2a1-2a1_mind-benders",
    liveDemoLink: "",
    images: [
      washaImage1,
      washaImage2,
      washaImage3,
      washaImage4,
      washaImage5,
      washaImage6,
    ],
  },
  {
    id: "3",
    title: "The Motherland",
    description:
      "Collaborative 2D game project during the 1st year. My contributions included writing code in C language alongside with the SDL library for game development. Used GitHub for version control. Designed game elements using Adobe softwares. Integrated Joystick components using Arduino hardware and software.Collaborative 2D game project during the 1st year. My contributions included writing code in C language alongside with the SDL library for game development. Used GitHub for version control. Designed game elements using Adobe softwares. Integrated Joystick components using Arduino hardware and software.",
    technologies: ["C", "SDL", "Adobe", "Arduino"],
    githubLink: "https://github.com/mohamedaziz-ouertatani/1A1-Achilles",
    liveDemoLink: "",
    images: [
      theMotherlandImage1,
      theMotherlandImage2,
      theMotherlandImage3,
      theMotherlandImage4,
    ],
  },
  {
    id: "4",
    title: "Share and Care",
    description:
      "A collaborative academic project in my 2nd-year using Qt and C++. Developed a charity management desktop application, Share and Care. Implemented features like PDF generation, QR encoding and decoding, and statistical analysis tools to enhance the application's functionality.",
    technologies: ["C++", "Qt", "Arduino"],
    githubLink: "https://github.com/Projet-CPP/2a1_smart_share_and_care_center",
    liveDemoLink: "",
    images: [
      shareAndCareImage1,
      shareAndCareImage2,
      shareAndCareImage3,
      shareAndCareImage4,
      shareAndCareImage5,
    ],
  },
  // {
  //   id: "",
  //   title: "EXPRIT Student Portal",
  //   description:
  //     "A React app for easy access to academic info. Features include absences, credits, marks, internships, results, and schedules.",
  //   technologies: ["ReactJS", "TypeScript", "Bootstrap"],
  //   githubLink:
  //     "https://github.com/mohamedaziz-ouertatani/exprit-student-portal",
  //   liveDemoLink: "",
  //   images: [],
  // },
  // {
  //   id: "",
  //   title: "Portfolio",
  //   description:
  //     "A personal portfolio static website to showcase my skills, experiences, and projects.",
  //   technologies: ["ReactJS", "JavaScript", "Bootstrap"],
  //   githubLink: "https://github.com/mohamedaziz-ouertatani/portfolio",
  //   liveDemoLink: "https://mohamedaziz-ouertatani.github.io/portfolio/",
  //   images: [portfolioImage1],
  // },
];

export { projectsData };
