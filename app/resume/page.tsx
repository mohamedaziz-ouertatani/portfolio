import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume | Mohamed Aziz Ouertatani',
  description:
    'Resume of Mohamed Aziz Ouertatani, Computer Science Engineering student specializing in Data Science.',
  alternates: {
    canonical: 'https://mohamedaziz-ouertatani.github.io/resume',
  },
};

export default function ResumePage() {
  return (
    <main id="main-content" className="container px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Mohamed Aziz Ouertatani
          </h1>
          <p className="mt-1 text-lg text-gray-700 dark:text-gray-300">
            Computer Science Engineering Student – Data Science
          </p>
          <p className="mt-1 text-gray-600 dark:text-gray-400">Tunis, Tunisia</p>
          <ul className="mt-3 space-y-1 text-gray-700 dark:text-gray-300">
            <li>
              Email:{' '}
              <a
                className="text-primary-600 hover:underline dark:text-primary-400"
                href="mailto:mohamedaziz.ouertatani@esprit.tn"
              >
                mohamedaziz.ouertatani@esprit.tn
              </a>
            </li>
            <li>
              Phone:{' '}
              <a
                className="text-primary-600 hover:underline dark:text-primary-400"
                href="tel:+21629241717"
              >
                +216 29 241 717
              </a>
            </li>
            <li className="flex flex-wrap gap-4">
              <a
                className="text-primary-600 hover:underline dark:text-primary-400"
                href="https://www.linkedin.com/in/mohamed-aziz-ouertatani"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
              <a
                className="text-primary-600 hover:underline dark:text-primary-400"
                href="https://github.com/mohamedaziz-ouertatani"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                GitHub
              </a>
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                Download CV
              </a>
            </li>
          </ul>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Profile</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Computer Science Engineering student specializing in Data Science, currently in the 4th year of a 5-year
            engineering program. Strong foundation in programming, data analysis, and software development, with hands-on
            experience in backend and full-stack projects. Disciplined, fast learner, and comfortable working in demanding,
            real-world environments.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Education</h2>
          <div className="mt-3 space-y-4 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="font-medium">
                ESPRIT – Ecole Supérieure Privée d&apos;Ingénierie et de Technologies
              </h3>
              <p>Engineering Degree in Computer Science (Data Science)</p>
              <p>2021 – Present | Year 4 of 5 (State Engineering Program)</p>
            </div>
            <div>
              <h3 className="font-medium">L&apos;école Arabe Jordanienne - Jordanian System</h3>
              <p>General Secondary Education Certificate Examination (Experimental Sciences)</p>
              <p>General Average: 76%</p>
              <p>2019 – 2021</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Technical Skills</h2>
          <div className="mt-3 grid gap-6 md:grid-cols-2 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="font-medium">Programming</h3>
              <ul className="ml-6 list-disc">
                <li>Python, JavaScript, TypeScript, SQL</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium">Data &amp; ML</h3>
              <ul className="ml-6 list-disc">
                <li>Pandas, NumPy, scikit-learn, statistics</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium">Web &amp; Backend</h3>
              <ul className="ml-6 list-disc">
                <li>Node.js, Fastify, Next.js, React, REST APIs</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium">Databases</h3>
              <ul className="ml-6 list-disc">
                <li>PostgreSQL, SQL Server, MongoDB, Neo4j</li>
              </ul>
            </div>
            <div className="md:col-span-2">
              <h3 className="font-medium">Tools</h3>
              <ul className="ml-6 list-disc">
                <li>Git, GitHub, R, R Markdown</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Projects</h2>
          <div className="mt-3 space-y-6 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="font-medium">Full-Stack Web Application</h3>
              <ul className="ml-6 list-disc">
                <li>Backend with Fastify, TypeScript, PostgreSQL</li>
                <li>Authentication and user management</li>
                <li>Frontend with Next.js and Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium">Data Analysis Projects</h3>
              <ul className="ml-6 list-disc">
                <li>Statistical analysis and hypothesis testing</li>
                <li>Reproducible reports using R Markdown</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Experience</h2>
          <div className="mt-3 space-y-8 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="font-medium">iTransform365 – Next.js Developer</h3>
              <p>May 2024 – August 2024 | Lac 1, Tunis, Tunisia</p>
              <ul className="ml-6 list-disc">
                <li>Developed and maintained scalable web applications using Next.js</li>
                <li>Collaborated with cross-functional teams to deliver high-quality solutions</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium">Swiver – React.js Developer</h3>
              <p>August 2022 – April 2023 | Centre Urbain Nord, Tunis, Tunisia</p>
              <ul className="ml-6 list-disc">
                <li>Contributed to the development of Swiver.io, a business management platform</li>
                <li>Built responsive UI components and implemented multilingual support</li>
                <li>Enhanced application logic and user experience through component optimization</li>
                <li>Demonstrated strong problem-solving and teamwork skills</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium">Swiver – React.js Developer Intern</h3>
              <p>June 2022 – August 2022 | Centre Urbain Nord, Tunis, Tunisia</p>
              <ul className="ml-6 list-disc">
                <li>Gained hands-on experience in building web applications</li>
                <li>Worked on UI responsiveness, translation features, and component logic</li>
                <li>Improved overall functionality and accessibility of the platform</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Languages</h2>
          <ul className="mt-2 ml-6 list-disc text-gray-700 dark:text-gray-300">
            <li>Arabic (Native)</li>
            <li>French (Basic)</li>
            <li>English (Fluent)</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Interests</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Data Science, Software Engineering, Cybersecurity, Fitness &amp; Martial Arts, Self-development
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Portfolio</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Personal Portfolio: Mohamed Aziz Ouertatani. Showcases full-stack web projects, data science work, and practical
            applications including modern web development with React/Next.js, backend systems, and applied data analysis.
            Demonstrates hands-on engineering skills, clean code practices, and real-world problem solving.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Selected Projects</h2>
          <div className="mt-3 space-y-8 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="font-medium">FLOCK OFF – E-Commerce Platform</h3>
              <p>
                Developed a full MERN-stack e-commerce platform allowing users to browse, purchase, and manage products via a
                shopping cart. Built backend services for user, product, and order management. Implemented an admin dashboard
                for stock and order control.
              </p>
              <p className="mt-1">Technologies: React.js, Node.js, Express, MongoDB, Bootstrap</p>
            </div>
            <div>
              <h3 className="font-medium">PhotoCube Shop</h3>
              <p>
                Built a web platform for showcasing and selling custom photo cubes. Users can upload images, select product
                types, and place orders. Implemented backend services for order processing.
              </p>
              <p className="mt-1">Technologies: React.js, Node.js, Express, MongoDB, Bootstrap</p>
            </div>
            <div>
              <h3 className="font-medium">WASHA Website</h3>
              <p>
                Collaborative academic project developed during the 2nd year of engineering studies. Implemented UI components
                using HTML and Bootstrap, CRUD operations using PHP, and managed the database with Oracle. Used GitHub for
                version control.
              </p>
              <p className="mt-1">Technologies: HTML, Bootstrap, PHP, Oracle, Git</p>
            </div>
            <div>
              <h3 className="font-medium">The Motherland – 2D Game</h3>
              <p>
                Collaborative 2D game developed during the 1st year. Contributed to game logic using C and SDL, designed visual
                assets using Adobe tools, and integrated joystick controls using Arduino.
              </p>
              <p className="mt-1">Technologies: C, SDL, Adobe Suite, Arduino</p>
            </div>
            <div>
              <h3 className="font-medium">Share and Care – Charity Management Application</h3>
              <p>
                Desktop application developed using C++ and Qt. Implemented PDF generation, QR code encoding/decoding, and
                statistical analysis features to support charity management.
              </p>
              <p className="mt-1">Technologies: C++, Qt, Arduino</p>
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Technical Skills (Detailed)
          </h2>
          <div className="mt-3 space-y-4 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="font-medium">Languages</h3>
              <p>HTML5, CSS3, JavaScript, TypeScript, PHP, C/C++, Java, SQL</p>
            </div>
            <div>
              <h3 className="font-medium">Frameworks &amp; Libraries</h3>
              <p>React.js, Node.js, Express.js, MongoDB, Bootstrap, Symfony</p>
            </div>
            <div>
              <h3 className="font-medium">Tools &amp; Platforms</h3>
              <p>Git, GitHub, VS Code, Oracle, Adobe Photoshop, Adobe Illustrator</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
