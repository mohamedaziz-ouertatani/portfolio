import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Education = () => {
  const educationData = [
    {
      institution: 'ESPRIT: Ecole Sup Privée d\'Ingénierie et de Technologies',
      degree: 'Bachelor of Engineering in Computer Science specialized in Data Science',
      year: '2021 - Present',
      relevantCourses: ['UML', 'Web Technologies 2.0', 'Databases', 'Estimation Techniques for Engineers', 'IP Essentials', 'Administration and Security Systems for Unix', 'Photoshop and Video Editing'],
    },
    // Add more educational experiences as needed
  ];

  return (
    <section id="education" className="py-5">
      <Container>
        <h2 className="text-center mb-4">EDUCATION</h2>
        <Row>
          {educationData.map((education, index) => (
            <Col md={6} key={index} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{education.degree}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{education.institution}</Card.Subtitle>
                  <Card.Text>{education.year}</Card.Text>
                  <Card.Text className="font-weight-bold">Relevant Courses:</Card.Text>
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
    </section>
  );
};

export default Education;
