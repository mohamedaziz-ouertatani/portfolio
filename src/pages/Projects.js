import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link
import { projectsData } from "../data/ProjectsData";

const Projects = () => {
  return (
    <Container className="">
      <h2 className="text-center mt-4">WHAT I'VE DONE</h2>
      <p className="text-center mb-4">(more coming soon)</p>
      <Row>
        {projectsData.map((project, index) => (
          <Col md={6} key={index} className="mb-4">
            <Link
              to={`/projects/${project.id}`}
              key={project.id}
              className="link-offset-2 link-underline link-underline-opacity-0"
            >
              <Card>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Card.Text>
                    <strong>Technologies:</strong>{" "}
                    {project.technologies.join(", ")}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
