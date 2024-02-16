import { useState } from "react";
import styled, { keyframes } from "styled-components";
import Arrow from "../../images/Arrow.svg";
import "../../styles/variables.scss";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-5px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const GobalWrapper = styled.div`
  height: auto;
  margin: 20px auto;
  border-radius: 5px;
`;

const DropDownSeen = styled.div`
  background: var(--primary-color);
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: ${(props) => (props.toggle ? " 5px 5px 0px 0px" : "5px")};
  height: 25px;
  padding: 0 12px;
`;

const Title = styled.h2`
  font-size: 13px;
  font-weight: 500;
  margin: 0;
`;
const ArrowImg = styled.img`
  width: 8.98px;
  height: 15.2px;
  @media (min-width: 768px) {
    width: 16px;
    height: 27px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  overflow: hidden;
  background: #f6f6f6;
  border-radius: 0px 0px 5px 5px;
  animation: ${fadeIn} 0.1s ease-in-out;
  animation-fill-mode: forwards;
  transform: "translateY(0)";
  padding: 10px;
`;

function Collapse(props) {
  const [toggle, setToggle] = useState(false);

  return (
    <GobalWrapper>
      <DropDownSeen onClick={() => setToggle(!toggle)} toggle={toggle}>
        <Title>{props.title}</Title>
        <ArrowImg
          src={Arrow}
          alt="Arrow"
          style={{ rotate: toggle ? "180deg" : "" }}
        />
      </DropDownSeen>

      {toggle && <ContentWrapper>{props.children}</ContentWrapper>}
    </GobalWrapper>
  );
}

export default Collapse;
