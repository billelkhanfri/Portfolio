import styled from "styled-components";
const RectOne = styled.div`
  width: 35px;
  height: 100px;
  background-color: var(--primary-color);
`;
const RecTow = styled.div`
  width: 28px;
  height: 100px;
  background-color: var(--primary-color);
`;
const RecThree = styled.div`
  width: 22px;
  height: 100px;
  background-color: var(--primary-color);
`;
const RecFour = styled.div`
  width: 12.1px;
  height: 100px;
  background-color: var(--primary-color);
`;
const RecFive = styled.div`
  width: 3px;
  height: 100px;
  background-color: var(--primary-color);
`;
const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  transform: rotate(90deg);
  left: 10px;
  @media screen and (max-width : 475px){
    display: none;
    
  }
`;

function Ligne_left() {
  return (
    <Wrapper>
      <RectOne></RectOne>
      <RecTow></RecTow>
      <RecThree></RecThree>
      <RecFour></RecFour>
      <RecFive></RecFive>
    </Wrapper>
  );
}

export default Ligne_left;
