import styled, { keyframes } from "styled-components";
import { useState } from "react";

const GobalWrapper = styled.div`
  height: auto;
  margin: 20px auto;
  border-radius: 5px;
`;

const DropDownSeen = styled.div`
  color: white;
  display: flex;
  border-radius: ${(props) => (props.toggle ? "5px 5px 0px 0px" : "5px")};
  height: 25px;
  position: relative; /* Ensure relative positioning for pseudo-element */
`;

const TitleWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
  height: 25px;
  padding: 0 12px;
  cursor: pointer;
`;

const Title = styled.h2`
  font-size: 13px;
  font-weight: 500;
  margin: 0;
`;

function ModeContent() {
  const handelDarktMode = () => {
    const root = document.documentElement;
    root.style.setProperty("--body-color", "#333333");
    root.style.setProperty("--header-color", "#00000095");
    root.style.setProperty("--text-color", "#fff");
  };
  const handelLighttMode = () => {
    const root = document.documentElement;
    root.style.setProperty("--body-color", "#f2f2f2");
    root.style.setProperty("--header-color", "#fffffff5");
    root.style.setProperty("--text-color", "#333333");
  };
  return (
    <>
      <GobalWrapper>
        <DropDownSeen>
          <TitleWrapper
            style={{ borderRadius: "5px 0px 0px 5px", backgroundColor: "#EEE" }}
            onClick={handelLighttMode}
          >
            <Title
              style={{
                color: "#030303",
              }}
            >
              Clair
            </Title>
          </TitleWrapper>
          <TitleWrapper
            style={{
              borderRadius: "0px 5px 5px 0px",
              backgroundColor: "#413d3d",
            }}
            onClick={handelDarktMode}
          >
            {" "}
            <Title>Sombre</Title>
          </TitleWrapper>
        </DropDownSeen>
      </GobalWrapper>
    </>
  );
}

export default ModeContent;
