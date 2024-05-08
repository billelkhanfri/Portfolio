import Education from "../components/Education";
import Separator from "../../common/components/Separator";
import About from "../components/About";
import Footer from "../../common/components/Footer";
import Timeline from "../components/TimeLine";
import AboutBanner from "../components/AboutBanner";

function AboutPage() {
  return (
    <>
      <AboutBanner></AboutBanner>
      <About></About>
        <Separator title="Experience" color="var(--primary-color)"></Separator>
    <div className="vertical-wrapper" >
        <Timeline></Timeline>
        <Separator title="Education" color="var(--bs-blue)"></Separator>
        <Education></Education>
        </div> 
      <Footer></Footer>
    </>
  );
}

export default AboutPage;
