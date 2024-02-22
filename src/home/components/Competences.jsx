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
import front from "../../images/frontEnd.jpeg";

const Competences = () => {
  const [m, setm] = useState(0);
  const n = useRef();
  useEffect(() => {
    setm(n.current.scrollWidth - n.current.offsetWidth);
  }, []);
  const handleMoveLeft = () => {
    n.current.scrollLeft -= 232;
  };

  const handleMoveRight = () => {
    n.current.scrollLeft += 232;
  };
  const competences = [
    {
      icon: <AiFillHtml5 className="html-svg svg-icon" />,
    },
    {
      icon: <FaCss3Alt className="css-svg svg-icon" />,
    },
    {
      icon: <IoLogoJavascript className="js-svg svg-icon" />,
    },
    {
      icon: <DiSass className="scss-svg svg-icon" />,
    },
    {
      icon: <DiReact className="react-svg svg-icon" />,
    },
    {
      icon: <SiFigma className="figma-svg svg-icon" />,
    },
    {
      icon: <SiAdobephotoshop className="adobe-svg svg-icon" />,
    },
    {
      icon: <BsGit className="git-svg svg-icon" />,
    },
    {
      icon: <BsGithub className="github-svg svg-icon" />,
    },
  ];

  return (
    <div className="custom-container">
      <div className="skills-shapes">
        <div className="skills-square-wrapper">
          <div className="skills-square"></div>
          <h2> Technologies maîtrisées</h2>
        </div>
        <div className="skills-image">
          <a href="https://fr.freepik.com/photos-gratuite/portrait-3d-personnes_66108324.htm#fromView=search&page=1&position=22&uuid=c806e90e-25a8-4762-b6bd-ceeede87f5cf">
            <img src={front} alt="" />
          </a>
        </div>
      </div>
      <div className="skills-description">
        <p>
          Découvrez les technologies que je maîtrise et qui sont au cœur de mon
          expertise. Avec une solide expérience dans HTML, CSS, JavaScript, et
          bien plus encore, je suis prêt à relever tous les défis de
          développement web.
        </p>
      </div>
      <motion.div className="slider-container">
        <motion.div ref={n} className="slider">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -m }}
            className="inner"
          >
            {competences.map((competence, index) => (
              <motion.div key={index}>{competence.icon}</motion.div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div className="arrow left" onClick={handleMoveLeft}>
          <FaArrowLeft />
        </motion.div>
        <motion.div className="arrow right" onClick={handleMoveRight}>
          <FaArrowRight />
        </motion.div>
      </motion.div>
      
    </div>
  );
};

export default Competences;
