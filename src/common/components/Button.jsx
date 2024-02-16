import React from "react";
import "../styles/common.scss";

const Button = ({ text, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  );
};
export default Button;
