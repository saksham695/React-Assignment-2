import React from "react";

import "./Button.css";

export default function ButtonComponent(props) {
  const { buttonStatus, onButtonClick, title } = props;

  const BUTTON_COLOR = buttonStatus ? "grey" : "green";
  return (
    <div>
      <button
        className="button-box"
        disabled={buttonStatus}
        onClick={() => onButtonClick()}
        style={{ backgroundColor: BUTTON_COLOR }}
        type="submit"
      >
        {title}
      </button>
    </div>
  );
}
