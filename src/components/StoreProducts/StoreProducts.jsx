import Slider from "react-styled-carousel";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Pagination, PaginationItem } from "@mui/material";
import "@mui/material";

import axios from "axios";

import "./StoreProducts.scss";
import { StoreProductCard } from "../StoreProductCard/StoreProductCard";
import { useNavigate } from "react-router-dom";
import { URL } from "../../hooks/hook";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StoreProducts = ({ selectedSubcategory, searchResults }) => {
  const [productsData, setProductsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const cardsPerPage = 12; // Добавлено определение количества карточек на странице
  const navigate = useNavigate();

  useEffect(() => {
    console.log("searchResults:", searchResults);
  }, [searchResults]);

  useEffect(() => {
    if (selectedSubcategory) {
      axios
        .get(`${URL}/shop/category_product/${selectedSubcategory}`)
        .then((response) => {
          setProductsData(response.data.results);
          setTotalPages(Math.ceil(response.data.count / cardsPerPage));
        })
        .catch((error) => {
          console.error("Error fetching data from API:", error);
        });
    }
  }, [selectedSubcategory]);

  useEffect(() => {
    axios
      .get(`${URL}/shop/product/?page=${currentPage}`)
      .then((res) => {
        setProductsData(res.data.results);
        setTotalPages(Math.ceil(res.data.count / cardsPerPage));
      })
      .catch((err) => console.log(err));
  }, [currentPage]);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const handleCardClick = (id) => {
    const selectedItem = productsData.find((item) => item.id === id);
    if (selectedItem) {
      console.log("Selected Item:", selectedItem);
      // Переход на страницу деталей продукта с использованием navigate
      navigate(`${selectedItem.id}`);
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

  return (
    <div className="container" data-aos="fade-up">



      <div className="store-product" data-aos="fade-up">


        {searchResults.length > 0 && (
          <div className="search-content">
            <h2>Результаты поиска</h2>
            <div className="search-results">
              {searchResults.map((product) => (
                <StoreProductCard
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
          </div>
        )}


        

        <div className="store-product-title">
          <p> Наши </p>
          <p className="istom-text">Новинки!</p>
        </div>

        <div className="store-product-container" data-aos="fade-up">
          {productsData.map((product) => (
            <StoreProductCard
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
        <Pagination
          style={{ paddingBottom: "50px", paddingTop: "50px" }}
          count={totalPages}
          shape="rounded"
          renderItem={(item) => (
            <PaginationItem
              {...item}
              onClick={() => setCurrentPage(item.page)}
            />
          )}
        />

        <div className="store-product-container-mobile" data-aos="fade-up">
          <Slider autoSlide={5000} showDots={true} cardsToShow={1}>
            {productsData.map((product) => (
              <StoreProductCard
                productimg={product.image}
                title={product.name}
                quant={product.price}
                subtitle={product.description}
                key={product.id}
                data-aos="fade-up"
              />
            ))}
          </Slider>
        </div>
      </div>
      <ToastContainer />
      
    </div>
  );
};

export default StoreProducts;
