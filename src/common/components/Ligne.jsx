import React from "react";
import styled from "styled-components";
const Separat = styled.div`
  width: 100%;
  height: 0;
  border-top: 1px solid #ccc;
  margin: 20px 0;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -13px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    width: 20px;
    height: 20px;
    background-color: var(--primary-color);
    border-top: 1px solid #ccc;
    border-right: 1px solid #ccc;
  }
`;
function Ligne() {
  return <Separat></Separat>;
}

export default Ligne;
