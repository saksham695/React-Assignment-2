import React from "react";

export default function ShowListItem(props) {
  const { listItems, onClick, backgroundColor } = props;
  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        height: "30%",
        paddingBottom: "2px",
        marginTop: "10%",
      }}
      onClick={onClick}
    >
      <h4 style={{ textAlign: "center", padding: "5%" }}>{listItems.name}</h4>
    </div>
  );
}
