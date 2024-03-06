import styled, { keyframes } from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { IoArrowForwardCircleSharp } from "react-icons/io5";




const GobalWrapper = styled.div`
  border-radius: 5px;
  position: relative;
  width: 100%;
  margin: auto;
`;

const DropDownSeen = styled.div`
  /* background: var(--body-color); */
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: ${(props) => (props.toggle ? " 5px 5px 0px 0px" : "5px")};
  height: 40px;
  position: relative;
`;

const Title = styled.p`
  font-size: 20px;
  line-height: 2rem;
  margin: 0;
  /* color: var(--text-color); */
  color: var(--text-color);
`;


const ContentWrapper = styled.div`
  
`;

function Collapse(props) {
  const [toggle, setToggle] = useState(false);

  return (
    <GobalWrapper>
      <DropDownSeen onClick={() => setToggle(!toggle)} toggle={toggle}>
        <div className="title-arrow">
          <IoArrowForwardCircleSharp className="first-arrow"/>

          <Title>{props.title}</Title>
        </div>

        <IoIosArrowDown
          className="arrow-collapse"
          style={{
            color: "var(primary-color)",
            rotate: toggle ? "180deg" : "",
          }}
        />
      </DropDownSeen>

      {toggle && <ContentWrapper>{props.children}</ContentWrapper>}
    </GobalWrapper>
  );
}

export default Collapse;
