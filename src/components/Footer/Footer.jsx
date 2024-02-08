import logo from "../../assets/images/logo.svg";

import fb from "../../assets/images/facebook-icon.svg";
import tg from "../../assets/images/tg-icon.svg";
import wp from "../../assets/images/wp-icon.svg";



import "./Footer.scss";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="footer">
          <div className="footer-logo">
            <img src={logo} alt="" />
          </div>
          <div className="footer-nav">
            <h1>Навигация</h1>
            <Link to="/store" ><p>Магазин</p></Link>
            <Link to="/delivery" ><p>Оплата и доставка</p></Link>
            <Link to="/about" ><p>О нас</p></Link>
            <Link to="/contacts" ><p>Контакты</p></Link>
            
            
            
            
          </div>
          <div className="footer-service">
            <h1>Услуги</h1>
            <p>Стоматологические материалы</p>
            <p>Зуботехнические материалы</p>
            <p>Дезенфекция и стерелизация</p>
            <p>Сотрудничество</p>
          </div>
          <div className="footer-net">
            <p>Мы в социальных сетях</p>
            <div className="net-icons">
              <div className="footer-net-icon">
                <img className="net-icon" src={fb} alt="" />
              </div>
              <div className="footer-net-icon">
                <img className="net-icon" src={tg} alt="" />
              </div>
              <div className="footer-net-icon">
                <img className="net-icon" src={wp} alt="" />
              </div>
            </div>
          <Link to='/contacts'>
          <button className="footer-net-btn istom-btn">Обратная связь</button>

          </Link>
          </div>
        </div>
      </div>
    </>
  );
};
