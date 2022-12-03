import React, { useState } from "react";
import Header from "../../Header/Header";
import "./vacancies.scss";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import CARD_1 from "./assets/cards/1.svg";
import CARD_2 from "./assets/cards/2.svg";
import CARD_3 from "./assets/cards/3.svg";
import LINE from "./assets/line.svg";
import Modal from "../../../components/Modal/Modal";
import Button from "../../button/Button";
import KREST from "./assets/x.svg";

function Vacancies() {
  const [modalModel, setModalModel] = useState(false);
  const [modalAdmin, setModalAdmin] = useState(false);
  const [modalAgent, setModalAgent] = useState(false);

  return (
    <div id="vacancies" className="vacancies-block">
      <Modal active={modalModel} setActive={setModalModel}>
        <div className="x-button">
          <img src={KREST} />
        </div>
        <div className="modal-open-window">
          <header>
            <p>Модель</p>
          </header>
          <div className="vacancies-block-main-info">
            <div className="vacancies-block-main-info-line-1">
              <img src={LINE} alt="line" />
            </div>
            <div className="vacancies-block-main-info-button">
              <div className="modal-info">
                <p>Вам от 18 лет</p>
              </div>
            </div>
          </div>
          <div className="vacancies-block-main-info">
            <div className="vacancies-block-main-info-line-2">
              <img src={LINE} alt="line" />
            </div>
            <div className="vacancies-block-main-info-button">
              <div className="modal-info">
                <p>Опрятный внешний вид</p>
                <h4>
                  Чтобы стать топовой вебкам моделью не нужно иметь модельные
                  параметры. В нашем коллективе все девушки уникальные, и у
                  каждой есть свои поклонники среди посетителей онлайн-чатов.
                </h4>
              </div>
            </div>
          </div>
          <div className="vacancies-block-main-info">
            <div className="vacancies-block-main-info-line-3">
              <img src={LINE} alt="line" />
            </div>
            <div className="vacancies-block-main-info-button">
              <div className="modal-info">
                <p>Харизма</p>
                <h4>
                  Общение - основа профессии. Если ты легко находишь подход к
                  людям, умеешь расположить к себе, поддержать беседу, - то
                  быстро найдешь свою аудиторию. Харизматичные девушки легко
                  зарабатывают деньги в none-nude стримах.
                </h4>
              </div>
            </div>
          </div>
          <div className="vacancies-block-main-info">
            <div className="vacancies-block-main-info-line-4">
              <img src={LINE} alt="line" />
            </div>
            <div className="vacancies-block-main-info-button">
              <div className="modal-info">
                <p>Дисциплинированность</p>
                <h4>
                  Моделинг - это серьёзная работа, требующая ответственности; не
                  стоит относится к работе в студии легкомысленно.
                </h4>
              </div>
            </div>
          </div>
          <div className="vacancies-block-main-info">
            <div className="vacancies-block-main-info-line-5">
              <img src={LINE} alt="line" />
            </div>
            <div className="vacancies-block-main-info-button">
              <div className="modal-info">
                <p>Нацеленность на высокий доход</p>
              </div>
            </div>
          </div>
          <Button className="btn blue-l" text="Отправить анкету" />
        </div>
      </Modal>

      <div className="modal-admin">
        <Modal active={modalAdmin} setActive={setModalAdmin}>
          <div className="x-button">
            <img src={KREST} />
          </div>
          <div className="modal-open-window">
            <header>
              <p>Модель</p>
            </header>
            <div className="vacancies-block-main-info">
              <div className="vacancies-block-main-info-line-1">
                <img src={LINE} alt="line" />
              </div>
              <div className="vacancies-block-main-info-button">
                <div className="modal-info">
                  <p>Вам dasdasdлет</p>
                </div>
              </div>
            </div>
            <div className="vacancies-block-main-info">
              <div className="vacancies-block-main-info-line-2">
                <img src={LINE} alt="line" />
              </div>
              <div className="vacancies-block-main-info-button">
                <div className="modal-info">
                  <p>Опрятный внешний вид</p>
                  <h4>Чтобы сsadasdsadsadсетителей онлайн-чатов.</h4>
                </div>
              </div>
            </div>
            <div className="vacancies-block-main-info">
              <div className="vacancies-block-main-info-line-3">
                <img src={LINE} alt="line" />
              </div>
              <div className="vacancies-block-main-info-button">
                <div className="modal-info">
                  <p>Харизма</p>
                  <h4>
                    Общение asdasdsadasdаризматичные девушки легко зарабатывают
                    деньги в none-nude стримах.
                  </h4>
                </div>
              </div>
            </div>
            <div className="vacancies-block-main-info">
              <div className="vacancies-block-main-info-line-4">
                <img src={LINE} alt="line" />
              </div>
              <div className="vacancies-block-main-info-button">
                <div className="modal-info">
                  <p>Дисциплинированность</p>
                  <h4>asdasdsadsadстудии легкомысленно.</h4>
                </div>
              </div>
            </div>
            <div className="vacancies-block-main-info">
              <div className="vacancies-block-main-info-line-5">
                <img src={LINE} alt="line" />
              </div>
              <div className="vacancies-block-main-info-button">
                <div className="modal-info">
                  <p>Нацеленность на высокий доход</p>
                </div>
              </div>
            </div>
            <Button className="btn blue-l" text="Отправить анкету" />
          </div>
        </Modal>
      </div>

      <header className="vacancies-header">
        <Header header="Вакансии" subHeader="Вакансии" />
      </header>
      <div className="vacancies-block-main">
        <div className="vacancies-block-main-card">
          <div className="vacancies-block-main-card-top">
            <div className="card-item">
              <div className="card-item-img">
                <img src={CARD_1} alt="1" />
              </div>
            </div>
          </div>
          <div className="vacancies-block-main-text">
            <p> Модель</p>
          </div>
          <div className="vacancies-block-main-info">
            <div className="vacancies-block-main-info-line">
              <img src={LINE} alt="line" />
            </div>
            <div className="vacancies-block-main-info-button">
              <p onClick={() => setModalModel(true)}>Подробнее</p>
            </div>
          </div>
        </div>
        <div className="vacancies-block-main-card">
          <div className="vacancies-block-main-card-top">
            <div className="card-item">
              <div className="card-item-img">
                <img src={CARD_1} alt="1" />
              </div>
            </div>
          </div>
          <div className="vacancies-block-main-text">
            <p>Администратор</p>
          </div>
          <div className="vacancies-block-main-info">
            <div className="vacancies-block-main-info-line">
              <img src={LINE} alt="line" />
            </div>
            <div className="vacancies-block-main-info-button">
              <p onClick={() => setModalAdmin(true)}>Подробнее</p>
            </div>
          </div>
        </div>
        <div className="vacancies-block-main-card">
          <div className="vacancies-block-main-card-top">
            <div className="card-item">
              <div className="card-item-img">
                <img src={CARD_1} alt="1" />
              </div>
            </div>
          </div>
          <div className="vacancies-block-main-text">
            <p>Агент по поиску моделей</p>
          </div>
          <div className="vacancies-block-main-info">
            <div className="vacancies-block-main-info-line">
              <img src={LINE} alt="line" />
            </div>
            <div className="vacancies-block-main-info-button">
              <p>Подробнее</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vacancies;
