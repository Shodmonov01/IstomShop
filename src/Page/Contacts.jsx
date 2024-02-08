import React from "react";
import Connect from "../components/Connect/Connect";
import { Helmet } from "react-helmet";

function Contacts() {
  return (
    <>
      <Helmet>
        <title>Контактная информация магазина | IstomShop</title>
        <meta
          name="description"
          content="IstomShop - Наша контактная информация для консультации! Продажа инструментов и оборудование для стоматологов в МСК и СПБ!
          "
        />
      </Helmet>
      <div className="container">
        <Connect />
      </div>
    </>
  );
}

export default Contacts;
