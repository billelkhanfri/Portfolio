import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../src/home/pages/HomePage";
import ProjectPage from "../src/projects/pages/ProjectPage";
import AboutPage from "../src/about/pages/AboutPage";
import ContactPage from "../src/contact/pages/ContactPage";
import Project from "../src/projects/components/Project";
import SettingBox from "../src/common/components/SettingBox";
import PageHeader from "../src/common/components/PageHeader";

import "./styles/main.css";

function App() {
  return (
    <>
      <SettingBox> </SettingBox>
      <BrowserRouter>
        <PageHeader></PageHeader>

        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/projects" element={<ProjectPage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/project/:projectId" element={<Project />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
