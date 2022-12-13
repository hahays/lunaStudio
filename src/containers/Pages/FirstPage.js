import React from "react";
import ScrollToTop from "../../utilities/ScrollToTop";
import AboutUs from "./AboutUs/AboutUs";
import Answers from "./Answers/Answers";
import Calculator from "./Calculator/Calculator";
import Comments from "./Comments/Comments";
import CotactUs from "./ContactUs/CotactUs";
import ElseComments from "./ElseComments/ElseComments";
import MainPage from "./MainPage/MainPage";
import Team from "./Team/Team";
import WhyWeACool from "./WhyWeACool/WhyWeACool";

function FirstPage() {
  return (
    <>
      <ScrollToTop />
      <MainPage />
      <WhyWeACool />
      <Calculator />
      <CotactUs />
      <AboutUs />
      {/* <Team />
      <Comments />
      <ElseComments />
      <Answers /> */}
    </>
  );
}

export default FirstPage;
