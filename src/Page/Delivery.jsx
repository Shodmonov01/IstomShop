import React from "react";
import About from "../components/About/About";
import { Helmet } from "react-helmet";

function Delivery() {
  return (
    <>
      <Helmet>
        <title>
        Условия оплаты и доставки в нашем магазине для стоматологов! IstomShop
        </title>
        <meta
          name="description"
          content="IstomShop - Ознакомьтесь с нашими условиями оплаты и доставки в нашем магазине! Большой выбор инструментов и оборудование для стоматологов"
        />
      </Helmet>
      <div className="container" style={{ padding: "100px 0" }}>
        <About />
      </div>
    </>
  );
}

export default Delivery;
