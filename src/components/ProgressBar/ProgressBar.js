import React from "react";
import "./progressBar.scss";

function ProgressBar({ question }) {
  console.log(question);
  return (
    <div className="progress-bar-block">
      <div className="progress-bar-title">
        <span>Готово:</span>
        <span className="progress-bar-tooltip">{question * 16}%</span>
        <div className="progress-bar-main">
          <span
            className="progress-bar-main-per-title"
            style={{ width: `${question * 16}%` }}
          ></span>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
