import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Comics Reading Platform"
              description="An interactive content platform developed with React.js and Laravel, designed to deliver a smooth and engaging reading experience. The application features responsive layouts and optimized UI components to ensure readability across devices. Focus was placed on performance and usability, enabling users to navigate and consume content efficiently."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Real Estate Listing Website"
              description="A responsive property listing website built using HTML, CSS, and JavaScript, allowing users to explore real estate listings with ease. The platform includes structured data presentation and intuitive navigation to enhance user experience. Emphasis was placed on clean UI design and accessibility across different screen sizes."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="CV Generator Web App"
              description="A full-stack CV builder application developed using React.js, Express.js, and Firebase, enabling users to create professional resumes dynamically. The app includes real-time preview functionality and dynamic form handling for a seamless editing experience. Backend APIs were implemented for efficient data storage and retrieval. The application was successfully deployed and tested for public use."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Portfolio Website"
              description="A modern personal portfolio built with Vue.js, TypeScript, and Tailwind CSS, showcasing projects and skills with a clean and responsive design. The application uses reusable components and optimized frontend performance to ensure fast loading and smooth user interaction."
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
