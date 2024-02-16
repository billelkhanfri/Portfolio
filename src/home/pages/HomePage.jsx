
import "../styles/Home.scss";
import SettingBox from "../../common/components/SettingBox";
import { useEffect } from "react";
import Separator from "../../common/components/Separator";
import Skills from "../components/Skills";
import Competences from "../components/Competences";
import Learning from "../components/Learning";
//import Ligne from "../../common/components/Ligne";
import Footer from "../../common/components/Footer";
import LandSlider from "../components/landing/LandSlider";



function HomePage() {
  useEffect(() => {
    const savedColor = localStorage.getItem("primaryColor");
    if (savedColor) {
      document.documentElement.style.setProperty("--primary-color", savedColor);
    }
  }, []);

  // const slide1 = "https:rm83.fr/balade/wp-content/uploads/2024/01/les-halles-vue-arriere.jpg"
  const slide1 =
      "https://firebasestorage.googleapis.com/v0/b/khanfri-billel.appspot.com/o/D_Home.png?alt=media&token=ead9e575-824a-4d5c-98eb-164b6afc2422"
;
  const slide2 =
  "https://firebasestorage.googleapis.com/v0/b/khanfri-billel.appspot.com/o/Capture%20d%E2%80%99e%CC%81cran%202024-02-15%20a%CC%80%2014.06.18.PNG?alt=media&token=8c9f50f0-fdbb-4ee8-8643-e9b489b2df65";
  const slide3 =
     "https://firebasestorage.googleapis.com/v0/b/khanfri-billel.appspot.com/o/Capture%20d%E2%80%99e%CC%81cran%202024-02-15%20a%CC%80%2018.45.56.png?alt=media&token=87abc8ab-870b-45c8-b8bf-fe67d6b69a36";
const slide4 =
  "https://firebasestorage.googleapis.com/v0/b/khanfri-billel.appspot.com/o/Capture%20d%E2%80%99e%CC%81cran%202024-02-15%20a%CC%80%2018.51.52.png?alt=media&token=8db37e6b-2c8d-44ef-ba12-2e9e9d4ed0b7";

  const slides = [slide1, slide2, slide3,slide4];
  return (
    <>
      <SettingBox></SettingBox>
      {/* <Banner></Banner> */}
      <LandSlider slides={slides} />

      <Separator title="SKILLS" color="var(--primary-color)"></Separator>
      <Competences></Competences>
      <Learning></Learning>
      {/*<Ligne></Ligne>*/}
      <Separator title="Niveau" color="var(--primary-color)"></Separator>
      <div className="bar-wrapper">
        <Skills value={75} label="HTML" barColor="success" />
        <Skills value={50} label="CSS" barColor="warning" />
        <Skills value={50} label="JavaScript" barColor="danger" />
        <Skills value={40} label="Sass" barColor="danger" />
        <Skills value={50} label="Figma" barColor="warning" />
        <Skills value={40} label="Photoshop" barColor="danger" />
      </div>

      <Footer></Footer>
    </>
  );
}

export default HomePage;
