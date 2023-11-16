import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Experience = () => {
  const experiencesData = [
    {
      title: 'Swiver - Frontend Developer Intern',
      date: 'Jun 2022 - Aug 2022',
      description: `As a React JS Developer intern, I gained hands-on experience in building web applications using React JS.
      I worked with a team of engineers on the Swiver project, a business management software that helps enterprises with invoicing and stock management.`,
      contributions: [
        'Contributed to various aspects of the application, including creating responsive user interfaces for desktop and mobile devices.',
        'Implemented translation from English to Arabic, making the application accessible to a wider audience.',
        'Created logic for several React components, enhancing overall functionality and user experience.',
      ],
      skills: ['Bootstrap', 'Git', 'TypeScript', 'React.js'],
    },
    {
      title: 'Swiver - Frontend Developer',
      date: 'Aug 2022 - Apr 2023',
      skills: ['Node.js', 'English-Arabic Translation'],
    },
    {
      title: 'Inceptum - Software Developer',
      date: 'Apr 2023 - Present',
      skills: ['Angular', 'MongoDB', 'React Native'],
    },
    // Add more experiences as needed
  ];

  return (
    <section id="experience" className="py-5">
      <Container>
        <h2 className="text-center mb-4">EXPERIENCE</h2>
        <Row>
          {experiencesData.map((experience, index) => (
            <Col md={6} key={index} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{experience.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{experience.date}</Card.Subtitle>
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
                  <Card.Text className="font-weight-bold"><strong>Skills</strong>: {experience.skills.join(', ')}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
