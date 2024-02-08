import Slider from "react-styled-carousel";

import "./PartnersCarousel.scss";

import partner1 from "../../assets/images/partner1.png";
import partner2 from "../../assets/images/partner2.png";
import partner3 from "../../assets/images/partner3.png";
import partner4 from "../../assets/images/partner4.png";
import partner5 from "../../assets/images/partner5.png";
import partner6 from "../../assets/images/partner6.png";

export const PartnersCarousel = () => {
  return (
    <>
      <div className="container">
        <div className="partnerscarousel">
          <div className="partner-title">
            <p>Наши</p>
            <p className="istom-text">партнёры</p>
          </div>

          <div className="partnercarousel-max">
            <Slider
              autoSlide={5000}
              showArrows={false}
              showDots={false}
              cardsToShow={4}
            >
              <div className="partner-card">
                <img src={partner1} alt="" className="partner-img" />
              </div>

              <div className="partner-card">
                <img src={partner2} alt="" className="partner-img" />{" "}
              </div>

              <div className="partner-card">
                <img src={partner3} alt="" className="partner-img" />{" "}
              </div>

              <div className="partner-card">
                <img src={partner4} alt="" className="partner-img" />{" "}
              </div>

              <div className="partner-card">
                <img src={partner5} alt="" className="partner-img" />{" "}
              </div>

              <div className="partner-card">
                <img src={partner6} alt="" className="partner-img" />{" "}
              </div>
            </Slider>
          </div>
          <div className="partnercarousel-min">
            <Slider
              autoSlide={5000}
              showArrows={false}
              showDots={false}
              cardsToShow={1}
            >
              <div className="partner-card">
                <img src={partner1} alt="" className="partner-img" />
              </div>

              <div className="partner-card">
                <img src={partner2} alt="" className="partner-img" />{" "}
              </div>

              <div className="partner-card">
                <img src={partner3} alt="" className="partner-img" />{" "}
              </div>

              <div className="partner-card">
                <img src={partner4} alt="" className="partner-img" />{" "}
              </div>

              <div className="partner-card">
                <img src={partner5} alt="" className="partner-img" />{" "}
              </div>

              <div className="partner-card">
                <img src={partner6} alt="" className="partner-img" />{" "}
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};
