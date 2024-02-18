import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../src/home/pages/HomePage";
import ProjectPage from "../src/projects/pages/ProjectPage";
import AboutPage from "../src/about/pages/AboutPage";
import ContactPage from "../src/contact/pages/ContactPage";
import "./styles/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/projects" element={<ProjectPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
