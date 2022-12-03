import React from "react";

function ResultScreen({ result }) {
  return (
    <div>
      <img src={result.src} alt="img" />
      <h1>{result.title}</h1>
      <p>{result.text}</p>
    </div>
  );
}

export default ResultScreen;
