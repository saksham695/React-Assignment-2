import React from "react";
import "./Button.css";
export default function ButtonComponent(props) {
  const { title, onButtonClick, buttonStatus } = props;

  const BUTTON_COLOR = buttonStatus ? "grey" : "green";
  return (
    <div className="button-wrapper">
      <button
        onClick={onButtonClick}
        type="submit"
        disabled={buttonStatus}
        className="button-box"
        style={{ backgroundColor: BUTTON_COLOR }}
      >
        {title}
      </button>
    </div>
  );
}
