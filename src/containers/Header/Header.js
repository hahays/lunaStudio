import React from "react";
import "./header.scss";

function Header({ header, subHeader }) {
  return (
    <div className="header-block">
      <h1>{header}</h1>
      <h2>{subHeader}</h2>
    </div>
  );
}

export default Header;
