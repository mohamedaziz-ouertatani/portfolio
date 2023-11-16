import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Projects = () => {
  const projectsData = [
    {
      title: 'EXPRIT Student Portal',
      description: 'A React app for easy access to academic info. Features include absences, credits, marks, internships, results, and timetable.',
      technologies: ['ReactJS', 'TypeScript', 'Bootstrap'],
      githubLink: 'https://github.com/mohamedaziz-ouertatani/exprit-student-portal',
      liveDemoLink: 'https://yourusername.github.io/exprit-student-portal',
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
