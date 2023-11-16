import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="mt-5">
      <Container>
        <Row>
          <Col className="text-center">
            <div>
              <a href="https://www.linkedin.com/in/mohamed-aziz-ouertatani" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin" style={{ fontSize: '2rem', color: 'black', marginRight: '1rem' }}></i>
              </a>
              <a href="https://www.instagram.com/azyzoski/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram" style={{ fontSize: '2rem', color: 'black', marginRight: '1rem' }}></i>
              </a>
              <a href="https://github.com/mohamedaziz-ouertatani" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github" style={{ fontSize: '2rem', color: 'black', marginRight: '0rem' }}></i>
              </a>
            </div>
            <br/>
            <p>&copy; Mohamed Aziz Ouertatani 2023</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
