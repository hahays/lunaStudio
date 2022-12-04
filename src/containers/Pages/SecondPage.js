import React from "react";
import ScrollToTop from "../../utilities/ScrollToTop";
import CotactUs from "./ContactUs/CotactUs";
import Gifts from "./Gifts/Gifts";
import Vacancies from "./Vacancies/Vacancies";

function SecondPage() {
  return (
    <>
      <ScrollToTop />
      <Vacancies />
      <Gifts />
      <CotactUs />
    </>
  );
}

export default SecondPage;
