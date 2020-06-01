import React from "react";
import { withRouter } from "react-router-dom";

import "./Button.css";

function ButtonComponent(props) {
  const { buttonStatus, onButtonClick, title } = props;

  const BUTTON_COLOR = buttonStatus ? "grey" : "green";
  return (
    <div>
      <button
        className="button-box"
        disabled={buttonStatus}
        onClick={onButtonClick}
        style={{ backgroundColor: BUTTON_COLOR }}
        type="submit"
      >
        {title}
      </button>
    </div>
  );
}

export default withRouter(ButtonComponent);
