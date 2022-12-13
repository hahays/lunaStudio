import React from "react";

import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./whyWeACool.scss";
import ANIME_GIRL_S from "./assets/girl-s.png";
import ANIME_GIRL2 from "./assets/animeGIrl2.svg";
import Header from "../../Header/Header";
import ONE from "./assets/cards/1.svg";
import TWO from "./assets/cards/2.svg";
import THREE from "./assets/cards/3.svg";
import FOUR from "./assets/cards/4.svg";
import FIVE from "./assets/cards/5.svg";
import SIX from "./assets/cards/6.svg";

function WhyWeACool() {
  const example = (
    <div key="projects">
      <Swiper
        className="swiper-card-s"
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
      >
        <SwiperSlide>
          <div className="block">
            <div className="card-item">
              <div className="card-item-img">
                <img src={ONE} alt="1" />
              </div>
              <span>Обучение none-nude стримам без full nude раздеваний</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="block">
            <div className="card-item">
              <div className="card-item-img">
                <img src={TWO} alt="2" />
              </div>
              <span>
                Шикарная система мотивации с актуальными подарками (реснички,
                спа, ноготочки и другое) для моделей
              </span>
            </div>
            /
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="block">
            <div className="card-item">
              <div className="card-item-img">
                <img src={THREE} alt="3" />
              </div>
              <span>
                100% гарантия безопасности, возможность менять свой образ, цвет
                волос и цвет глаз
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="block">
            <div className="card-item">
              <div className="card-item-img">
                <img src={FOUR} alt="4" />
              </div>
              <span>
                Высокая процентная ставка по СПб с растущим процентом,
                максимальный процент 65%
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="block">
            <div className="card-item">
              <div className="card-item-img">
                <img src={FIVE} alt="5" />
              </div>
              <span>
                Возможность работать в студии-первооткрывателе трендов в вебкам,
                которые потом используют другие студии
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="block">
            <div className="card-item">
              <div className="card-item-img">
                <img src={SIX} alt="6" />
              </div>
              <span>
                Реально хорошие отзывы от моделей без накрутки и за счет
                профессионализма команды
              </span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );

  return (
    <div id="whyWeACool" className="whyWeACool">
      <div className="whyWeACool-wrapper">
        <Header header="Преимущества" subHeader="Почему у нас классно" />
        <div className="anime-girl">
          <img src={ANIME_GIRL2} alt="anime-girl" />
        </div>
        <div className="cards-list">
          <div className="card-item">
            <div className="card-item-img">
              <img src={ONE} alt="1" />
            </div>
            <span>Обучение none-nude стримам без full nude раздеваний</span>
          </div>
          <div className="card-item">
            <div className="card-item-img">
              <img src={TWO} alt="2" />
            </div>
            <span>
              Шикарная система мотивации с актуальными подарками (реснички, спа,
              ноготочки и другое) для моделей
            </span>
          </div>
          <div className="card-item">
            <div className="card-item-img">
              <img src={THREE} alt="3" />
            </div>

            <span>
              100% гарантия безопасности, возможность менять свой образ, цвет
              волос и цвет глаз
            </span>
          </div>
          <div className="card-item">
            <div className="card-item-img">
              <img src={FOUR} alt="4" />
            </div>
            <span>
              Высокая процентная ставка по СПб с растущим процентом,
              максимальный процент 65%
            </span>
          </div>
          <div className="card-item">
            <div className="card-item-img">
              <img src={FIVE} alt="5" />
            </div>
            <span>
              Возможность работать в студии-первооткрывателе трендов в вебкам,
              которые потом используют другие студии
            </span>
          </div>
          <div className="card-item">
            <div className="card-item-img">
              <img src={SIX} alt="6" />
            </div>
            <span>
              Реально хорошие отзывы от моделей без накрутки и за счет
              профессионализма команды
            </span>
          </div>
        </div>

        <div className="mobile-block">
          <div className="mobile-carousel">
            <div className="carousel">{example}</div>
            <div></div>
          </div>
          <div className="mobile-girl">
            <img src={ANIME_GIRL_S} alt="girl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyWeACool;
