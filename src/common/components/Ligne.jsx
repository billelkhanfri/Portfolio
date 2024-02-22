import  { useState, useEffect } from "react";
import styled from "styled-components";
const RectOne = styled.div`
  width: 180px;
  height: 120px;
  background-color: var(--primary-color);
`;
const RecTow = styled.div`
  width: 42px;
  height: 120px;
  background-color: var(--primary-color);
`;
const RecThree = styled.div`
  width: 25.17px;
  height: 120px;
  background-color: var(--primary-color);
`;
const RecFour = styled.div`
  width: 12.1px;
  height: 120px;
  background-color: var(--primary-color);
`;
const RecFive = styled.div`
  width: 4px;
  height: 120px;
  background-color: var(--primary-color);
`;
const Wrapper = styled.div`
 
  background-color: var(--body-color);
  display: flex;
  position: relative;
  gap: 10px;
 padding-top: 80px;
  position: relative;
`;
function Ligne() {
 const [scrollY, setScrollY] = useState(0);
 const [lastScrollY, setLastScrollY] = useState(0);
 const [translateY, setTranslateY] = useState(0);

 // Update scroll position on scroll
 const handleScroll = () => {
   setScrollY(window.scrollY);
 };

 useEffect(() => {
   // Add scroll event listener when component mounts
   window.addEventListener("scroll", handleScroll);

   // Remove scroll event listener when component unmounts
   return () => {
     window.removeEventListener("scroll", handleScroll);
   };
 }, []); // Only run this effect once on component mount

 useEffect(() => {
   // Calculate the direction of scroll
   const direction = scrollY > lastScrollY ? "down" : "up";

   // Update translateY based on scroll direction
   setTranslateY(
     (prevTranslateY) => prevTranslateY + (direction === "down" ? 0.6 : -0.2)
   );

   // Update lastScrollY
   setLastScrollY(scrollY);
 }, [scrollY]);

  return (
    <Wrapper >
      <RectOne></RectOne>
      <RecTow></RecTow>
      <RecThree></RecThree>
      <RecFour></RecFour>
      <RecFive></RecFive>
    </Wrapper>
  );
}

export default Ligne;
