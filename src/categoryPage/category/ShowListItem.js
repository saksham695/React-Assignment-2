import React from "react";

export default function ShowListItem(props) {
  const { listItems, onClick, backgroundColor } = props;
  return (
    <div
      style={{
        backgroundColor: backgroundColor,
      }}
      className="display-list-box"
      onClick={onClick}
    >
      <h4 className="list-text">{listItems.name}</h4>
    </div>
  );
}
