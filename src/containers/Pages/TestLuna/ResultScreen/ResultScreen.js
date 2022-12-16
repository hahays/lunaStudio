import React from "react";
import "./resultScreen.scss";
import { HashLink } from "react-router-hash-link";

function ResultScreen({ result, onClick }) {
  return (
    <div className="result-screen-block">
      <div className="result-screen-main">
        <div className="result-screen-main-image">
          <img src={result.src} alt="img" />
        </div>
        <div className="result-screen-main-title">
          <h1>{result.title}</h1>
        </div>
        <div className="result-screen-main-text">
          <p>{result.text}</p>
        </div>
        <div className="form-block-main">
          <div className="form-block-text">
            <h3>
              Спасибо за прохождение нашего теста! Если Вам интересна эта
              работа, то заполните форму.
            </h3>
          </div>
          <div className="form-block-button">
            <button onClick={onClick} className="button-again">
              Попробовать снова
            </button>
            {/* <a href="/test">
              {" "}
              <button className="button-again">Попробовать снова</button>
            </a> */}
            <HashLink to="/#contactUs">
              {" "}
              <button className="button-form">Заполнить форму</button>
            </HashLink>
          </div>
          {/* <CotactUs /> */}
        </div>
      </div>
    </div>
  );
}

export default ResultScreen;
