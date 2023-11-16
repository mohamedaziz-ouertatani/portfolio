import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImage from '../../assets/images/Me.jpg';

const About = () => {
  return (
    <section id="about" className="py-5">
      <Container>
        <Row className="text-center">
          <Col md={12} className="mb-4 mt-4">
            <h2>A LITTLE ABOUT ME</h2>
          </Col>
          <Col md={12} className="mb-4">
            <img
              src={myImage}
              alt="Mohamed Aziz Ouertatani"
              className="img-fluid rounded-circle shadow-lg"
              style={{ width: '200px', height: '200px', margin: 'auto' }}
            />
          </Col>
          <Col md={12}>
            <p>
              Hello! 👋 I'm Aziz and I am a web developer with a passion for front-end development. Over the past few years, I've been immersed in the world of software development, gaining hands-on experience and honing my skills in creating dynamic and responsive web applications.
            </p>
            <p>
            I'm currently a third year student at <a className="text-decoration-none" href="https://esprit.tn/">ESPRIT</a> pursuing my Computer Science Engineering degree specialized in Data Science. I delve into the depths of data science, exploring the intricacies of algorithms and data structures. My passion for technology extends beyond the academic realm. I'm also a professional Muay Thai fighter, bringing discipline and determination into everything I do.
            </p>
            <p>
              As I look to the future, my goal is to transition from working on projects to making my own projects. I'm driven by the desire to make a meaningful impact in the tech world and create solutions that resonate with users.
            </p>
            <br/>
            <p>When I'm not on the computer, I enjoy working out, motorcycling, and gaming</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
