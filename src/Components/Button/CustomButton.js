import React from "react";
import "./CustomButton.css";

const CustomButton = (props) => {
  return (
    <div>
      <button className="custom_button">
        {props.text} &nbsp;{props.icon}
      </button>
    </div>
  );
};

export default CustomButton;
