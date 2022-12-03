import React from "react";
import Header from "../../Header/Header";
import "./elseComments.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";

function ElseComments() {
  return (
    <div id="elseComments" className="elseComments-block">
      <header className="elseComments-header">
        <Header header="Отзывы" subHeader="А вот еще отзовы о работе в Luna" />
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
                stretch: 0,
                depth: 100,
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

export default ElseComments;
