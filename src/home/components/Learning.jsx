import "../styles/Home.css";
import challenge from "../../images/challenges.jpg";
import Collapse from "../../common/components/Collapse";


// React Icons
import {
  FaCss3Alt,
 
} from "react-icons/fa";
import {AiFillHtml5 }from "react-icons/ai";

import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { DiReact} from "react-icons/di";
import { BsGit, BsGithub } from "react-icons/bs";
import {
  SiFigma,
  SiAdobephotoshop,
  SiMongodb,
  SiLeaflet,
  SiFirebase,
  SiAdobeillustrator,
  SiWordpress,
} from "react-icons/si";

const learning = [
  {
    icon: <AiFillHtml5 className="html-svg svg-icon-learn" />,
    language: "HTML",
    isFront: true,
    p: "",
  },
  {
    icon: <FaCss3Alt className="css-svg svg-icon-learn" />,
    language: "CSS",
    isFront: true,
    p: "",
  },
  {
    icon: <IoLogoJavascript className="js-svg svg-icon-learn" />,
    language: "JavaScript",
    isFront: true,
    p: "",
  },
  {
    icon: <DiReact className="react-svg svg-icon-learn" />,
    language: "React js",
    isFront: true,
    p: "",
  },
  {
    icon: <IoLogoNodejs className="react-svg svg-icon-learn" />,
    language: "Node js",
    isBack: true,
    p: "",
  },
  {
    icon: <SiMongodb className="mongo-svg svg-icon-learn" />,
    language: "MongoDB",
    isDatabase: true,
    p: "",
  },
  {
    icon: <SiLeaflet className="leaflet-svg svg-icon-learn" />,
    language: "Leaflet",
    isWebTech: true,
    p: "",
  },
  {
    icon: <SiFirebase className="firebase-svg svg-icon-learn" />,
    language: "Firebase",
    isDatabase: true,
    p: "",
  },
  {
    icon: <SiWordpress className="wordpress-svg svg-icon-learn" />,
    language: "Wordpress",
    isCMS: true,
    p: "",
  },
  {
    icon: <SiAdobephotoshop className="ps-svg svg-icon-learn" />,
    language: "Photoshop",
    isUI: true,
    p: "",
  },
  {
    icon: <SiAdobeillustrator className="ai-svg svg-icon-learn" />,
    language: "Illustartor",
    isUI: true,
    p: "",
  },
  {
    icon: <BsGit className="git-svg svg-icon-learn" />,
    language: "Git",
    isWebTech: true,
    p: "",
  },
  {
    icon: <BsGithub className="github-svg svg-icon-learn" />,
    language: "Github",
    isWebTech: true,
    p: "",
  },
  {
    icon: <SiFigma className="github-svg svg-icon-learn" />,
    language: "Figma",
    isUI: true,
    p: "",
  },
];




function Learning() {
    const webTechs = learning.filter((item) => item.isWebTech);
    const databases = learning.filter((item) => item.isDatabase);
    const cms = learning.filter((item) => item.isCMS);
    const uiTools = learning.filter((item) => item.isUI);
    const isFront = learning.filter((item) => item.isFront)
    const isBack = learning.filter((item)=> item.isBack)
  return (
    <div className="custom-container">
      <div className="section-shapes section-shapes">
        <div className="section-square-wrapper ">
          <div className="section-square"></div>
          <h2> Technologies maîtrisées</h2>
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

      <div className="language-wrapper">
        <Collapse title="Frontend">
          <ul className="language-list">
            {isFront.map((front, index) => (
              <li className="language-item" key={index}>
                {front.language}
              </li>
            ))}
          </ul>{" "}
        </Collapse>
        <Collapse title="Backend">
          <ul className="language-list">
            {isBack.map((back, index) => (
              <li className="language-item" key={index}>
                {back.language}
              </li>
            ))}
          </ul>{" "}
        </Collapse>
        <Collapse title="Base de données">
          <ul className="language-list">
            {databases.map((db, index) => (
              <li className="language-item" key={index}>
                {db.language}
              </li>
            ))}
          </ul>{" "}
        </Collapse>
        <Collapse title="Web Tech">
          <ul className="language-list">
            {webTechs.map((web, index) => (
              <li className="language-item" key={index}>
                {web.language}
              </li>
            ))}
          </ul>{" "}
        </Collapse>
        <Collapse title="CMS">
          <ul className="language-list">
            {cms.map((web, index) => (
              <li className="language-item" key={index}>
                {web.language}
              </li>
            ))}
          </ul>{" "}
        </Collapse>
        <Collapse title="Interface Utilisateur">
          <ul className="language-list">
            {uiTools.map((web, index) => (
              <li className="language-item" key={index}>
                {web.language}
              </li>
            ))}
          </ul>{" "}
        </Collapse>
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
