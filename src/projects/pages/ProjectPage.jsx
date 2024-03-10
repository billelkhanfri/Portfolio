import PageHeader from "../../common/components/PageHeader";
import SettingBox from "../../common/components/SettingBox";
import ProjectCard from "../components/ProjectCard";
import "../styles/projects.css";
import Separator from "../../common/components/Separator";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firebase.js";
import ProjectBanner from "../helpers/ProjectBanner.jsx";
import Loader from "../helpers/Loader.jsx";
import Ligne_left from "../../common/components/Ligne_left";
import Square from "../../common/components/Square";
import DescriptionReverted from "../../common/components/DescriptionReverted.jsx";
import API from "../../images/api.jpg";
import Footer from "../../common/components/Footer";

function ProjectPage() {
  const [firebaseData, setFirebaseData] = useState([]);
  const [githubData, setGithubData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };
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

        const accessToken = import.meta.env.VITE_GIT_ACCESS;
        const githubResponse = await fetch(
          "https://api.github.com/users/billelkhanfri/repos",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const githubData = await githubResponse.json();
        setGithubData(githubData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
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
      <div className="custom-container">
        {" "}
        <DescriptionReverted
          title={"API"}
          image={API}
          description={
            "Ce composant est une page qui affiche une liste de projets récupérés à partir de Firebase et GitHub pour créer une interface utilisateur complète. Les données sont récupérées de Firebase et GitHub via des appels d'API, puis affichées dynamiquement sur la page à l'aide de la logique de rendu conditionnel basée sur l'état de chargement "
          }
        ></DescriptionReverted>
        <Ligne_left></Ligne_left>
      </div>
      <Separator title="PROJETS" color="var(--primary-color)"></Separator>
      <Square></Square>
      {loading ? (
        <Loader></Loader>
      ) : (
        <>
          <div className="search-demo">
            <label htmlFor="search">Recherche avec lettre incluse (Demo)</label>
            <input
              type="search"
              name="search"
              id="search"
              onChange={handleSearch}
            />
          </div>{" "}
          <div className="thumbs-container">
            {githubData &&
              githubData
                .filter((item) => {
                  if (search.trim() === "") {
                    return true;
                  } else {
                    return item.name
                      .toLowerCase()
                      .includes(search.toLowerCase());
                  }
                })
                .map((item) => (
                  <ProjectCard
                    key={item.id}
                    name={item.name}
                    image={
                      firebaseData.find((repo) => repo.name === item.name)
                        ?.image
                    }
                    id={item.id}
                    date={item.created_at}
                    url={item.html_url}
                    languages={item.languages_url}
                  />
                ))}
            {githubData &&
              githubData.filter((item) =>
                item.name.toLowerCase().includes(search.toLowerCase())
              ).length === 0 && (
                <div className="no-results-message">Aucun Projet trouvé</div>
              )}
          </div>
        </>
      )}
      <Footer></Footer>{" "}
    </>
  );
}

export default ProjectPage;
