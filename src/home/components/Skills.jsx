import "../styles/Home.css";

import { SiTailwindcss, SiPhp, SiMysql } from "react-icons/si";
import challenge from "../../images/challenges.jpg";

const learning = [
  {
    icon: <SiTailwindcss className="tailwind-svg svg-icon-skill" />,
    language: "TAILWIND",
    p: "20%",
    bg: "bg-one",
  },
  {
    icon: <SiPhp className="php-svg svg-icon-skill" />,
    language: "PHP",
    p: "25%",
  },
  {
    icon: <SiMysql className="mysql-svg svg-icon-skill" />,
    language: "MYSQL",
    p: "30%",
  },
];

function Skills() {
  return (
    <div className="custom-container">
      <div className="section-shapes section-shapes-reverted">
        <div className="section-square-wrapper reverted-square">
          <div className="section-square"></div>
          <h2>Technologies en apprentissage</h2>
        </div>
        <div className="section-image">
          <a href="https://fr.freepik.com/photos-gratuite/portrait-3d-personnes_66108324.htm#fromView=search&page=1&position=22&uuid=c806e90e-25a8-4762-b6bd-ceeede87f5cf">
            <img src={challenge} alt="" />
          </a>
        </div>
      </div>
      <div className="section-description">
        <p>
          Découvrez les technologies que je maîtrise et qui sont au cœur de mon
          expertise. Avec une solide expérience dans HTML, CSS, JavaScript, et
          bien plus encore, je suis prêt à relever tous les défis de
          développement web.
        </p>
      </div>
      <div className="learning-wrapper">
        {learning.map((learn, index) => (
          <div className="flip-card" key={index}>
            <div className="flip-card-inner">
              <div className="flip-card-front">{learn.icon}</div>
              <div className="flip-card-back">
                <h1>{learn.language}</h1>
                <p>{learn.p}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
