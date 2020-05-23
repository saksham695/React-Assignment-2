import React from "react";

export default function ShowDescription(props) {
  console.log(props);
  return (
    <div
      style={{
        height: "38%",
        width: "53%",
        backgroundColor: "yellow",
        marginLeft: "10%",
        marginTop: "2%",
      }}
    >
      <h2 style={{ padding: "10%" }}>{props.description}</h2>
    </div>
  );
}
