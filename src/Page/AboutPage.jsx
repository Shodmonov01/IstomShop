import React from "react";
import Service from "../components/Service/Service";
import { Helmet } from "react-helmet";

function AboutPage() {
  return (
    <>
      <Helmet>
        <title>
        Информация о нашем магазине | IstomShop
        </title>
        <meta
          name="description"
          content="IstomShop - Актуальная информация о нашем интернет-магазине стоматологического оборудование в Москве и Санкт-Петербурге! Доставка по всей РФ
          "
        />
      </Helmet>
      <div className="container" style={{marginTop:'125px'}}> 
        <Service />
      </div>
    </>
  );
}

export default AboutPage;
