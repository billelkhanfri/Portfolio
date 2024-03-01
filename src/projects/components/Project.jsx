import React from 'react'
import { useParams } from "react-router-dom";
import PageHeader from "../../common/components/PageHeader";
import SettingBox from "../../common/components/SettingBox";



function Project() {
    const param = useParams()
    return (
      <>
        <SettingBox></SettingBox>
        <PageHeader> </PageHeader>
            <div>Project { param.projectId}</div>
      </>
    );
}

export default Project