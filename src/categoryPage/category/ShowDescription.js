import React from "react";

export default function ShowDescription(props) {
  console.log(props);
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
      <h2 style={{ padding: "10%" }}>{props.description}</h2>
    </div>
  );
}
