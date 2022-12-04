import React from "react";
import SocialNet from "../../../components/SocialNet/SocialNet";
import CityContainer from "../../CityContainer/CityContainer";
import "./footer.scss";

function Footer() {
  return (
    <div className="footer-block">
      <div className="footer-block-left">
        <CityContainer
          text="г. Санкт-Петербург, м. Садовая
"
        />
      </div>
      <div className="footer-block-mid">
        <div className="footer-block-mid-social">
          <SocialNet />
        </div>
        <div className="footer-block-mid-gifka"></div>
      </div>
      <div className="footer-block-right">
        <div className="footer-block-right-number">
          <p className="footer-block-right-number-text">+7 (911) 139 49 85</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
