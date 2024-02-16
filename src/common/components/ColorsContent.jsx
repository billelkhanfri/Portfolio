import styled from "styled-components";
import { useState, useEffect } from "react";

const ColorBullets = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Bullet = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer;
  opacity: ${(props) => (props.active ? 1 : 0.3)};
  border: ${(props) => (props.active ? "1px solid gray " : " none")};
`;

function ColorsContent(props) {
  const [activeBullet, setActiveBullet] = useState(0);

  const handleClick = (index, color) => {
    document.documentElement.style.setProperty("--primary-color", color);
    localStorage.setItem("primaryColor", color);
    setActiveBullet(index);
  };

  useEffect(() => {
    const savedColor = localStorage.getItem("primaryColor");
    if (savedColor) {
      document.documentElement.style.setProperty("--primary-color", savedColor);
      // find the index of the savedColor in the array of bullets
      const index = [
        "#FF9800",
        "#0074D9",
        "#FFDC00",
        "#2ECC40",
        "#FF4136",
      ].indexOf(savedColor);
      if (index > -1) {
        setActiveBullet(index);
      }
    }
  }, []);

  return (
    <div>
      <ColorBullets>
        <Bullet
          color="#FF9800"
          active={activeBullet === 0}
          onClick={() => handleClick(0, "#FF9800")}
        />
        <Bullet
          color="#0074D9"
          active={activeBullet === 1}
          onClick={() => handleClick(1, "#0074D9")}
        />
        <Bullet
          color="#FFDC00"
          active={activeBullet === 2}
          onClick={() => handleClick(2, "#FFDC00")}
        />
        <Bullet
          color="#2ECC40"
          active={activeBullet === 3}
          onClick={() => handleClick(3, "#2ECC40")}
        />
        <Bullet
          color="#FF4136"
          active={activeBullet === 4}
          onClick={() => handleClick(4, "#FF4136")}
        />
      </ColorBullets>
    </div>
  );
}

export default ColorsContent;
