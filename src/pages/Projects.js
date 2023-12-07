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
            <Card>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Card.Text>
                  <strong>Technologies:</strong>{" "}
                  {project.technologies.join(", ")}
                </Card.Text>
                <Link
                  to={`/projects/${project.id}`}
                  key={project.id}
                  className=""
                >
                  <Button variant="outline-primary btn btn-sm">
                    View Project
                  </Button>
                </Link>
              </Card.Body>
              {/* <Card.Footer className=""> */}

              {/* </Card.Footer> */}
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
