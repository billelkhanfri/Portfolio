import { useState, useEffect, useRef } from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { SiFigma, SiAdobephotoshop } from "react-icons/si";
import { BsGit, BsGithub } from "react-icons/bs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { DiSass, DiReact } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import "../styles/Home.css";
import { motion } from "framer-motion";

const Competences = () => {
  const [m, setm] = useState(0);
  const n = useRef();
  useEffect(() => {
    setm(n.current.scrollWidth - n.current.offsetWidth);
  }, []);
  const handleMoveLeft = () => {
    n.current.scrollLeft -= 200; // Adjust the value according to your preference
  };

  const handleMoveRight = () => {
    n.current.scrollLeft += 200; // Adjust the value according to your preference
  };
  const competences = [
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png",
    },
    {
      icon: "https://e7.pngegg.com/pngimages/188/673/png-clipart-cascading-style-sheets-css3-bootstrap-valid-blue-angle-thumbnail.png",
    },
    {
      icon: "https://w7.pngwing.com/pngs/640/199/png-transparent-javascript-logo-html-javascript-logo-angle-text-rectangle-thumbnail.png",
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png",
    },
    {
      icon: "https://e7.pngegg.com/pngimages/188/673/png-clipart-cascading-style-sheets-css3-bootstrap-valid-blue-angle-thumbnail.png",
    },
    {
      icon: "https://w7.pngwing.com/pngs/640/199/png-transparent-javascript-logo-html-javascript-logo-angle-text-rectangle-thumbnail.png",
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png",
    },
    {
      icon: "https://e7.pngegg.com/pngimages/188/673/png-clipart-cascading-style-sheets-css3-bootstrap-valid-blue-angle-thumbnail.png",
    },
    {
      icon: "https://w7.pngwing.com/pngs/640/199/png-transparent-javascript-logo-html-javascript-logo-angle-text-rectangle-thumbnail.png",
    },
  ];

  return (
    <motion.div className="slider-container">
      <motion.div ref={n} className="slider">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -m }}
          className="inner"
        >
          {competences.map((competence, index) => (
            <motion.div key={index} className="competence">
              <img src={competence.icon} alt={`Competence ${index + 1}`} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <motion.div drag="x" className="arrow left" onClick={handleMoveLeft}>
        <FaArrowLeft />
      </motion.div>
      <motion.div drag="x" className="arrow right" onClick={handleMoveRight}>
        <FaArrowRight />
      </motion.div>
    </motion.div>
  );
};

export default Competences;
