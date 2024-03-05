import { useParams } from "react-router-dom";
import PageHeader from "../../common/components/PageHeader";
import SettingBox from "../../common/components/SettingBox";
import "../styles/projects.css"



function Project() {
    const param = useParams()
    return (
      <>
        <SettingBox></SettingBox>
        <PageHeader> </PageHeader>
        <div className="projectContainer">
          <div>Project id : {param.projectId} <br/> Design en cours ...</div>
        </div>
      </>
    );
}

export default Project