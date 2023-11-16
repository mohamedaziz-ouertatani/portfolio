import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-scroll'; // Add this import statement

const NavigationBar = () => {
  const handleDownloadResume = () => {
    // Use a relative path to the PDF file
    const resumeFilePath = process.env.PUBLIC_URL + '/files/Mohamed_Aziz_Ouertatani_Resume.pdf';

    // Create a link element
    const link = document.createElement('a');
    link.href = resumeFilePath;
    link.target = '_blank'; // Open in a new tab
    link.download = 'Mohamed_Aziz_Ouertatani_Resume.pdf'; // Specify the file name

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger a click on the link
    link.click();

    // Remove the link from the body
    document.body.removeChild(link);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="md" fixed="top" className="justify-content-between">
      <Navbar.Brand className="ms-3" href="#about">Mohamed Aziz Ouertatani</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mr-auto">
          <Link to="about" smooth={true} duration={500} className="nav-link" offset={-70}>
            About
          </Link>
          <Link to="experience" smooth={true} duration={500} className="nav-link" offset={-70}>
            Experience
          </Link>
          <Link to="education" smooth={true} duration={500} className="nav-link" offset={-70}>
            Education
          </Link>
          <Link to="skills" smooth={true} duration={500} className="nav-link" offset={-70}>
            Skills
          </Link>
          <Link to="projects" smooth={true} duration={500} className="nav-link" offset={-70}>
            Portfolio
          </Link>
          <Link to="contact" smooth={true} duration={500} className="nav-link" offset={-70}>
            Contact
          </Link>
        </Nav>
      </Navbar.Collapse>
      <Nav>
        <Button variant="outline-light" className="me-3" onClick={handleDownloadResume}>
          My Resume
        </Button>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
