import styled, { keyframes } from "styled-components";

// Keyframes for the shiny animation
const shinyAnimation = keyframes`
  0% {
    background-position: 0;
  }
  100% {
    background-position: 200px;
  }
`;

const SectionWrapper = styled.div`
  padding: 20px;
  text-align: center;
  margin: 40px;
  border-radius: 5px;
`;
const BackGroundSeparator = styled.div`
  height: 100px;
  background-image: url("http://localhost:5173/src/images/graph-strok-gray.svg");
`;
const SectionTitle = styled.h1`
  font-size: 36px;
  color: var(--primary-color);
  width: fit-content;
  margin: auto;
  background: linear-gradient(to right, #a8a8a8 0, #ffffff 7%, black 20%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${shinyAnimation} 11s linear infinite;
`;

function Section({ title, children, color }) {
  return (
    <>
      <BackGroundSeparator></BackGroundSeparator>

      <SectionWrapper>
        <SectionTitle>{title}</SectionTitle>
        {children}
      </SectionWrapper>
    </>
  );
}

export default Section;
