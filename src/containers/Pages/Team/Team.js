import React, { useState } from "react";
import Button from "../../button/Button";
import Header from "../../Header/Header";
import "./team.scss";

import GIRL from "./assets/card.png";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Modal from "../../../components/Modal/Modal";

function Team() {
  const [modalActive, setModalActive] = useState(false);
  const navigate = useNavigate();
  return (
    <div id="team" className="team-block">
      <Modal active={modalActive} setActive={setModalActive}>
        <div className="team-page-modal">
          <div className="team-page-modal-x">
            <button
              onClick={() => {
                setModalActive(false);
              }}
            >
              {/* <img src={KREST} /> */}
            </button>
          </div>
          <div className="team-page-modal-video">
            <iframe
              width="100%"
              height="100%"
              src={
                modalActive ? "https://www.youtube.com/embed/jjKkEYtatHg" : ""
              }
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </Modal>
      <Header header="Коллектив" subHeader="Коллектив" />
      <div className="team-block-main">
        <div className="team-block-main-left">
          <div className="team-text">
            Наш коллектив - творческие и яркие девчонки, мы устраиваем
            масштабные костюмированные корпоративы, а еще регулярно проводим
            тематические фотосессии по желанию моделей. Все наши администраторы
            имеют огромный опыт в фото и видеосъемках, а также в создании и
            оформлении контента. Такого тебе точно не предложит ни одна другая
            студия в городе.{" "}
          </div>
          <div className="team-text-mobile">
            <span>
              Наш коллектив - творческие и яркие девчонки, мы устраиваем
              масштабные костюмированные корпоративы, а еще регулярно проводим
              тематические фотосессии по желанию моделей.
            </span>
          </div>
          <div className="team-button">
            <a>
              <Button
                className="btn blue-l play"
                text="Посмотреть видео"
                onClick={() => {
                  setModalActive(true);
                }}
              />
            </a>
            <HashLink to="/#contactUs">
              <Button className="btn blue-l" text="Заполнить анкету" />
            </HashLink>
          </div>
        </div>
        <div className="team-block-main-right">
          <div className="team-card">
            <img src={GIRL} alt="card" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
