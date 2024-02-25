import "../styles/common.css";
import { useState, useEffect } from "react";

const Phase = {
  Typing: "Typing",
  Pausing: "Pausing",
  Deleting: "Deleting",
};

const useType = (text) => {
  const [phase, setPhase] = useState(Phase.Typing);
  const [type, setType] = useState("");
  
  useEffect(() => {
    let timeout;
    
    switch (phase) {
      case Phase.Typing:
        timeout = setTimeout(() => {
          setType(text.slice(0, type.length + 1));
        }, 100);
        
        if (type === text) {
          setPhase(Phase.Pausing);
        }
        break;

      case Phase.Pausing:
        timeout = setTimeout(() => {
          setPhase(Phase.Deleting);
        }, 1000);
        break;

      case Phase.Deleting:
        timeout = setTimeout(() => {
          setType(text.slice(0, type.length - 1));
        }, 100);
        
        if (type === "") {
          setPhase(Phase.Typing);
        }
        break;

      default:
        break;
    }

    return () => clearTimeout(timeout);
  }, [text, type, phase]);
  
  return type;
};




function TypingEffect({ typedText }) {

  const typing = useType(typedText)
  return (
    <span className="cursor-span">
      {/* {text} */}
      {typing}
    </span>
  );
}

export default TypingEffect;
