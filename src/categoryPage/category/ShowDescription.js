import React from "react";

import "./Category.css";

export default function ShowDescription(props) {
  const { description } = props;
  return (
    <div className="description-wrapper">
      <h1>DESCRIPTION</h1>
      <h2 style={{ padding: "10%" }}>{description}</h2>
    </div>
  );
}
