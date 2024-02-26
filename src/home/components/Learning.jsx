import {
  SiMongodb,
  SiLeaflet,
  SiFirebase,
  SiAdobeillustrator,

} from "react-icons/si";

import { IoLogoNodejs } from "react-icons/io";
import "../styles/Home.css";
import challenge from "../../images/challenges.jpg";

const learning = [
  {
    icon: <IoLogoNodejs className="node-svg svg-icon-learn" />,
    language: "NODE JS",
    p: "Lorem ipsum dolor sit amet.",
  },

  {
    icon: <SiMongodb className="mongo-svg svg-icon-learn" />,
    language: "MongoDB",
    p: "Lorem ipsum dolor sit amet.",
  },

  {
    icon: <SiLeaflet className="leaflet-svg svg-icon-learn" />,
    language: "LEAFLET",
    p: "Lorem ipsum dolor sit amet.",
  },
  {
    icon: <SiFirebase className="firebase-svg svg-icon-learn" />,
    language: "FIREBASE",
    p: "Lorem ipsum dolor sit amet.",
  },
  {
    icon: <SiAdobeillustrator className="ai-svg svg-icon-learn" />,
    language: "ILLUSTRATOR",
    p: "Lorem ipsum dolor sit amet.",
  },
];

function Learning() {
  return (
    <div className="custom-container">
      <div className="section-shapes section-shapes-reverted">
        <div className="section-square-wrapper reverted-square">
          <div className="section-square"></div>
          <h2>Technologies connues</h2>
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
          <div className="learning-competence" key={index}>
            {learn.icon}
            <h3> {learn.language}</h3>
            <p>{learn.p} </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Learning;
