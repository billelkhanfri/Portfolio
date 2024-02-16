import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

import "../styles/Home.scss";

function Skills({ value, label }) {
  return (
    <>
      <div className="progress-wrapper">
        <br></br>
        <div className="label-wrapper">
          <span className="label">{label}</span>
          <span className="percentage">{value}%</span>
        </div>
        <ProgressBar
          now={value}
          label={`${value}%`}
          variant="custom"
          className="custom-progress-bar"
        />
      </div>
    </>
  );
}

export default Skills;
