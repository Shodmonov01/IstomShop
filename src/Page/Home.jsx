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


function Home() {
  return (
    <>
      <Helmet>
        <title>
        Профессиональные инструменты и оборудование для стоматологов | IstomShop
        </title>
        <meta
          name="description"
          content="IstomShop - У нас вы найдёте большой выбор качетсвенных инструментов и оборудование для стоматологов! Находимся в Москве и Санкт-Петербурге
          "
        />
      </Helmet>
      <div className="container">
        <HomeBanner />
        <About />
        <Service />
        <Products />
        <BannerCarousel />
        <Promotion />
        <PartnersCarousel />
        <Connect />
      </div>
      <ToastContainer />
    </>
  );
}

export default Home;
