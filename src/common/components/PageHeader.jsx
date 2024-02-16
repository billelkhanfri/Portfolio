import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import "../styles/common.scss";
import Container from "./Container";

function pageHeader() {
  return (
    <Container>
      <div className="header-area">
        <Logo />
        <Navigation />
      </div>
    </Container>
  );
}

export default pageHeader;
