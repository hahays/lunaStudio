import React from "react";
import "./AboutUs.scss";
import Header from "../../Header/Header";

import LOGO_1 from "./assets/1.svg";
import LOGO_2 from "./assets/2.svg";
import LOGO_3 from "./assets/3.svg";
import BUTTON_PLAY from "./assets/buttonPlay.svg";
import ButtonPlay from "./ButtonPlay";
import ButtonPlays from "./buttonPlays/ButtonPlays";

function AboutUs() {
  return (
    <div id="aboutUs" className="aboutUs-block">
      <Header header="История студии" subHeader="О нас" />
      <div className="aboutUs-block-main">
        <div className="button-play">
          {/* <ButtonPlays /> */}
          <a
            target="_blank"
            href="https://www.youtube.com/watch?v=MTnNtSlOfSg&t=2s&ab_channel=LunaStudio%7CWork%26Cosplay"
          >
            {" "}
            <img src={BUTTON_PLAY} />
          </a>
        </div>
        <div className="main-top">
          <div className="main-top-text">
            <p>
              Luna - одна из самых прогрессивных студий в СПБ, и мы постоянно
              находимся в поиске новых лиц. Если ты чувствуешь себя
              по-настоящему особенной и готова разбогатеть и забыть о прежней
              жизни - мы в тебе заинтересованы. Только будь осторожна: деньги
              могут вскружить тебе голову, и тебя будет трудно остановить…
            </p>
          </div>
          <div className="main-top-text">
            <p>
              Даже если у тебя нет опыта: это скорее плюс, чем проблема! Ведь мы
              прекрасно обучаем с нуля делать уникальные стримы и косплей-шоу,
              которые собирают тысячи зрителей без раздеваний. В
              вебкам-индустрии мы уже более 10 лет, это дает нам огромное
              преимущество перед студиями-новичками:
            </p>
          </div>
        </div>
        <div className="main-bottom">
          <div className="main-bottom-text">
            <img src={LOGO_1} alt="logo" />
            <div className="text">
              <p>
                Важнее всего для нас, чтобы ты чувствовала себя комфортно и
                имела доход, о котором всегда мечтала. Поэтому в наш коллектив
                попадают не все, а команда наших администраторов -{" "}
                <span className="shadow-word">одна из сильнейших в СПБ</span>.
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
                Мы хотим, чтобы тебе было приятно находиться на работе, поэтому
                наша <span className="shadow-word"> двухэтажная студия</span>{" "}
                находится в самом сердце Санкт-Петербурга. У нас просторные
                комнаты, <span className="shadow-word"> огромные гримерки</span>{" "}
                и индивидуальный дизайнерский ремонт в каждой из 23 комнат.
                Масштабы студии действительно тебя поразят!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-girl">
        <img src={BUTTON_PLAY} alt="button" />
      </div>
    </div>
  );
}

export default AboutUs;
