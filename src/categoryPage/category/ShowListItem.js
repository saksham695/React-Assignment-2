import React from "react";

import "./Category.css";

export default function ShowListItem(props) {
  const { listItems, onClick, backgroundColor } = props;
  return (
    <div
      className="display-list-box"
      onClick={onClick}
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <h4 className="list-text">{listItems.name}</h4>
    </div>
  );
}
