import React, { useState } from "react";
import "./AboutUs.scss";
import Header from "../../Header/Header";

import LOGO_1 from "./assets/1.svg";
import LOGO_2 from "./assets/2.svg";
import LOGO_3 from "./assets/3.svg";

function AboutUs() {
  return (
    <div id="aboutUs" className="aboutUs-block">
      <Header header="Это для тебя, если" subHeader="Студия Luna" />
      <div className="aboutUs-block-main">
        <div className="main-top">
          <div className="main-top-text">
            <p>
              Если ты чувствуешь себя по-настоящему особенной и готова
              разбогатеть и забыть о прежней жизни - мы в тебе заинтересованы.
              Только будь осторожна: деньги могут вскружить тебе голову, и тебя
              будет трудно остановить… Даже если у тебя нет опыта: это скорее
              плюс, чем проблема! Ведь мы прекрасно обучаем с нуля делать
              уникальные стримы и косплей-шоу, которые собирают тысячи зрителей
              без раздеваний. В вебкам-индустрии мы уже более 10 лет, это дает
              нам огромное преимущество перед студиями-новичками:
              {/* Luna - одна из самых прогрессивных студий в СПБ, и мы постоянно
              находимся в поиске новых лиц. Если ты чувствуешь себя
              по-настоящему особенной и готова разбогатеть и забыть о прежней
              жизни - мы в тебе заинтересованы. Только будь осторожна: деньги
              могут вскружить тебе голову, и тебя будет трудно остановить… */}
            </p>
          </div>
          <div className="main-top-text">
            <p>
              Luna - одна из самых прогрессивных студий в СПБ, и мы постоянно
              находимся в поиске новых лиц.
            </p>
          </div>
        </div>
        <div className="main-bottom">
          <div className="main-bottom-text">
            <img src={LOGO_1} alt="logo" />
            <div className="text">
              <p>
                Важнее всего для нас, чтобы ты чувствовала себя комфортно и
                имела доход, о котором всегда мечтала. Поэтому наша команда
                администраторов -{" "}
                <span className="shadow-word">одна из сильнейших в СПБ.</span>.
              </p>
            </div>
          </div>
          <div className="main-bottom-text">
            <img src={LOGO_2} alt="logo" />
            <div className="text">
              <p>
                Нам выгодно, чтобы ты зарабатывала{" "}
                <span className="shadow-word">большие деньги</span>, поэтому мы
                обучим тебя тонкостям общения, научим флиртовать
                <span className="shadow-word"> без раздеваний</span>.
              </p>
            </div>
          </div>
          <div className="main-bottom-text">
            <img src={LOGO_3} alt="logo" />
            <div className="text">
              <p>
                Чтобы тебе было приятно находиться на работе у нас{" "}
                <span className="shadow-word"> просторные гримерки</span> и 23
                комнаты с <span className="shadow-word"> индивидуальным</span>{" "}
                дизайнерским ремонтом.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-girl"></div>
    </div>
  );
}

export default AboutUs;
