import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HomeBanner.scss";

import leftbg from "../../assets/images/pngwing.svg";
import doctor from "../../assets/images/doctor.png";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container" data-aos="fade-up">
      <div className="homebanner" data-aos="fade-up">
        <div className="homebanner-left" data-aos="fade-right">
          {/* <div className="homebanner-bg" data-aos="fade-up">
            <img src={leftbg} alt="" />
          </div> */}
          <div className="homebanner-title" data-aos="fade-up">
            <p>
              Инструменты для профессиональных
              <p className="istom-text">стоматологов</p>
            </p>
          </div>
          <div className="homebanner-subtitle" data-aos="fade-up">
            <p>
              Обеспечьте свою практику лучшими инструментами от ведущих
              производителей
            </p>
          </div>
          <Link to='/store'>
            <button className="istom-btn homebanner-button" data-aos="fade-up">
              В каталог
            </button>
          </Link>
        </div>
        <div className="homebanner-right" data-aos="fade-down">
          <img src={doctor} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
