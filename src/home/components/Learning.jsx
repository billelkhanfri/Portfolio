
import { SiTailwindcss, SiMongodb } from "react-icons/si";

import { IoLogoNodejs } from "react-icons/io";
import "../styles/Home.css";

function Learning() {
  return (
    <div className="custom-container">
      <div className="learning-wrapper">
        <h2>Technologies connues / en apprentissage</h2>

        <div className="justify-content-center">
          <div className="text-center">
            <div className="competence">
              <IoLogoNodejs className="node-svg" />
              <h3>NODE JS</h3>
            </div>
          </div>
          <div className="text-center">
            <div className="competence">
              <SiTailwindcss className="tailwind-svg" />
              <h3>Tailwind</h3>
            </div>
          </div>
          <div className="text-center">
            <div className="competence">
              <SiMongodb className="mongo-svg" />
              <h3>MongoDB</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Learning;
