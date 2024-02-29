import React from "react";
import PageHeader from "../../common/components/PageHeader";
import SettingBox from "../../common/components/SettingBox";
import ProjectCard from "../components/ProjectCard";
import "../styles/projects.css"
import Separator from "../../common/components/Separator";

function ProjectPage() {
  return (
    <>
      <SettingBox></SettingBox>
      <PageHeader> </PageHeader>
      <div className="th-wrapper">
        <Separator title="PROJETS" color="var(--primary-color)"></Separator>

        <div className="thumbs-container">
          <ProjectCard></ProjectCard>
          <ProjectCard></ProjectCard>
          <ProjectCard></ProjectCard>
          <ProjectCard></ProjectCard>
          <ProjectCard></ProjectCard>
          <ProjectCard></ProjectCard>
          <ProjectCard></ProjectCard>
          <ProjectCard></ProjectCard>
          <ProjectCard></ProjectCard>
        </div>
      </div>
    </>
  );
}

export default ProjectPage;
