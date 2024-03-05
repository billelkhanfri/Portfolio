import { useState, useEffect, useRef } from "react";
import { FaNpm } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { DiSass, DiReact } from "react-icons/di";
import { PiFileJsx } from "react-icons/pi";
import { IoLogoNodejs } from "react-icons/io";
import { TbBrandVite } from "react-icons/tb";
import { SiPwa } from "react-icons/si";

import "../styles/Home.css";
import { motion } from "framer-motion";
import front from "../../images/frontEnd.jpeg";
import DescriptionReverted from "../../common/components/DescriptionReverted";
const competences = [
  {
    icon: <SiMongodb className="mongo-svg svg-icon" />,
  },
  {
    icon: <SiExpress className="js-svg svg-icon" />,
  },
  {
    icon: <DiReact className="react-svg svg-icon" />,
  },
  {
    icon: <IoLogoNodejs className="react-svg svg-icon" />,
  },
  {
    icon: <FaNpm className="svg-icon" />,
  },
  {
    icon: <PiFileJsx className="JSX-svg svg-icon" />,
  },
  {
    icon: <TbBrandVite className=" svg-icon" />,
  },

  {
    icon: <DiSass className="scss-svg svg-icon" />,
  },
  {
    icon: <SiPwa className=" svg-icon" />,
  },
];
const Competences = () => {
  const [m, setm] = useState(0);
  const n = useRef();
  useEffect(() => {
    setm(n.current.scrollWidth - n.current.offsetWidth);
  }, []);
  const handleMoveLeft = () => {
    n.current.scrollLeft -= 260;
  };

  const handleMoveRight = () => {
    n.current.scrollLeft += 260;
  };

  return (
    <div className="custom-container">
      <DescriptionReverted
        title={"Environement"}
        image={front}
        description={
          " Découvrez les technologies que je maîtrise et qui sont au cœur de mon expertise. Avec une solide expérience dans HTML, CSS, JavaScript, etbien plus encore, je suis prêt à relever tous les défis de développement web."
        }
      ></DescriptionReverted>

      <motion.div className="slider-container">
        <motion.div ref={n} className="slider">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -m }}
            className="inner"
          >
            {competences.map((competence, index) => (
              <motion.div className=" competence-div" key={index}>
                {competence.icon}
              </motion.div>
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
