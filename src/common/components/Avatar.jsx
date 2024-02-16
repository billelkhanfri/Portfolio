import React from "react";
import "../styles/common.scss";

function Avatar(props) {
  return (
    <div className="avatar">
      <img src={props.imageUrl} alt={props.alt} />
    </div>
  );
}

export default Avatar;
