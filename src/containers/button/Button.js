import React from "react";
import "./Button.scss";

function Button({ className, text, onClick }) {
  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
}

export default Button;
