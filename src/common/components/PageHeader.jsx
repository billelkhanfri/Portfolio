import Logo from "./Logo";
import Navigation from "./Navigation";
import "../styles/common.css";
import Container from "./Container";

function pageHeader() {
  return (
    <Container>
      <div className="header-area">
        <div className="navigation-wrapper">
          <Logo />
          <Navigation />
        </div>
      </div>
    </Container>
  );
}

export default pageHeader;
