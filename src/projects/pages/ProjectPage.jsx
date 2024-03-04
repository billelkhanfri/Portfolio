import PageHeader from "../../common/components/PageHeader";
import SettingBox from "../../common/components/SettingBox";
import ProjectCard from "../components/ProjectCard";
import "../styles/projects.css"
import Separator from "../../common/components/Separator";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firebase.js";
import ProjectBanner from "../helpers/ProjectBanner.jsx";



function ProjectPage() {
  const [firebaseData, setFirebaseData] = useState([]);
  const [githubData, setGithubData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from Firebase
        const firebaseQuerySnapshot = await getDocs(collection(db, "projects"));
        const firebaseNewData = firebaseQuerySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFirebaseData(firebaseNewData);

        // Fetch data from GitHub API
        const githubResponse = await fetch(
          "https://api.github.com/users/billelkhanfri/repos"
        );
        const githubData = await githubResponse.json();
        setGithubData(githubData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      console.log(githubData);
    };

    fetchData();
  }, []);
  return (
    <>
      <SettingBox></SettingBox>
      <PageHeader> </PageHeader>
      <div className="project-banner-wrapper">
        <div className="project-container">
          <ProjectBanner></ProjectBanner>
        </div>
      </div>

      <Separator title="PROJETS" color="var(--primary-color)"></Separator>

      <div className="thumbs-container">
        {githubData &&
          githubData.map((item) => (
            <ProjectCard
              key={item.id}
              name={item.name}
              image={firebaseData.find((repo) => repo.name === item.name)?.image}
              id={item.id}
              tech={item.tech}
            />
          ))}
      </div>
    </>
  );
}

export default ProjectPage;
