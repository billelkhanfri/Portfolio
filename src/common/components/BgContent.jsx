import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  width: 60px;
  height: 25px;
  text-align: center;
  margin: 10px;
`;

function ButtonContent() {
  return (
    <>
      <Button bgColor="var(--primary-color)" textColor="white">
        Oui
      </Button>
      <Button bgColor="#c3c3c3" textColor="black">
        Non
      </Button>
    </>
  );
}

export default ButtonContent;
