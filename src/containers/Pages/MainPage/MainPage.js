import React, { useState } from "react";

import "./MainPage.scss";

import LOGO from "./assets/logo-headerNew.svg";
import Play from "../Gifts/assets/Play";
import ButtonPlay from "../AboutUs/ButtonPlay";
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
            <ButtonPlay />
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
