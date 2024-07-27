import { ProductCard } from "../ProductCard/ProductCard";
import amir from "../../assets/images/img2.png";
// import Slider from "react-styled-carousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from 'react';
import AOS from 'aos';

import "./Analog.scss";
import { useNavigate } from "react-router-dom";
import { useGetThreeProducts } from "../../hooks/hook";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Analog = () => {

  const navigate = useNavigate()

  useEffect(() => {
    AOS.init();
  }, []);



  const handleClickToCard = (product) => {
    // Получение существующих данных корзины из localStorage или инициализация пустого массива
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
  
    // Проверка, есть ли товар с таким id уже в корзине
    const existingProductIndex = existingCart.findIndex((item) => item.id === product.id);
  
    if (existingProductIndex !== -1) {
      // Если товар уже есть в корзине, увеличиваем количество
      existingCart[existingProductIndex].quantity += 1;
      toast.info('Товар добавлен в корзину', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      // Если товара с таким id еще нет в корзине, добавляем его
      existingCart.push({ ...product, quantity: 1 });
      toast.success('Товар добавлен в корзину', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  
    // Сохранение обновленных данных корзины в localStorage
    localStorage.setItem("cart", JSON.stringify(existingCart));
  
    console.log("Товар добавлен в корзину:", product);
  };


  const [productsData, setProductsData] = useState([]);

  const handleCardClick = (id) => {
    const selectedItem = productsData.find((item) => item.id === id);
    if (selectedItem) {
      console.log("Selected Item:", selectedItem);
      navigate(`/store/${selectedItem.id}`);
    } else {
      console.log("Item not found");
    }
  };

  useGetThreeProducts(setProductsData)


  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Показывать стрелки
  };

  return (
    <>
      <div className="container" data-aos="fade-up">
        <div className="promotion" data-aos="fade-up">
          <div className="promotion-title" data-aos="fade-up">
            <p> Наши </p>
            <p className="istom-text">Акции!</p>
          </div>

          <div className="promotion-container" data-aos="fade-up">
          {productsData.map((product) => (
            <ProductCard
              productimg={product.image}
              name={product.name}
              quant={product.quantity}
              price={product.price}
              subtitle={product.description}
              key={product.id}
              onCardClick={() => handleCardClick(product.id)}
              addToCart={() => handleClickToCard(product)}
              data-aos="fade-up"
            />
          ))}
          </div>

          <div className="promotion-container-mobile" data-aos="fade-up">
            <Slider {...settings}>

            {productsData.map((product) => (
            <ProductCard
              productimg={product.image}
              name={product.name}
              quant={product.quantity}
              price={product.price}
              subtitle={product.description}
              key={product.id}
              onCardClick={() => handleCardClick(product.id)}
              addToCart={() => handleClickToCard(product)}
              data-aos="fade-up"
            />
          ))}
          </Slider>
        </div>
        </div>
      </div>
    </>
  );
};
