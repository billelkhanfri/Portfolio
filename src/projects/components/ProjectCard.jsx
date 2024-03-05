import { Link } from "react-router-dom";
import { useEffect,useState } from "react";

function ProjectCard({ name, id, image, url, languages }) {
  const [languageData, setLanguageData] = useState({});
  const accessToken = import.meta.env.VITE_GITHUB_ACCESS;

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await fetch(languages, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const data = await response.json();
        setLanguageData(data);
      } catch (error) {
        console.error("Error fetching language data:", error);
      }
    };

    fetchLanguages();
  }, [languages]);

  // Calculate the total number of lines
  const totalLines = Object.values(languageData).reduce(
    (acc, lines) => acc + lines,
    0
  );
  const handleClick = (event) => {
    event.stopPropagation();
  };
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
            {Object.entries(languageData).map(([language, lines]) => (
              <li key={language}>
                {language} :  {( (lines / totalLines) * 100).toFixed(0)}%
              </li>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
