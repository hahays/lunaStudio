import React from "react";
import Header from "../../Header/Header";
import "./elseComments.scss";
import PHOTO_1 from "./assets/photo_1.jpg";
import PHOTO_2 from "./assets/photo_2.jpg";
import PHOTO_3 from "./assets/photo_3.jpg";
import PHOTO_4 from "./assets/photo_4.jpg";
import PHOTO_5 from "./assets/photo_5.jpg";
import PHOTO_6 from "./assets/photo_6.jpg";
import PHOTO_7 from "./assets/photo_7.jpg";
import PHOTO_8 from "./assets/photo_8.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper";

import {} from "swiper";

function ElseComments() {
  return (
    <div id="elseComments" className="elseComments-block">
      <header className="elseComments-header">
        <Header header="Модели о Луне" subHeader="Работа в Luna" />
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
              navigation={true}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="mySwiper"
              initialSlide={0}
            >
              <SwiperSlide>
                <div className="carousel-item">
                  <div className="carousel-item-bot">
                    <img src={PHOTO_1} alt="luna-studio" />
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
                    <img src={PHOTO_8} alt="luna-studio" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  <div className="carousel-item-bot side-slide">
                    <p className="swiper-3">
                      Зарплата всегда вовремя или раньше. Веселый коллектив,
                      гибкий график. Чумовые корпоративы.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  <div className="carousel-item-bot">
                    <img src={PHOTO_2} alt="model-1" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  <div className="carousel-item-bot side-slide">
                    <p>
                      Лояльный подход к каждой модели, вам не пофиг. Пышки от
                      Анатолия конечно же!))) Красивый и разнообразный интерьер
                      комнат.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  <div className="carousel-item-bot">
                    <img src={PHOTO_3} alt="model-2" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  <div className="carousel-item-bot side-slide">
                    <p>
                      Расположение студии. Красивый и разнообразный интерьер
                      комнат.
                    </p>
                    <p>
                      Отзывчивее администраторы, гибкий график, разнообразие
                      контента.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  <div className="carousel-item-bot ">
                    <img src={PHOTO_4} alt="model-3" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  <div className="carousel-item-bot side-slide">
                    <p>
                      Кофемашина, чистота, приятный запах, Ди (спасибо тебе за
                      поддержку, ты первый человек в студии , который сказал мне
                      приятные и мотивирующие слова)
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  <div className="carousel-item-bot">
                    <img src={PHOTO_5} alt="model-4" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  <div className="carousel-item-bot side-slide">
                    <p>Дружный коллектив, лояльные админы, зп без задержек</p>
                    <p>
                      Интерьеры, свободный график, админы, стабильные выплаты,
                      подарки лучшим по зп.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  <div className="carousel-item-bot ">
                    <img src={PHOTO_6} alt="model-5" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  <div className="carousel-item-bot side-slide last">
                    <p>
                      Креативность. Заинтересован- ность в заработке модели.
                      Классные админы.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  <div className="carousel-item-bot ">
                    <img src={PHOTO_7} alt="model-6" />
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
