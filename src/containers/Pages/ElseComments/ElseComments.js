import React from "react";
import Header from "../../Header/Header";
import "./elseComments.scss";
import PHOTO_1 from "./assets/photo_1.jpg";
import PHOTO_2 from "./assets/photo_2.jpg";
import PHOTO_3 from "./assets/photo_3.jpg";
import PHOTO_4 from "./assets/photo_4.jpg";
import PHOTO_5 from "./assets/photo_5.jpg";
import PHOTO_6 from "./assets/photo_6.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow, Pagination, EffectFlip, Navigation } from "swiper";

import {} from "swiper";

function ElseComments() {
  return (
    <div id="elseComments" className="elseComments-block">
      <header className="elseComments-header">
        <Header header="Отзывы" subHeader="А вот еще отзывы о работе в Luna" />
        <div className="elseComments-side-info"></div>
      </header>

      <div className="elseComments-block-main">
        <div className="elseComments-block-main-carousel">
          <>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 2,
                depth: 100,
                modifier: 1,
                slideShadows: false,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
              initialSlide={0}
            >
              <SwiperSlide>
                <div className="carousel-item">
                  <div className="carousel-item-bot">
                    <img src={PHOTO_1} alt="photo" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  <div className="carousel-item-bot">
                    <p className="swiper-header">
                      Привет, мы спросили наших модедлей про 3 сильные стороны
                      нашей студии. Вот что они ответили 👉
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  <div className="carousel-item-bot">
                    <img src={PHOTO_2} alt="photo" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  <div className="carousel-item-bot">
                    <p className="swiper-3"> Заботливые.</p>
                    <p className="swiper-3"> Понимающие.</p>
                    <p className="swiper-3"> Честные.</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  <div className="carousel-item-bot">
                    <img src={PHOTO_3} alt="photo" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  <div className="carousel-item-bot">
                    <p>Зарплата всегда вовремя или раньше</p>
                    <p>Веселый коллектив, гибкий график</p>
                    <p>Чумовые корпоративы</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  <div className="carousel-item-bot">
                    <img src={PHOTO_4} alt="photo" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  <div className="carousel-item-bot">
                    <p>Отзывчивые администаторы</p>
                    <p>Гибкий график</p>
                    <p>Разнообразие контента</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  <div className="carousel-item-bot">
                    <img src={PHOTO_5} alt="photo" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  <div className="carousel-item-bot">
                    <div className="carousel-item-bot">
                      <p>Лояльный подход к каждой модели, вам не пофиг</p>
                      <p>Красивый и разнообразный интерьер комнат</p>
                      <p>Расположение</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  <div className="carousel-item-bot">
                    <img src={PHOTO_6} alt="photo" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  <div className="carousel-item-bot">
                    <p>Интерьеры, админы</p>
                    <p>Свободный график</p>
                    <p>Стабильные выплаты</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </>
        </div>
      </div>
    </div>
  );
}

export default ElseComments;
