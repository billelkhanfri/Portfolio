

function ProjectCard({tech, name,id,image}) {
  

  return (
    <>
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
    </>
  );
}

export default ProjectCard