import React from "react";

export default function ShowDescription(props) {
  const { description } = props;
  return (
    <div
      style={{
        backgroundColor: "yellow",
        height: "38%",
        marginLeft: "10%",
        marginTop: "2%",
        width: "53%",
      }}
    >
      <h1>DESCRIPTION</h1>
      <h2 style={{ padding: "10%" }}>{description}</h2>
    </div>
  );
}
