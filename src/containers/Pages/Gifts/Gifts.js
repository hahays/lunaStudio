import React from "react";
import Header from "../../Header/Header";
import "./gifts.scss";

import CARD_ONE from "./assets/card_one_m.png";
import CARD_TWO from "./assets/card_two_m.png";
import CARD_THREE from "./assets/card_three_m.png";
import PLAY from "./assets/play.svg";
import Play from "./assets/Play";

function Gifts() {
  return (
    <div id="gifts" className="gifts-block">
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
            А подарки мы любим оформлять{" "}
            <h4 className="shadow-word"> стильно</h4>
          </p>
        </div>
        <div className="gifts-block-video-button">
          {/* &#10148; */}
          <span className="button-play">
            <a>
              <Play />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Gifts;
