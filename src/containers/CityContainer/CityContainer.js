import React from "react";
import "./cityContainer.scss";

function CityContainer({ text }) {
  return (
    <div className="city">
      <span>{text}</span>
    </div>
  );
}

export default CityContainer;
