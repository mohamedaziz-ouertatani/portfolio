import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const handleDownloadResume = () => {
    // Use a relative path to the PDF file
    const resumeFilePath =
      process.env.PUBLIC_URL + "/files/Mohamed_Aziz_Ouertatani_Resume.pdf";

    // Create a link element
    const link = document.createElement("a");
    link.href = resumeFilePath;
    link.target = "_blank"; // Open in a new tab
    link.download = "Mohamed_Aziz_Ouertatani_Resume.pdf"; // Specify the file name

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger a click on the link
    link.click();

    // Remove the link from the body
    document.body.removeChild(link);
  };

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="md"
      className="justify-content-between"
    >
      <Navbar.Brand
        as={Link} // Use Link from react-router-dom
        to="/about"
        className="ms-3 d-sm-none d-md-block d-none d-sm-block"
      >
        Mohamed Aziz Ouertatani
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/experience">
            Experience
          </Nav.Link>
          <Nav.Link as={Link} to="/education">
            Education
          </Nav.Link>
          <Nav.Link as={Link} to="/skills">
            Skills
          </Nav.Link>
          <Nav.Link as={Link} to="/projects">
            Portfolio
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Nav>
        <Button
          variant="outline-light"
          className="btn me-3 btn-sm"
          onClick={handleDownloadResume}
        >
          My Resume
        </Button>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
