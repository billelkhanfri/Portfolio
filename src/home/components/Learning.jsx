import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SiTailwindcss, SiMongodb } from "react-icons/si";

import { IoLogoNodejs } from "react-icons/io";
import "../styles/Home.scss";

function Learning() {
  return (
    <Container className="bar-wrapper">
      <h2> J'apprends :</h2>
      <Row className="justify-content-center">
        <Col className="text-center">
          <div className="competence">
            <IoLogoNodejs className="node-svg" />
            <h3>NODE JS</h3>
          </div>
        </Col>
        <Col className="text-center">
          <div className="competence">
            <SiTailwindcss className="tailwind-svg" />
            <h3>Tailwind</h3>
          </div>
        </Col>
        <Col className="text-center">
          <div className="competence">
            <SiMongodb className="mongo-svg" />
            <h3>MongoDB</h3>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Learning;
