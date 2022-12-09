import React, { useState } from "react";
import Header from "../../Header/Header";
import "./gifts.scss";

import CARD_ONE from "./assets/card_one_m.png";
import CARD_TWO from "./assets/card_two_m.png";
import CARD_THREE from "./assets/card_three_m.png";
import PLAY from "./assets/play.svg";
import Play from "./assets/Play";
import Modal from "../../../components/Modal/Modal";

function Gifts() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div id="gifts" className="gifts-block">
      <Modal active={modalActive} setActive={setModalActive}>
        <div className="gifts-page-modal">
          <div className="gifts-page-modal-x">
            <button
              onClick={() => {
                setModalActive(false);
              }}
            >
              {/* <img src={KREST} /> */}
            </button>
          </div>
          <div className="aboutUs-page-modal-video">
            <iframe
              width="455"
              height="809"
              src="https://www.youtube.com/embed/5s3SJwcli6s"
              title="Какой подарок от руководства понравится каждой сотруднице? #shorts #model #modelagency"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </Modal>
      <header className="answers-block-header">
        <Header header="С любовью" subHeader="Подарки" />
        <div className="answers-block-header-side-info">
          <p>
            Каждое 10-е число месяца модели, которые вошли в топ-15, получают
            подарки!
          </p>
        </div>
      </header>
      <div className="gifts-block-cards">
        <div className="gifts-card">
          <div className="gifts-card-item">
            <div className="card-item-img">
              <img src={CARD_ONE} alt="card" />
            </div>
            <div className="card-item-text">
              <p className="text-1">Сертификаты в СПА/на лазерную эпиляцию</p>
            </div>
          </div>
        </div>
        <div className="gifts-card">
          <div className="gifts-card-item">
            <div className="card-item-img">
              <img src={CARD_TWO} alt="card" />
            </div>
            <div className="card-item-text">
              <p className="text-2">
                Сертификаты на ноготочки/ресницы в топовые студии города
              </p>
            </div>
          </div>
        </div>
        <div className="gifts-card">
          <div className="gifts-card-item">
            <div className="card-item-img">
              <img src={CARD_THREE} alt="card" />
            </div>
            <div className="card-item-text">
              <p className="text-3">
                Сертификаты в солярий/на косметику/сертификаты modi
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="gifts-block-video">
        <div className="gifts-block-video-text">
          <p>
            А подарки мы любим оформлять
            <span className="shadow-word"> стильно!</span>
          </p>
        </div>
        <div className="gifts-block-video-button">
          {/* &#10148; */}
          <span className="button-play">
            <a
              onClick={() => {
                setModalActive(true);
              }}
            >
              <Play />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Gifts;
