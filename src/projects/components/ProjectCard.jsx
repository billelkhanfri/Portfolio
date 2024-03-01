import { Link } from "react-router-dom";

function ProjectCard({ tech, name, id, image }) {
  return (
    <>
      <Link to={`/project/${id}`} key={`${id}`}>
        <div className="thumb">
          <div className="thumb-wrappers">
            <div className="project-title">
              <p>{name}</p>
            </div>
            <img className="thum-img" src={image} alt="" />{" "}
            <div className="text-wrapper">
              <div>
                <h2>{tech}</h2>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProjectCard;
