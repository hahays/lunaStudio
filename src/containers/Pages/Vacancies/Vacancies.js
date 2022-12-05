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
import { HashLink } from "react-router-hash-link";

function Vacancies() {
  const [modalModel, setModalModel] = useState(false);
  const [modalAdmin, setModalAdmin] = useState(false);
  const [modalAgent, setModalAgent] = useState(false);

  return (
    <div id="vacancies" className="vacancies-block">
      <div className="modal-model">
        <Modal active={modalModel} setActive={setModalModel}>
          <div className="x-button">
            <button
              onClick={() => {
                setModalModel(false);
              }}
            >
              <img src={KREST} />
            </button>
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
                    Моделинг - это серьёзная работа, требующая ответственности;
                    не стоит относится к работе в студии легкомысленно.
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
            <HashLink to="/#contactUs">
              <Button className="btn blue-l" text="Отправить анкету" />
            </HashLink>
          </div>
        </Modal>
      </div>

      <div className="modal-admin">
        <Modal active={modalAdmin} setActive={setModalAdmin}>
          <div className="x-button">
            <button
              onClick={() => {
                setModalAdmin(false);
              }}
            >
              <img src={KREST} />
            </button>
          </div>
          <div className="modal-open-window">
            <header>
              <p>Администратор</p>
            </header>
            <div className="vacancies-block-main-info">
              <div className="vacancies-block-main-info-line-1">
                <img src={LINE} alt="line" />
              </div>
              <div className="vacancies-block-main-info-button">
                <div className="modal-info">
                  <p>Для девушек от 18 лет</p>
                </div>
              </div>
            </div>
            <div className="vacancies-block-main-info">
              <div className="vacancies-block-main-info-line-2">
                <img src={LINE} alt="line" />
              </div>
              <div className="vacancies-block-main-info-button">
                <div className="modal-info">
                  <p>Опыт работы в сфере вебкам</p>
                  <h4>
                    Если ты уже работала в индустрии вебкам, тебе будет гораздо
                    проще найти общий язык с моделями
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
                  <p>Стрессоустойчивость</p>
                  <h4>
                    Умение решать конфликтные ситуации с холодной головой -
                    очень ценно в профессии руководителя
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
                  <p>Обучаемость</p>
                  <h4>
                    Перед тем, как взять администратора на работу, каждый админ
                    проходит обучение, знакомиться с правилами и особенностями
                    работы в нашей студии
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
                  <p>Знание английского языка</p>
                  <h4>
                    Так как общение в чатах проходит на английском языке,
                    администратору важно хорошо понимать английский язык
                  </h4>
                </div>
              </div>
            </div>
            <div className="vacancies-block-main-info">
              <div className="vacancies-block-main-info-line-6">
                <img src={LINE} alt="line" />
              </div>
              <div className="vacancies-block-main-info-button">
                <div className="modal-info">
                  <p>Коммуникабельность</p>
                  <h4>и чувство юмора</h4>
                </div>
              </div>
            </div>
            <HashLink to="/#contactUs">
              <Button className="btn blue-l" text="Отправить анкету" />
            </HashLink>
          </div>
        </Modal>
      </div>
      <div className="modal-agent">
        <Modal active={modalAgent} setActive={setModalAgent}>
          <div className="x-button">
            <button
              onClick={() => {
                setModalAgent(false);
              }}
            >
              <img src={KREST} />
            </button>
          </div>
          <div className="modal-open-window">
            <header>
              <p>Агент по поиску моделей </p>
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
                  <p>Коммуникабельность</p>
                </div>
              </div>
            </div>
            <div className="vacancies-block-main-info">
              <div className="vacancies-block-main-info-line-3">
                <img src={LINE} alt="line" />
              </div>
              <div className="vacancies-block-main-info-button">
                <div className="modal-info">
                  <p>Желание иметь дополнительный доход</p>
                </div>
              </div>
            </div>
            <div className="vacancies-block-main-info-agent">
              <div className="vacancies-block-main-info">
                <div className="vacancies-block-main-info-button">
                  <div className="modal-info-agent">
                    <h4>
                      Агент занимается поиском и подбором нового персонала. За
                      каждую приведенную девушку студия выплачивает
                      фиксированную сумму: <span>10 000р.</span>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="vacancies-block-main-info">
                <div className="vacancies-block-main-info-button">
                  <div className="modal-info-agent">
                    <h4>
                      Главное условие, чтобы модель, которую вы привели,
                      заработала от 10 000р за первые 5 смен. Условия в нашей
                      студии легко позволяют сделать это. Своевременные выплаты
                      агентских гарантированы.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <HashLink to="/#contactUs">
              <Button className="btn blue-l" text="Отправить анкету" />
            </HashLink>
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
                <img src={CARD_2} alt="1" />
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
                <img src={CARD_3} alt="1" />
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
              <p onClick={() => setModalAgent(true)}>Подробнее</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vacancies;
