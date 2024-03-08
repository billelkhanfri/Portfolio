import { Link } from "react-router-dom";

function ProjectCard({ name, id, image, url, date }) {


 

 
  const handleClick = (event) => {
    event.stopPropagation();
  };
  const created_at = date.split("T")
  return (
    <>
      <div className="thumb">
        <Link to={`/project/${id}`} key={`${id}`}>
          <div className="project-image">
            <div className="image-div">
              <img className="thum-img" src={image} alt="" />
            </div>
            <div className="card-separator"></div>
          </div>
        </Link>

        <div className="project-tag" onClick={handleClick}>
          <div className="project-title">
            <a href={url}>
              <p> {name}</p>
            </a>
          </div>
          <div className="text-wrapper">
          {created_at[0]}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
