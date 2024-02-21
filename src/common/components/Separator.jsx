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
  margin: 0 px40px;
  border-radius: 5px;
`;
const Squared = styled.div`
  width: 100px;
  height: 100px;
  overflow: hidden;
  padding: 0px;
  margin: 0px;
  // display: flex;
  // justify-content: flex-end;
`;

const RectOne = styled.div`
  width: 10px;
  background-color: var(--primary-color);
`;
const RecTow = styled.div`
  width: 20px;

  background-color: var(--primary-color);
`;
const RecThree = styled.div`
  width: 20px;

  background-color: var(--primary-color);
`;
const RecFour = styled.div`
  width: 20px;

  background-color: var(--primary-color);
`;
const RecFive = styled.div`
  width: 20px;

  background-color: var(--primary-color);
`;
const RecSix = styled.div`
  width: 30px;

  background-color: var(--primary-color);
`;
const RecSev = styled.div`
  width: 10px;

  background-color: var(--primary-color);
`;
const RecEight = styled.div`
  width: 20px;

  background-color: var(--primary-color);
`;

const Wrapper = styled.div`
  width: 200px;
  height: 200px;
  background-color: var(--body-color);
  display: flex;
  gap: 10px;
  margin: 20px 0px;
  transform: skew(45deg);
`;
const SectionTitle = styled.h1`
  font-size: 45px;
  color: var(--primary-color);
  width: fit-content;
  margin: auto;
  background: linear-gradient(to right, #a8a8a8 0, #ffffff 7%, rgb(94,94,94) 20%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${shinyAnimation} 11s linear infinite;
`;

function Section({ title, children, color }) {
  return (
    <>
      <div style={{display:"flex", justifyContent:"flex-end", marginTop:"20px"}}>
        <Squared>
          <Wrapper>
            <RectOne></RectOne>
            <RecTow></RecTow>
            <RecThree></RecThree>
            <RecFour></RecFour>
            <RecFive></RecFive>
            <RecSix></RecSix>
            <RecSev></RecSev>
            <RecEight></RecEight>
          </Wrapper>
        </Squared>
      </div>

      <SectionWrapper>
        <SectionTitle>{title}</SectionTitle>
        {children}
      </SectionWrapper>
    </>
  );
}

export default Section;
