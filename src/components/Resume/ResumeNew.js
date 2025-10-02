import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import experienceLetter from "../../Assets/WhatsApp Image 2025-09-29 at 18.31.26_b4a30ac2.jpg";
import owaisImage from "../../Assets/Owais.jpg";
import { AiOutlineDownload } from "react-icons/ai";
// import { Document, Page, pdfjs } from "react-pdf";
// import "react-pdf/dist/Page/AnnotationLayer.css";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative", marginBottom: "30px" }}>
          <Button
            variant="success"
            href={experienceLetter}
            target="_blank"
            download="Experience_Letter.jpg"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Experience Letter
          </Button>
        </Row>

        <Row className="resume" style={{ justifyContent: "center", padding: "20px" }}>
          <Col md={8} style={{ textAlign: "center" }}>
            <img 
              src={owaisImage} 
              alt="Owais Resume" 
              style={{ 
                maxWidth: "100%", 
                height: "auto", 
                border: "2px solid #623686",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
              }} 
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
