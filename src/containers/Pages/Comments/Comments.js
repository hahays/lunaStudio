import React from "react";
import Header from "../../Header/Header";
import "./comments.scss";

import { Swiper, SwiperSlide } from "swiper/react";

import PHOTO_ONE from "./assets/photo1.png";
import PHOTO_TWO from "./assets/photo2.png";
import PHOTO_THREE from "./assets/photo3.png";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";

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
                depth: 500,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
              initialSlide={1}
            >
              <SwiperSlide>
                <div className="carousel-item">
                  <div className="carousel-item-top">
                    <img src={PHOTO_ONE} alt="photo" />
                  </div>
                  <div className="carousel-item-mid">
                    <div className="header">
                      <p>Настя</p>
                    </div>
                    <div className="subHeader">
                      <p>Опыт- 1год</p>
                    </div>
                  </div>
                  <div className="carousel-item-bot">
                    <p>
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat sunt nostrud
                      amet. Amet minim mollit non deserunt ullamco est sit
                      aliqua dolor do amet sint. Velit officia consequat duis
                      enim velit mollit. Exercitation veniam consequat sunt
                      nostrud amet.Amet minim mollit non deserunt ullamco est
                      sit aliqua dolor do amet sint. Velit officia consequat
                      duis enim velit mollit.{" "}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  <div className="carousel-item-top">
                    <img src={PHOTO_ONE} alt="photo" />
                  </div>
                  <div className="carousel-item-mid">
                    <div className="header">
                      <p>Настя</p>
                    </div>
                    <div className="subHeader">
                      <p>Опыт- 1год</p>
                    </div>
                  </div>
                  <div className="carousel-item-bot">
                    <p>
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat sunt nostrud
                      amet. Amet minim mollit non deserunt ullamco est sit
                      aliqua dolor do amet sint. Velit officia consequat duis
                      enim velit mollit. Exercitation veniam consequat sunt
                      nostrud amet.Amet minim mollit non deserunt ullamco est
                      sit aliqua dolor do amet sint. Velit officia consequat
                      duis enim velit mollit.{" "}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  <div className="carousel-item-top">
                    <img src={PHOTO_ONE} alt="photo" />
                  </div>
                  <div className="carousel-item-mid">
                    <div className="header">
                      <p>Настя</p>
                    </div>
                    <div className="subHeader">
                      <p>Опыт- 1год</p>
                    </div>
                  </div>
                  <div className="carousel-item-bot">
                    <p>
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat sunt nostrud
                      amet. Amet minim mollit non deserunt ullamco est sit
                      aliqua dolor do amet sint. Velit officia consequat duis
                      enim velit mollit. Exercitation veniam consequat sunt
                      nostrud amet.Amet minim mollit non deserunt ullamco est
                      sit aliqua dolor do amet sint. Velit officia consequat
                      duis enim velit mollit.{" "}
                    </p>
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
