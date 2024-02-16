import React from "react";
//import Container from "../../common/components/Container";
import Billel from "../../images/Billel-profile-picture.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import { FiMail } from "react-icons/fi";
function Hero() {
  return (
    <Container fluid className="hero">
      <Row>
        <Col md={6} className="hero-text">
          <div className="left-text">
            <h3>Salut, je suis</h3>
            <h1>Billel KHANFRI</h1>
            <p>Développeur Frontend </p>
          </div>
          <div className="icons">
            <a href="https://github.com/billelkhanfri">
              <FaGithub className="icon github" />
            </a>
            <a href="https://www.linkedin.com/in/billel-khanfri-ab99b3b9">
              <FaLinkedin className="icon linkedin" />
            </a>
            <a href="mailto:khanfri.billel@yahoo.fr">
              <FiMail className="icon" />
            </a>
          </div>
        </Col>
        <Col md={6} className="hero-image overlay">
          <img src={Billel} alt="person with glasses" />
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
/*<Container>
      <Row> </Row>
      <div className="skewed">
        <div className="text">
          <div className="intro">
            <h3>Salut, je suis</h3>
            <h1> Billel KHANFRI</h1>
            <p> Développeur Frontend / Concepteur Designer UI</p>
            <div className="icons">
              <a href="https://github.com/billelkhanfri">
                <FaGithub className="icon github" />
              </a>
              <a href="https://www.linkedin.com/in/billel-khanfri-ab99b3b9">
                <FaLinkedin className="icon linkedin" />
              </a>
            </div>
          </div>
        </div>
        <div className="image">
          <div className="text-img"></div>
          <img src={Billel} alt=" person with glasses" />
        </div>
      </div>
    </Container>*/
