// import Slider from "react-styled-carousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ProductCard } from "../ProductCard/ProductCard";
import axios from "axios";

import "./Products.scss";
import { useNavigate } from "react-router-dom";
import { URL } from "../../hooks/hook";
import { useGetThreeProducts } from "../../hooks/hook";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Products = () => {
  const navigate = useNavigate();

  const [productsData, setProductsData] = useState([]);

  useGetThreeProducts(setProductsData)




  useEffect(() => {
    AOS.init();
  }, []);

  const handleCardClick = (id) => {
    const selectedItem = productsData.find((item) => item.id === id);
    if (selectedItem) {
      console.log("Selected Item:", selectedItem);
      // Переход на страницу деталей продукта с использованием navigate
      navigate(`store/${selectedItem.id}`);
    } else {
      console.log("Item not found");
    }
  };

  
    

  

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
  
  

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Показывать стрелки
  };
  return (
    <div className="container" data-aos="fade-up">
      <div className="product" data-aos="fade-up">
        <div className="product-title">
          <p> Наши </p>
          <p className="istom-text">Новинки!</p>
        </div>

        <div className="product-container" data-aos="fade-up">
          {/* Используйте сохраненные данные для отображения компонентов ProductCard */}
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

        <div className="product-container-mobile" data-aos="fade-up">
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
        <ToastContainer />
      </div>
    </div>
  );
};

export default Products;
