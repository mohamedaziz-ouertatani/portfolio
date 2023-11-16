import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Contact = () => {
  const email = 'ouertatanimohamedaziz@gmail.com';

  const composeMailToLink = () => {
    const body = 'Hello Aziz,\n\nI would like to get in touch with you.';

    return `mailto:${email}?body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-5">
      <Container>
      <div className="d-flex align-items-center justify-content-center mb-4">
      <i className="bi bi-send" style={{ fontSize: '3rem', color: 'black' }}></i>
    </div>
        <h2 className="text-center mb-4">GET IN TOUCH!</h2>
        <Row>
          <Col md={8} className="mx-auto text-center">
            <p>Whether you have an idea for a project or just want to chat,</p>
            <p>feel free to send me an email!</p>
            <Button className="mt-1" variant="primary" href={composeMailToLink()} target="_blank" rel="noopener noreferrer">
              Say Hello
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;

