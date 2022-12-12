import React, { useState } from "react";

import "./MainPage.scss";

import LOGO from "./assets/logo-headerNew.svg";
import Play from "../Gifts/assets/Play";
import ButtonPlay from "../AboutUs/ButtonPlay";
import Modal from "../../../components/Modal/Modal";
import KREST from "./assets/x.svg";
import { HashLink } from "react-router-hash-link";
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
      <Modal active={modalActive} setActive={setModalActive}>
        <div className="main-page-modal">
          <div className="main-page-modal-x">
            <button
              onClick={() => {
                setModalActive(false);
              }}
            >
              {/* <img src={KREST} /> */}
            </button>
          </div>
          <div className="main-page-modal-video">
            <iframe
              border="1px solid pink"
              width=" -webkit-fill-available;"
              height="100%"
              src={
                modalActive ? "https://www.youtube.com/embed/wzrqTNLDi8c" : ""
              }
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </Modal>
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
        <div className="button-play">
          {/* <ButtonPlay /> */}
          <button
            onClick={() => {
              setModalActive(true);
            }}
          ></button>
        </div>
        <div className="button-arrow">
          <button className="button-arrow-model">
            <HashLink to="/#contactUs">
              <span> &#8595;</span>
            </HashLink>
          </button>
          <span className="button-arrow-text"> Стать моделью</span>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
