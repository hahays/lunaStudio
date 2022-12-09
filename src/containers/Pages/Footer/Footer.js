import React from "react";
import SocialNet from "../../../components/SocialNet/SocialNet";
import CityContainer from "../../CityContainer/CityContainer";
import "./footer.scss";
import DARK_GIFKA from "./assets/Партнерка Best Webcam dark.gif";
import LIGHT_GIFKA from "./assets/Партнерка Best Webcam.gif";

function Footer() {
  return (
    <>
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
        </div>
        <div className="footer-block-gif"></div>
        <div className="footer-block-right">
          <div className="footer-block-mid-gifka">
            <a
              href="https://webcam-best.com/studii/sankt-peterburg/luna-studio/"
              target="_blank"
            >
              <img src={LIGHT_GIFKA} alt="gifka" />
            </a>
          </div>
          <div className="footer-block-right-number">
            <a href="tg://resolve?domain=lunnayprizma" target="_blank">
              <p className="footer-block-right-number-text">
                +7 (911) 139 49 85
              </p>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-block mobile">
        <div className="footer-block-left">
          <CityContainer
            text="г. Санкт-Петербург, м. Садовая
"
          />
        </div>
        <div className="footer-block-right">
          <div className="footer-block-mid-gifka">
            <a
              href="https://webcam-best.com/studii/sankt-peterburg/luna-studio/"
              target="_blank"
            >
              <img src={LIGHT_GIFKA} alt="gifka" />
            </a>
          </div>
          <div className="footer-block-right-number">
            <p className="footer-block-right-number-text">+7 (911) 139 49 85</p>
          </div>
        </div>
        <div className="footer-block-mid">
          <div className="footer-block-mid-social">
            <SocialNet />
          </div>
        </div>
        <div className="footer-block-gif"></div>
      </div>
    </>
  );
}

export default Footer;
