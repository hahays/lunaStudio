import React, { useState, useEffect } from "react";
import { GET_SCREEN_INDEX } from "../../utilities/commonUtilis";
import ScrollSerivce from "../../utilities/ScrollService";
import "./navibar.scss";

import LOGO from "./assets/logoLuna.svg";
import SocialNet from "../../components/SocialNet/SocialNet";
import Button from "../button/Button";
import HamburgerMenu from "../../components/HamburgerMenu/HamburgerMenu";
import CityContainer from "../CityContainer/CityContainer";
import classNames from "classnames";
import { HashLink } from "react-router-hash-link";

function Navibar() {
  const [selectedScreen, setSelectedScreen] = useState(0);
  const [activeNav, setActiveNav] = useState("#");

  const updateCurrentScreen = (currentScreen) => {
    if (!currentScreen || !currentScreen.screenInView) return;

    let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
    if (screenIndex < 0) return;

    setSelectedScreen(screenIndex);
  };
  let currentScreenSubscription =
    ScrollSerivce.currentScreenBroadCaster.subscribe(updateCurrentScreen);

  useEffect(() => {
    return () => {
      currentScreenSubscription.unsubscribe();
    };
  }, [currentScreenSubscription]);
  return (
    <nav className="navibar">
      <div className="wrapper"></div>
      <div className="navibar-block">
        <div className="navibar-block-left">
          <a
            href="#"
            onClick={() => setActiveNav("#")}
            className={classNames("header-option", {
              active: selectedScreen === 0,
            })}
          >
            <img className="logo-luna" src={LOGO} alt="logo" />
          </a>
        </div>
        <div className="navibar-block-right">
          <div className="navibar-block-right-info">
            <CityContainer text="г. Санкт-Петербург" />
            <SocialNet />
            <HashLink to="/#contactUs">
              {" "}
              <Button className="btn blue-l-navi" text="Связаться с нами" />
            </HashLink>
          </div>
          <HamburgerMenu />
        </div>
      </div>
    </nav>
  );
}

export default Navibar;
