import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Projects = () => {
  const projectsData = [
    {
      title: 'Portfolio',
      description: 'A personal portfolio static website to showcase my skills, experiences, and projects.',
      technologies: ['ReactJS', 'JavaScript', 'Bootstrap'],
      githubLink: 'https://github.com/mohamedaziz-ouertatani/portfolio',
      liveDemoLink: 'https://mohamedaziz-ouertatani.github.io/portfolio/',
    },
    {
      title: 'EXPRIT Student Portal',
      description: 'A React app for easy access to academic info. Features include absences, credits, marks, internships, results, and schedules.',
      technologies: ['ReactJS', 'TypeScript', 'Bootstrap'],
      githubLink: 'https://github.com/mohamedaziz-ouertatani/exprit-student-portal',
    },
    {
      title: 'The Motherland Game',
      description: 'A collaborative 1st-year project. Contributed to code in C alongside SDL library. Used GitHub for version control. Designed using Adobe software. Integrated Joystick components with Arduino hardware and software.',
      technologies: ['C', 'SDL', 'Adobe', 'Arduino'],
      githubLink: 'https://github.com/mohamedaziz-ouertatani/1A1-Achilles',
    },
    {
      title: 'WASHA Website',
      description: 'Collaborative 2nd-year project. Contributed to code for creating different UIs using HTML+Bootstrap. Implemented CRUDs for entities using PHP. Created and managed the database using Oracle. Used GitHub and Git for version control.',
      technologies: ['HTML', 'Bootstrap', 'PHP', 'Oracle'],
      githubLink: 'https://github.com/2A-22-23/project2223_2a1-2a1_mind-benders',
    },
    
  ];

  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="text-center">WHAT I'VE DONE</h2>
        <p className="text-center mb-4">(more coming soon)</p>
        <Row>
          {projectsData.map((project, index) => (
            <Col md={6} key={index} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Card.Text>
                    <strong>Technologies:</strong> {project.technologies.join(', ')}
                  </Card.Text>
                  <Button className="me-1" variant="primary" href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    View on GitHub
                  </Button>
                  {project.liveDemoLink && (
                    <Button className="me-1" variant="secondary" href={project.liveDemoLink} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
