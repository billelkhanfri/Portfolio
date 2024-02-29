import React from 'react'
import challenge from "../../images/challenges.jpg";


function ProjectCard() {
  return (
    <>
      <div className="thumb">
        <div className="th-wrapper">
          <div className="coup-coeur-vignette">
            <p>Nom du project</p>
          </div>

          <img className="thum-img" src={challenge} alt="" />
          <div className="text-wrapper">
            <div>
              <h2>Technologie</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard