import React from "react";
import "./Category.css";
export default function CategoryHeadings(props) {
  const { name, onClick, backgroundColor } = props;
  return (
    <div
      className="category-heading"
      onClick={onClick}
      style={{ backgroundColor: backgroundColor }}
    >
      <h4 style={{ padding: "10%" }}>{name}</h4>
    </div>
  );
}
