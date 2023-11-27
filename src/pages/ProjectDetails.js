import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { projectsData } from "../data/ProjectsData";
import { Container, Card, Button, Modal } from "react-bootstrap";

const ProjectDetails = () => {
  const { id } = useParams();
  const selectedProject = projectsData.find((project) => project.id === id);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  return (
    <Container className="">
      <h2 className="text-center mt-4">Project Details</h2>
      {selectedProject ? (
        <Card className="my-4">
          <Card.Body>
            <Card.Title>{selectedProject.title}</Card.Title>
            <Card.Text>{selectedProject.description}</Card.Text>
            <Card.Text>
              <strong>Technologies:</strong>{" "}
              {selectedProject.technologies.join(", ")}
            </Card.Text>
            {selectedProject.images && selectedProject.images.length > 0 && (
              <div className="mb-4">
                <h4>Project Images</h4>
                <div className="d-flex flex-wrap">
                  {selectedProject.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Project ${index + 1}`}
                      className="img-thumbnail m-2"
                      style={{ cursor: "pointer", maxWidth: "100px" }}
                      onClick={() => handleImageClick(image)}
                    />
                  ))}
                </div>
              </div>
            )}
            <div className="mb-3">
              <Button
                variant="outline-primary"
                href={selectedProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="me-2"
              >
                View on GitHub
              </Button>
              {selectedProject.liveDemoLink && (
                <Button
                  variant="outline-secondary"
                  href={selectedProject.liveDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </Button>
              )}
            </div>
          </Card.Body>
        </Card>
      ) : (
        <p>Project not found</p>
      )}

      {/* Modal for displaying clicked image */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        size="xl" // 'xl' for extra-large size
      >
        <Modal.Body>
          <img
            src={selectedImage}
            alt="Clicked Project"
            className="img-fluid rounded"
          />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default ProjectDetails;
