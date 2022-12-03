import React, { useState } from "react";
import classNames from "classnames";
import "./hamburgerMenu.scss";
import SocialNet from "../SocialNet/SocialNet";
import Button from "../../containers/button/Button";
import CityContainer from "../../containers/CityContainer/CityContainer";

function HamburgerMenu() {
  const [selectedScreen, setSelectedScreen] = useState(0);
  const [activeNav, setActiveNav] = useState("#");
  return (
    <div className="hamburger">
      <div className="hamburger-menu">
        <input className="side-menu" type="checkbox" id="side-menu"></input>
        <label className="hamb" for="side-menu">
          <div className="hamb-new"></div>
          <div className="hamb-line"></div>
        </label>
        <div className="wrapper-nav"></div>
        <nav className="nav">
          <ul className="menu">
            <li>
              <a
                href="#"
                onClick={() => setActiveNav("#")}
                className={classNames("header-option", {
                  active: selectedScreen === 0,
                })}
              >
                Главная
              </a>
            </li>
            <li>
              <a
                href="#whyWeACool"
                onClick={() => setActiveNav("#whyWeACool")}
                className={classNames("header-option", {
                  active: selectedScreen === 1,
                })}
              >
                Почему у нас круто
              </a>
            </li>
            <li>
              <a
                href="#calculator"
                onClick={() => setActiveNav("#calculator")}
                className={classNames("header-option", {
                  active: selectedScreen === 2,
                })}
              >
                Онлайн-калькулятор
              </a>
            </li>
            <li>
              <a
                href="#contactUs"
                onClick={() => setActiveNav("#contactUs")}
                className={classNames("header-option", {
                  active: selectedScreen === 3,
                })}
              >
                Запишись на собеседование
              </a>
            </li>
            <li>
              <a
                href="#aboutUs"
                onClick={() => setActiveNav("#aboutUs")}
                className={classNames("header-option", {
                  active: selectedScreen === 3,
                })}
              >
                О нас
              </a>
            </li>
            <li>
              <a
                href="#team"
                onClick={() => setActiveNav("#team")}
                className={classNames("header-option", {
                  active: selectedScreen === 3,
                })}
              >
                Коллектив
              </a>
            </li>
            <li>
              <a
                href="#comments"
                onClick={() => setActiveNav("#comments")}
                className={classNames("header-option", {
                  active: selectedScreen === 3,
                })}
              >
                Отзывы
              </a>
            </li>
            <li>
              <a
                href="#elseComments"
                onClick={() => setActiveNav("#elseComments")}
                className={classNames("header-option", {
                  active: selectedScreen === 3,
                })}
              >
                Еще отзывы
              </a>
            </li>
            <li>
              <a
                href="#answers"
                onClick={() => setActiveNav("#answers")}
                className={classNames("header-option", {
                  active: selectedScreen === 3,
                })}
              >
                Ответы на вопросы
              </a>
            </li>
            <li>
              <a
                href="#vacancies"
                onClick={() => setActiveNav("#vacancies")}
                className={classNames("header-option", {
                  active: selectedScreen === 3,
                })}
              >
                Вакансии
              </a>
            </li>
            <li>
              <a
                href="#gifts"
                onClick={() => setActiveNav("#gifts")}
                className={classNames("header-option", {
                  active: selectedScreen === 3,
                })}
              >
                Подарки
              </a>
            </li>
            <li>
              <a
                href="#testLuna"
                onClick={() => setActiveNav("#testLuna")}
                className={classNames("header-option", {
                  active: selectedScreen === 3,
                })}
              >
                Тест: Какая ты госпожа
              </a>
            </li>
          </ul>

          <div className="side-info">
            <SocialNet />
          </div>
          <Button className="btn blue-l-navi" text="Связаться с нами" />
          <CityContainer text="г. Санкт-Петербург" />
        </nav>
      </div>
    </div>
  );
}

export default HamburgerMenu;
