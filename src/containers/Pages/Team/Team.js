import React from "react";
import Button from "../../button/Button";
import Header from "../../Header/Header";
import "./team.scss";

import GIRL from "./assets/card.png";

function Team() {
  return (
    <div id="team" className="team-block">
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
          <div className="team-button">
            <Button className="btn blue-l" text="Заполнить анкету" />
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
