import React, { useState, useEffect } from "react";
import "./DetailCard.scss";

function DetailCard({
  image,
  addToCart,
  name,
  price,
  images_set,
  firm,
  manufactured_city,
  created_at,
  main_category_name,
}) {
  // Get quantity from local storage or default to 1
  const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingProduct = existingCart.find((item) => item.name === name);
  const initialQuant = existingProduct ? existingProduct.quantity : 1;

  const [quant, setQuant] = useState(initialQuant);
  const [localQuant, setLocalQuant] = useState(initialQuant);

  const handleAddToCart = () => {
    addToCart({
      image,
      price,
      name,
      quant: localQuant,
      firm,
      manufactured_city,
      created_at,
      main_category_name,
    });

    // Update quantity in localStorage
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = existingCart.findIndex(
      (item) => item.name === name
    );

    if (existingProductIndex !== -1) {
      existingCart[existingProductIndex].quantity = localQuant;
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));
  };

  const handleIncreaseQuant = () => {
    setQuant(quant + 1);
    setLocalQuant(quant + 1);
  };

  const handleDecreaseQuant = () => {
    if (quant > 1) {
      setQuant(quant - 1);
      setLocalQuant(quant - 1);
    }
  };

  useEffect(() => {
    setLocalQuant(quant);
  }, [quant]);

  return (
    <div className="container">
      <div className="detailcard">
        <div className="detailcard-gallery">
          <div className="photo-gallery__thumbnails">
            <img className="photo-gallery__thumbnail" src={images_set} alt="" />
            <img className="photo-gallery__thumbnail" src={images_set} alt="" />
            <img className="photo-gallery__thumbnail" src={images_set} alt="" />
          </div>
          <div className="photo-gallery__main">
            <img className="photo-gallery__main-photo" src={image} alt="" />
          </div>
        </div>

        <div className="detailcard-info">
          <div className="detailcard-info__details">
            <p className="detailcard-info__discount">Скидка</p>
            <p className="detailcard-info__name">{name}</p>
            <div className="detailcard-info__price istom-text">{price} ₽</div>
            <div className="detailcard-info__brand">Фирма: {firm}</div>
            <div className="detailcard-info__country">
              Страна: {manufactured_city}
            </div>



            <div className="quantity-controls cartcard-quan">
              <button className="quantity-button" onClick={handleDecreaseQuant}>
                -
              </button>
              <p className="quantity-text">{localQuant}</p>
              <button className="quantity-button" onClick={handleIncreaseQuant}>
                +
              </button>
            </div>


            
            <button
              onClick={handleAddToCart}
              className="detailcard-info__addToCart istom-btn"
            >
              В корзину
            </button>
            <div className="detailcard-info__article">
              Артикул: {created_at}
            </div>
            <div className="detailcard-info__category">
              Категория: {main_category_name}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailCard;
