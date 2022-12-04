import React from "react";
import "./StartScreen.scss";

import LOGO from "../assets/logo.png";
import Button from "../../../button/Button";

// Приглашаем к сотрудничеству девушек из СПб, заработок от 90 000 в первый месяц

function StartScreen({ onStart }) {
  return (
    <div className="startScreen">
      <div className="startScreen-left">
        <img src={LOGO} />
      </div>
      <div className="startScreen-right">
        <div className="startScreen-right-header">
          <h3>Тест: Какая Ты Госпожа</h3>
        </div>
        <div className="startScreen-right-text">
          <p>
            Привет! Этот тест создан Luna Studio | webcam & cosplay. Он поможет
            тебе определиться с первым образом для стрима. Начнем?)
          </p>
        </div>
        <div className="startScreen-right-button">
          <Button
            onClick={onStart}
            className="btn blue-l"
            text="Пройти тест!"
          />
        </div>
      </div>
    </div>
  );
}

export default StartScreen;
