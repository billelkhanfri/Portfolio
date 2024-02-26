import { useState, useEffect } from "react";
import "../styles/about.css";

const words = ["word1", "word2", "word3", "word4"];

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
        <p  key={index} className={currentinex === index?"slider-word active" :"slider-word"}>{word}</p>
      ))}
    </>
  );
  
  
  
}

export default WordSlider;
