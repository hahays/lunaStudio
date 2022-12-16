import React from "react";
import Header from "../../Header/Header";
import "./comments.scss";

import { Swiper, SwiperSlide } from "swiper/react";

import SCREEN_1 from "./assets/screen_1.jpg";
import SCREEN_2 from "./assets/screen_2.jpg";
import SCREEN_3 from "./assets/screen_3.jpg";
import SCREEN_4 from "./assets/screen_4.jpg";
import SCREEN_5 from "./assets/screen_5.jpg";
import SCREEN_6 from "./assets/screen_6.jpg";
import SCREEN_7 from "./assets/screen_7.jpg";
import SCREEN_8 from "./assets/screen_8.jpg";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

function Comments() {
  return (
    <div id="comments" className="comments-block">
      <header className="comments-block-header">
        <Header header="Отзывы" subHeader="Отзывы" />
        <div className="comments-block-side-info">
          <p>
            Нам очень приятно было получить такой фидбэк, ведь мы стараемся
            оставаться одной из лучших студий в СПб.
          </p>
        </div>
      </header>

      <div className="comments-block-main">
        <div className="comments-block-main-carousel">
          <>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 100,
                depth: 200,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              navigation={true}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="mySwiper"
              initialSlide={3}
            >
              <SwiperSlide>
                <div className="carousel-item">
                  {/* <div className="carousel-item-top">
                    <img src={PHOTO_ONE} alt="photo" />
                  </div> */}
                  <div className="carousel-item-mid">
                    <div className="header">{/* <p>Настя</p> */}</div>
                    <div className="subHeader">{/* <p>Опыт- 1год</p> */}</div>
                  </div>
                  <div className="carousel-item-bot">
                    <img src={SCREEN_8} alt="screen" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  {/* <div className="carousel-item-top">
                    <img src={PHOTO_ONE} alt="photo" />
                  </div> */}
                  <div className="carousel-item-mid">
                    <div className="header">{/* <p>Настя</p> */}</div>
                    <div className="subHeader">{/* <p>Опыт- 1год</p> */}</div>
                  </div>
                  <div className="carousel-item-bot">
                    <img src={SCREEN_7} alt="screen" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  {/* <div className="carousel-item-top">
                    <img src={PHOTO_ONE} alt="photo" />
                  </div> */}
                  <div className="carousel-item-mid">
                    <div className="header">{/* <p>Настя</p> */}</div>
                    <div className="subHeader">{/* <p>Опыт- 1год</p> */}</div>
                  </div>
                  <div className="carousel-item-bot">
                    <img src={SCREEN_1} alt="screen" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  {/* <div className="carousel-item-top">
                    <img src={PHOTO_ONE} alt="photo" />
                  </div> */}
                  <div className="carousel-item-mid">
                    <div className="header">{/* <p>Настя</p> */}</div>
                    <div className="subHeader">{/* <p>Опыт- 1год</p> */}</div>
                  </div>
                  <div className="carousel-item-bot">
                    <img src={SCREEN_2} alt="screen" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  {/* <div className="carousel-item-top">
                    <img src={PHOTO_ONE} alt="photo" />
                  </div> */}
                  <div className="carousel-item-mid">
                    <div className="header">{/* <p>Настя</p> */}</div>
                    <div className="subHeader">{/* <p>Опыт- 1год</p> */}</div>
                  </div>
                  <div className="carousel-item-bot">
                    <img src={SCREEN_3} alt="screen" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  {/* <div className="carousel-item-top">
                    <img src={PHOTO_ONE} alt="photo" />
                  </div> */}
                  <div className="carousel-item-mid">
                    <div className="header">{/* <p>Настя</p> */}</div>
                    <div className="subHeader">{/* <p>Опыт- 1год</p> */}</div>
                  </div>
                  <div className="carousel-item-bot">
                    <img src={SCREEN_4} alt="screen" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  {/* <div className="carousel-item-top">
                    <img src={PHOTO_ONE} alt="photo" />
                  </div> */}
                  <div className="carousel-item-mid">
                    <div className="header">{/* <p>Настя</p> */}</div>
                    <div className="subHeader">{/* <p>Опыт- 1год</p> */}</div>
                  </div>
                  <div className="carousel-item-bot">
                    <img src={SCREEN_5} alt="screen" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  {/* <div className="carousel-item-top">
                    <img src={PHOTO_ONE} alt="photo" />
                  </div> */}
                  <div className="carousel-item-mid">
                    <div className="header">{/* <p>Настя</p> */}</div>
                    <div className="subHeader">{/* <p>Опыт- 1год</p> */}</div>
                  </div>
                  <div className="carousel-item-bot">
                    <img src={SCREEN_6} alt="screen" />
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

export default Comments;
