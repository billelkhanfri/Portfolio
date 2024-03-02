import "../styles/Home.css";

import { SiTailwindcss, SiPhp, SiMysql, SiFuturelearn } from "react-icons/si";
import { GiStairsGoal } from "react-icons/gi";
import { GoGoal } from "react-icons/go";

import challenge from "../../images/learning-curve.jpg";

const learning = [
  {
    icon: <SiTailwindcss className="tailwind-svg svg-icon-skill" />,
    language: "TAILWIND",
    p: "20%",
    bg: "bg-one",
    progress: <GiStairsGoal className="progress-icon" />,
  },
  {
    icon: <SiPhp className="php-svg svg-icon-skill" />,
    language: "PHP",
    p: "25%",
    progress: <SiFuturelearn className="progress-icon" />,
  },
  {
    icon: <SiMysql className="mysql-svg svg-icon-skill" />,
    language: "MYSQL",
    p: "30%",
    progress: <GoGoal className="progress-icon" />,
  },
];

function Skills() {
  return (
    <div className="custom-container">
      <div className="section-shapes section-shapes">
        <div className="section-square-wrapper ">
          <div className="section-square"></div>
          <h2>Technologies en Cours de Maîtrise</h2>
        </div>
        <div className="section-image">
          <a href="https://fr.freepik.com/photos-gratuite/portrait-3d-personnes_66108324.htm#fromView=search&page=1&position=22&uuid=c806e90e-25a8-4762-b6bd-ceeede87f5cf">
            <img src={challenge} alt="" />
          </a>
        </div>
      </div>
      <div className="section-description">
        <p>
          Je me concentre actuellement sur l'expansion de mes compétences
          techniques. Maîtrisant PHP, MySQL, Bootstrap, Sass et Tailwind, je
          développe des applications web dynamiques avec des interfaces
          réactives et esthétiques. En parallèle, j'explorer les possibilités
          offertes par des bibliothèques modernes telles que Material UI pour
          créer des expériences utilisateur innovantes et interactives. Ma
          démarche consiste à appliquer activement ces compétences dans des
          projets concrets, enrichissant ainsi mon savoir-faire dans le domaine
          du développement web.
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
                {learn.progress}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
