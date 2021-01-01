import React from "react";
import "./SidebarOption.css";

export default function SidebarOption({ Icon, title, number, selected }) {
  return (
    <div className={`sidebaroption ${selected && "sidebaroption--active"}`}>
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
}
