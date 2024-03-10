import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import PageHeader from "../../common/components/PageHeader";
import SettingBox from "../../common/components/SettingBox";
import "../styles/projects.css";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm"; 
import Loader from "../helpers/Loader.jsx";
import Footer from "../../common/components/Footer";
import Square from "../../common/components/Square.jsx"

function Project() {
  const [projectData, setProjectData] = useState(null);
  const [readmeContent, setReadmeContent] = useState("");
  const { projectId } = useParams();

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const accessToken = import.meta.env.VITE_GIT_ACCESS;

        // Fetch project data
        const response = await fetch(
          `https://api.github.com/repositories/${projectId}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Error fetching project data");
        }

        const data = await response.json();
        setProjectData(data);

        // Fetch README content
        const readmeResponse = await fetch(
          `https://api.github.com/repos/${data.full_name}/readme`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (!readmeResponse.ok) {
          throw new Error("Error fetching README content");
        }

        const readmeData = await readmeResponse.json();
        // The content returned from the API is Base64 encoded
        // You need to decode it to get the actual content
        const decodedContent = atob(readmeData.content);
        setReadmeContent(decodedContent);
      } catch (error) {
        console.error("Error fetching project data", error);
      }
    };

    fetchProjectData();
  }, [projectId]);

  return (
    <>
      <SettingBox />
      <PageHeader />

      <div className="project-wrap custom-container">
        <Square></Square>

        {projectData && (
          <center className="project-head ">
            {" "}
            <h2> {projectData.name}</h2>{" "}
          </center>
        )}

        <div className="  ">
          {projectData ? (
            <>
              <div className="readme-content">
                <div className="wrapped-content">
                  <ReactMarkdown remarkPlugins={[gfm]}>
                    {readmeContent}
                  </ReactMarkdown>
                </div>
              </div>
            </>
          ) : (
            <Loader></Loader>
          )}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Project;
