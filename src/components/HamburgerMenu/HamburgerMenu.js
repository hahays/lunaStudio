import React, { useState } from "react";
import classNames from "classnames";
import "./hamburgerMenu.scss";
import SocialNet from "../SocialNet/SocialNet";
import Button from "../../containers/button/Button";
import CityContainer from "../../containers/CityContainer/CityContainer";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

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
              <Link to="/main">Главная</Link>
              {/* <a
                href="#"
                onClick={() => setActiveNav("#")}
                className={classNames("header-option", {
                  active: selectedScreen === 0,
                })}
              >
                Главная
              </a> */}
            </li>
            <li>
              <HashLink to="/#whyWeACool">Почему у нас круто</HashLink>
              {/* <a
                href="#whyWeACool"
                onClick={() => setActiveNav("#whyWeACool")}
                className={classNames("header-option", {
                  active: selectedScreen === 1,
                })}
              >
                Почему у нас круто
              </a> */}
            </li>
            <li>
              <HashLink to="/#calculator">Онлайн-калькулятор</HashLink>
              {/* <a
                href="#calculator"
                onClick={() => setActiveNav("#calculator")}
                className={classNames("header-option", {
                  active: selectedScreen === 2,
                })}
              >
                Онлайн-калькулятор
              </a> */}
            </li>
            <li>
              <HashLink to="/#contactUs">Запишись на собеседование</HashLink>
              {/* <a
                href="#contactUs"
                onClick={() => setActiveNav("#contactUs")}
                className={classNames("header-option", {
                  active: selectedScreen === 3,
                })}
              >
                Запишись на собеседование
              </a> */}
            </li>
            <li>
              <HashLink to="/#aboutUs">О нас</HashLink>
              {/* <a
                href="#aboutUs"
                onClick={() => setActiveNav("#aboutUs")}
                className={classNames("header-option", {
                  active: selectedScreen === 3,
                })}
              >
                О нас
              </a> */}
            </li>
            <li>
              <HashLink to="/#team">Коллектив</HashLink>
              {/* <a
                href="#team"
                onClick={() => setActiveNav("#team")}
                className={classNames("header-option", {
                  active: selectedScreen === 3,
                })}
              >
                Коллектив
              </a> */}
            </li>
            <li>
              <HashLink to="/#comments">Отзывы</HashLink>
              {/* <a
                href="#comments"
                onClick={() => setActiveNav("#comments")}
                className={classNames("header-option", {
                  active: selectedScreen === 3,
                })}
              >
                Отзывы
              </a> */}
            </li>
            <li>
              <HashLink to="/#elseComments">Еще отзывы</HashLink>
              {/* <a
                href="#elseComments"
                onClick={() => setActiveNav("#elseComments")}
                className={classNames("header-option", {
                  active: selectedScreen === 3,
                })}
              >
                Еще отзывы
              </a> */}
            </li>
            <li>
              <HashLink to="/#answers">FAQ</HashLink>
              {/* <a
                href="#answers"
                onClick={() => setActiveNav("#answers")}
                className={classNames("header-option", {
                  active: selectedScreen === 3,
                })}
              >
                FAQ
              </a> */}
            </li>
            <li>
              <Link to="/vacancies">Вакансии и подарки</Link>
              {/* <a
                href="#vacancies"
                onClick={() => setActiveNav("#vacancies")}
                className={classNames("header-option", {
                  active: selectedScreen === 3,
                })}
              >
                Вакансии и подарки
              </a> */}
            </li>

            <li>
              <Link to="/test"> Тест: Какая ты госпожа</Link>
              {/* <a
                href="#testLuna"
                onClick={() => setActiveNav("#testLuna")}
                className={classNames("header-option", {
                  active: selectedScreen === 3,
                })}
              ></a> */}
            </li>
          </ul>

          <div className="side-info">
            <SocialNet />
          </div>
          <HashLink to="/#contactUs">
            {" "}
            <Button className="btn blue-l-navi" text="Связаться с нами" />
          </HashLink>
          <CityContainer text="г. Санкт-Петербург" />
        </nav>
      </div>
    </div>
  );
}

export default HamburgerMenu;
