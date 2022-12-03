import React, { useState } from "react";

import "./MainPage.scss";

import LOGO from "./assets/logo-headerNew.svg";
import Play from "../Gifts/assets/Play";
// import VIDEO_BUTTON from "./assets/video-button.svg";
// import ARROW_BUTTON from "./assets/arrow-button.svg";
// import Modal from "../../../components/Modal/Modal";
// import KREST from "./assets/x.svg";

const emptySymb = "  ";
const videoText = `Посмотреть видео ${emptySymb} Посмотреть видео`;

function MainPage() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div id="#" className="main-page">
      <div className="main-page-block">
        <div className="main-page-block-left">
          <div className="main-page-header">
            <h1>Работа вебкам моделью в</h1>
          </div>
          <div className="main-page-logo">
            <img src={LOGO} alt="logo" />
          </div>
          <div className="main-page-subHeader">
            <h3>
              Привет! В нашей студии мы делаем упор на none- <br></br>nude и
              учим зарабатывать не раздеваясь!
            </h3>
          </div>
        </div>
        <div className="main-page-block-right">
          <div className="button-video">
            {/* <img src={VIDEO_BUTTON} alt="video" /> */}
            <section className="button-video-section">
              <h2 class="text">
                <span style={{ transform: "rotate(10deg)" }}>П</span>
                <span style={{ transform: "rotate(20deg)" }}>о</span>
                <span style={{ transform: "rotate(30deg)" }}>с</span>
                <span style={{ transform: "rotate(40deg)" }}>м</span>
                <span style={{ transform: "rotate(50deg)" }}>о</span>
                <span style={{ transform: "rotate(60deg)" }}>т</span>
                <span style={{ transform: "rotate(70deg)" }}>р</span>
                <span style={{ transform: "rotate(80deg)" }}>е</span>
                <span style={{ transform: "rotate(90deg)" }}>т</span>
                <span style={{ transform: "rotate(100deg)" }}>ь</span>
                <span style={{ transform: "rotate(110deg)" }}></span>
                <span style={{ transform: "rotate(120deg)" }}>в</span>
                <span style={{ transform: "rotate(130deg)" }}>и</span>
                <span style={{ transform: "rotate(140deg)" }}>д</span>
                <span style={{ transform: "rotate(150deg)" }}>е</span>
                <span style={{ transform: "rotate(160deg)" }}>о</span>
                <span style={{ transform: "rotate(170deg)" }}></span>
                <span style={{ transform: "rotate(190deg)" }}>П</span>
                <span style={{ transform: "rotate(200deg)" }}>о</span>
                <span style={{ transform: "rotate(210deg)" }}>с</span>
                <span style={{ transform: "rotate(220deg)" }}>м</span>
                <span style={{ transform: "rotate(230deg)" }}>о</span>
                <span style={{ transform: "rotate(240deg)" }}>т</span>
                <span style={{ transform: "rotate(250deg)" }}>р</span>
                <span style={{ transform: "rotate(260deg)" }}>е</span>
                <span style={{ transform: "rotate(270deg)" }}>т</span>
                <span style={{ transform: "rotate(280deg)" }}>ь</span>
                <span style={{ transform: "rotate(290deg)" }}></span>
                <span style={{ transform: "rotate(300deg)" }}>в</span>
                <span style={{ transform: "rotate(310deg)" }}>и</span>
                <span style={{ transform: "rotate(320deg)" }}>д</span>
                <span style={{ transform: "rotate(330deg)" }}>е</span>
                <span style={{ transform: "rotate(340deg)" }}>о</span>
              </h2>
              <span className="button-play">
                <a
                  className="button-play"
                  href="https://www.youtube.com/watch?v=MTnNtSlOfSg&ab_channel=LunaStudio%7CWork%26Cosplay"
                  target="_blank"
                >
                  <Play />
                </a>
              </span>
            </section>
          </div>
          <div className="button-arrow">
            <button className="button-arrow-model">
              <a href="#contactUs">
                <span> &#8595;</span>
              </a>
            </button>
            <span className="button-arrow-text"> Стать моделью</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
