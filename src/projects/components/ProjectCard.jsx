import { Link } from "react-router-dom";

function ProjectCard({ tech, name, id, image }) {
  return (
    <>
      <Link to={`/project/${id}`} key={`${id}`}>
        <div className="thumb">
          <div className="image-div">
            <img className="thum-img" src={image} alt="" />
          </div>
<div className="card-separator"></div>
          <div className="project-tag">
            <div className="project-title">
              <p>{name}</p>
            </div>
            <div className="text-wrapper">
              <h2>{tech}</h2>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProjectCard;
