import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { SiFigma, SiAdobephotoshop } from "react-icons/si";
import { BsGit, BsGithub } from "react-icons/bs";

import { DiSass, DiReact } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import "../styles/Home.scss";

const Competences = () => {
  return (
    <Container className="bar-wrapper">
      <h2> J'UTILISE :</h2>
      <Row className="justify-content-center">
        <Col className="text-center">
          <div className="competence">
            <AiFillHtml5 className="html-svg" />
            <h3>HTML5</h3>
          </div>
        </Col>
        <Col className="text-center">
          <div className="competence">
            <FaCss3Alt className="css-svg" />
            <h3>CSS3</h3>
          </div>
        </Col>
        <Col className="text-center">
          <div className="competence">
            <SiFigma className="figma-svg" />
            <h3>Figma</h3>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="text-center">
          <div className="competence">
            <DiSass className="scss-svg" />
            <h3>Sass</h3>
          </div>
        </Col>
        <Col className="text-center">
          <div className="competence">
            <IoLogoJavascript className="js-svg" />
            <h3>JavaScript</h3>
          </div>
        </Col>
        <Col className="text-center">
          <div className="competence">
            <DiReact className="react-svg" />
            <h3>React js</h3>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="text-center">
          <div className="competence">
            <SiAdobephotoshop className="adobe-svg" />

            <h3>Photoshop</h3>
          </div>
        </Col>
        <Col className="text-center">
          <div className="competence">
            <BsGit className="git-svg" />

            <h3>Git</h3>
          </div>
        </Col>
        <Col className="text-center">
          <div className="competence">
            <BsGithub className="github-svg" />

            <h3>Github</h3>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Competences;
