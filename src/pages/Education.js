import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { educationData } from "../data/EducationData";

const Education = () => {
  return (
    <Container className="">
      <h2 className="text-center mb-4 mt-4">EDUCATION</h2>
      <Row>
        {educationData.map((education, index) => (
          <Col md={6} key={index} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{education.degree}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {education.institution}
                </Card.Subtitle>
                <Card.Text>{education.year}</Card.Text>
                <Card.Text className="font-weight-bold">
                  Relevant Courses:
                </Card.Text>
                <ul>
                  {education.relevantCourses.map((course, i) => (
                    <li key={i}>{course}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Education;
