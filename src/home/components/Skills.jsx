import "../styles/Home.css";

import { SiTailwindcss, SiPhp, SiMysql, SiFuturelearn } from "react-icons/si";
import { GiStairsGoal } from "react-icons/gi";
import { GoGoal } from "react-icons/go";

import challenge from "../../images/learning-curve.jpg";
import Description from "../../common/components/Description";

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
      <Description
        title={"Technologies en Cours de Maîtrise"}
        image={challenge}
        description="Je me concentre actuellement sur l'expansion de mes compétences
          techniques. Maîtrisant PHP, MySQL, Bootstrap, Sass et Tailwind, je
          développe des applications web dynamiques avec des interfaces
          réactives et esthétiques. En parallèle, j'explorer les possibilités
          offertes par des bibliothèques modernes telles que Material UI pour
          créer des expériences utilisateur innovantes et interactives. Ma
          démarche consiste à appliquer activement ces compétences dans des
          projets concrets, enrichissant ainsi mon savoir-faire dans le domaine
          du développement web."
      ></Description>
    
      <div className="fliped-wrapper">
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
