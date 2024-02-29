import { useState, useEffect } from "react";
import "../styles/about.css";

const words = ["Conception", "Frontend", "Backend", "Adobe..."];

function WordSlider() {
  const [currentinex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (currentinex + 1) % words.length;
      setCurrentIndex(nextIndex);
    }, 4000);
    return () => clearInterval(timer);
  }, [currentinex]);
  return (
    <>
      {words.map((word, index) => (
        <h2  key={index} className={currentinex === index?"slider-word active" :"slider-word"}>{word}</h2>
      ))}
    </>
  );
  
  
  
}

export default WordSlider;
