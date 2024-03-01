import PageHeader from "../../common/components/PageHeader";
import SettingBox from "../../common/components/SettingBox";
import ProjectCard from "../components/ProjectCard";
import "../styles/projects.css"
import Separator from "../../common/components/Separator";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firebase.js";


function ProjectPage() {
    const [data, setData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const querySnapshot = await getDocs(
            collection(db, "projects")
          );
          const newData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setData(newData);
          
        } catch (error) {
          console.error("Error fetching data from Firebase:", error);
        }
      
      };

      fetchData();
    }, []); 
  return (
    <>
      <SettingBox></SettingBox>
      <PageHeader> </PageHeader>
      <div className="th-wrapper">
        <Separator title="PROJETS" color="var(--primary-color)"></Separator>

        <div className="thumbs-container">
          {data &&
            data.map((item) => (
                <ProjectCard
                key={item.id}
                image={item.image}
                name={item.name}
                id={item.id}
                tech={item.tech}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default ProjectPage;
