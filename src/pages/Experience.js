import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { experiencesData } from "../data/ExperiencesData";

const Experience = () => {
  return (
    <Container className="">
      <h2 className="text-center mb-4 mt-4">EXPERIENCE</h2>
      <Row>
        {experiencesData.map((experience, index) => (
          <Col md={6} key={index} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{experience.jobTitle}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {experience.date}
                </Card.Subtitle>
                <Card.Subtitle className="mt-2">
                  {experience.companyName}
                </Card.Subtitle>
                <Card.Text>{experience.description}</Card.Text>
                {experience.contributions && (
                  <>
                    <Card.Title className="mt-3">Key Contributions:</Card.Title>
                    <ul>
                      {experience.contributions.map((contribution, i) => (
                        <li key={i}>{contribution}</li>
                      ))}
                    </ul>
                  </>
                )}
                <Card.Text className="font-weight-bold">
                  <strong>Skills</strong>: {experience.skills.join(", ")}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Experience;
