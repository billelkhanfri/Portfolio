import styled from "styled-components";


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
const Squared = styled.div`
  width: 100px;
  height: 100px;
  overflow: hidden;
  padding: 0px;
  margin: 0px;
  
`;
function Square() {
  return (
    <div
      style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px" }}
    >
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
  );
}

export default Square