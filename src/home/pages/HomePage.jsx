import "../styles/Home.css";
import { useEffect } from "react";
import Separator from "../../common/components/Separator";
import Skills from "../components/Skills";
import Hero from "../components/Hero";
import Competences from "../components/Competences";
import Learning from "../components/Learning";
import Ligne from "../../common/components/Ligne";
import Footer from "../../common/components/Footer";
import LandSlider from "../components/landing/LandSlider";
import Square from "../../common/components/Square";
import Ligne_two from "../../common/components/Ligne_two";
import Ligne_left from "../../common/components/Ligne_left";

function HomePage() {
  useEffect(() => {
    const savedColor = localStorage.getItem("primaryColor");
    if (savedColor) {
      document.documentElement.style.setProperty("--primary-color", savedColor);
    }
  }, []);

  const slide1 =
    "https://firebasestorage.googleapis.com/v0/b/billel-khanfri.appspot.com/o/landing-images%2F01.jpg?alt=media&token=264a1fe8-19fe-49df-80ab-3dd1533b9faf";
  const slide2 =
    "https://firebasestorage.googleapis.com/v0/b/billel-khanfri.appspot.com/o/landing-images%2F05.jpg?alt=media&token=7844695f-792e-45ab-a044-c0597dbcce0a";
  const slide3 =
    "https://firebasestorage.googleapis.com/v0/b/billel-khanfri.appspot.com/o/landing-images%2F02.jpg?alt=media&token=72d01fee-ab8c-4e17-b772-575aae67d690";
  const slide4 =
    "https://firebasestorage.googleapis.com/v0/b/billel-khanfri.appspot.com/o/landing-images%2F03.jpg?alt=media&token=2910eda4-1dae-4db5-8725-c2dbe8a5d507";
  const slides = [slide1, slide2, slide3, slide4];
  return (
    <>
      <LandSlider slides={slides} />
      <div className="section-one">
        <Ligne></Ligne>

        <Hero></Hero>
        <Square></Square>
      </div>
      <div className="section-two">
        <Separator title="SKILLS" color="var(--primary-color)"></Separator>
        <Learning></Learning>
        <Ligne_two></Ligne_two>
      </div>
      <div className="section-three">
        <Separator title="MERN" color="var(--primary-color)"></Separator>

        <Competences></Competences>
        <Square></Square>

        <Ligne_left></Ligne_left>
      </div>
      <div className="section-four">
        <Separator title="IN PROGRESS" color="var(--primary-color)"></Separator>

        <Skills />
      </div>

      <Footer></Footer>
    </>
  );
}

export default HomePage;
