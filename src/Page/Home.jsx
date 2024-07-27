import React from "react";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import About from "../components/About/About";
import Service from "../components/Service/Service";
import Products from "../components/Products/Products";
import { BannerCarousel } from "../components/BannerCarousel/BannerCarousel";
import { Promotion } from "../components/Promotion/Promotion";
import { PartnersCarousel } from "../components/PartnersCarousel/PartnersCarousel";
import Connect from "../components/Connect/Connect";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { useEffect } from "react";
import ReactLoading from "react-loading";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Эмуляция задержки загрузки страницы
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1500);

    // Очистка таймера при размонтировании компонента
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Профессиональные инструменты и оборудование для стоматологов |
          IstomShop
        </title>
        <meta
          name="description"
          content="IstomShop - У нас вы найдёте большой выбор качетсвенных инструментов и оборудование для стоматологов! Находимся в Москве и Санкт-Петербурге
          "
        />
      </Helmet>

      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <ReactLoading
            type={"balls"}
            color={"#FFB224"}
            height={100}
            width={100}
          />
        </div>
      ) : (
        <div className="container">
          <HomeBanner />
          <About />
          <Service />
          <Products />
          <BannerCarousel />
          <Promotion />
          <PartnersCarousel />
          <Connect />
          <ToastContainer />
        </div>
      )}
    </>
  );
}

export default Home;
