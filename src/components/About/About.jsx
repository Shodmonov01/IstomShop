import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.scss';

import quality from '../../assets/images/about-quality.png';
import delivery from '../../assets/images/about-delivery.png';
import cooperation from '../../assets/images/about-cooperation.png';

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container" data-aos="fade-up">
      <div className="about" data-aos="fade-up">
        <div className="about-card" data-aos="fade-up">
          <img src={quality} alt="Quality" />
          <h1 className="about-card-title">Качество</h1>
          <p className="about-card-subtitle">
            Высокое качество печати и ультратонкая эластичная пленка
          </p>
        </div>
        <div className="about-card" data-aos="fade-up" data-aos-delay="100">
          <img src={delivery} alt="Delivery" />
          <h1 className="about-card-title">Доставка</h1>
          <p className="about-card-subtitle">
            Отправляем заказы в течение 1-2 рабочих дней, бесплатная доставка от 2000 ₽
          </p>
        </div>
        <div className="about-card" data-aos="fade-up" data-aos-delay="200">
          <img src={cooperation} alt="Cooperation" />
          <h1 className="about-card-title">Сотрудничество</h1>
          <p className="about-card-subtitle">
            Приглашаем к сотрудничеству партнёров по всему миру
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
