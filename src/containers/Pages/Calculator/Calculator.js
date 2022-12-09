import React, { useState } from "react";
import Header from "../../Header/Header";
import "./calculator.scss";

import LINE from "./assets/line.svg";
import Button from "../../button/Button";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Calculator() {
  const [eng, setEng] = useState("3");
  const [timeDay, setTimeDay] = useState("4");
  const [countDay, setCountDay] = useState("4");

  const sum =
    (Number(eng.split(" ").join("")) + Number(timeDay.split(" ").join(""))) *
    countDay;

  const sumForYear =
    (Number(eng.split(" ").join("")) + Number(timeDay.split(" ").join(""))) *
    countDay;

  const changeEng = (e) => {
    setEng(e.target.value);
  };
  const changeTimeDay = (e) => {
    setTimeDay(e.target.value);
  };
  const changeCountDay = (e) => {
    setCountDay(e.target.value);
  };

  const space = (string) => {
    let firstChar = string.split("")[0];
    return firstChar + " " + string.slice(1);
  };

  const arrEngValues = [
    {
      label: "Базовый",
      value: "3",
    },
    {
      label: "На 4-ку",
      value: "5",
    },
    {
      label: "Разговорный",
      value: "7",
    },
  ];
  return (
    <div id="calculator" className="calculator-block">
      <header className="calculator-header">
        <Header header="Калькулятор" subHeader="Онлайн-калькулятор" />
      </header>
      <div className="calculator-block-main">
        <div className="calculator-block-main-header">
          <p>
            Многие девушки приходят к нам в трудном финансовом положении, но,
            работая в Luna Studio, они быстро закрывают любой кредит.
          </p>
        </div>
        <div className="calculator-block-container">
          <div className="calculator-block-container-radioList">
            <div className="selector-header">
              <p> Знание английского:</p>
            </div>
            <div className="selector">
              <div className="selector-item">
                {arrEngValues.map((item, index) => (
                  <React.Fragment key={item.label}>
                    <input
                      className="selector-item_radio"
                      type="radio"
                      name="eng"
                      id={`eng-radio${index + 1}`}
                      value={item.value}
                      onChange={changeEng}
                      checked={eng === item.value}
                    />
                    <label
                      For={`eng-radio${index + 1}`}
                      className="selector-item_label"
                    >
                      {item.label}
                    </label>
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="selector-header">
              <p> Время смен:</p>
            </div>
            <div className="selector">
              <div className="selector-item">
                <input
                  className="selector-item_radio"
                  type="radio"
                  name="time"
                  id="time-radio1"
                  value="4"
                  onChange={changeTimeDay}
                  checked={timeDay === "4"}
                />
                <label For="time-radio1" className="selector-item_label">
                  Утренняя
                </label>
                <input
                  className="selector-item_radio"
                  type="radio"
                  name="time"
                  id="time-radio2"
                  value="5"
                  onChange={changeTimeDay}
                  checked={timeDay === "5"}
                />
                <label For="time-radio2" class="selector-item_label">
                  Дневная
                </label>

                <input
                  className="selector-item_radio"
                  type="radio"
                  name="time"
                  id="time-radio3"
                  value="7"
                  onChange={changeTimeDay}
                  checked={timeDay === "7"}
                />
                <label For="time-radio3" class="selector-item_label">
                  Ночная
                </label>
              </div>
            </div>
            <div className="selector-header">
              <p> Смен в неделю:</p>
            </div>
            <div className="selector">
              <div className="selector-item">
                <input
                  className="selector-item_radio"
                  type="radio"
                  name="day"
                  id="day-radio1"
                  value="4"
                  onChange={changeCountDay}
                  checked={countDay === "4"}
                />
                <label For="day-radio1" className="selector-item_label">
                  4
                </label>
                <input
                  className="selector-item_radio"
                  type="radio"
                  name="day"
                  id="day-radio2"
                  value="5"
                  onChange={changeCountDay}
                  checked={countDay === "5"}
                />
                <label For="day-radio2" class="selector-item_label">
                  5
                </label>

                <input
                  className="selector-item_radio"
                  type="radio"
                  name="day"
                  id="day-radio3"
                  value="6"
                  onChange={changeCountDay}
                  checked={countDay === "6"}
                />
                <label For="day-radio3" class="selector-item_label">
                  6
                </label>
              </div>
            </div>
          </div>
          <div className="calculator-block-container-labelList">
            <div className="labelList-header">
              <p>Итого твой заработок: </p>
            </div>
            <div className="label-list-container">
              <div className="label-list-container-left">
                <p>В неделю:</p>
                <h1>{sum} 000 ₽</h1>
              </div>
              <div className="label-list-container-right">
                <img src={LINE} alt="line" />
              </div>
            </div>
            <div className="label-list-container">
              <div className="label-list-container-left">
                <p>В месяц:</p>
                <h1>{sum * 4} 000 ₽</h1>
              </div>
              <div className="label-list-container-right">
                <img src={LINE} alt="line" />
              </div>
            </div>
            <div className="label-list-container">
              <div className="label-list-container-left">
                <p>В год:</p>
                <h1>{space(String(sumForYear * 4 * 12))} 000 ₽</h1>
              </div>
              <div className="label-list-container-right">
                <img src={LINE} alt="line" />
              </div>
            </div>
          </div>
          <div className="calculator-block-container-button">
            <Button className="btn blue-l" text="Начни зарабатывать" />
          </div>
        </div>
        <div className="calculator-block-button">
          <HashLink to="#contactUs">
            <Button className="btn blue-l" text="Начни зарабатывать" />
          </HashLink>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
