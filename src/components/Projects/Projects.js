import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="E-Commerce Web Application"
              description="A full-stack e-commerce platform built using React.js, Laravel, and MySQL, enabling users to browse products, manage carts, and place orders seamlessly. The application includes secure authentication and role-based authorization to protect user data and admin operations. RESTful APIs were developed for efficient product management, cart handling, and order processing. Performance optimizations were implemented, resulting in approximately 30% faster page load times and improved user experience."
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
