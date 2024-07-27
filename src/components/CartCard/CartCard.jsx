import React, { useState, useEffect } from "react";
import "./CartCard.scss";
import cardcart from "../../assets/images/cardcart.svg";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
export const CartCard = ({
  onCardClick,
  onRemoveFromCart,
  productimg,
  price,
  name,
  subtitle,
  addToCart,
  initialQuant,
  setrealoadData,
  // Pass the initial quantity from the parent component
}) => {
  const [quant, setQuant] = useState(initialQuant);

  const handleIncreaseQuant = () => {
    setQuant(quant + 1);
    updateLocalStorage(quant + 1);
    setrealoadData((prev) => !prev);
  };

  const handleDecreaseQuant = () => {
    if (quant > 1) {
      setQuant(quant - 1);
      updateLocalStorage(quant - 1);
      setrealoadData((prev) => !prev);
    }
  };

  const handleRemoveFromCart = () => {
    onRemoveFromCart(name);
    setrealoadData((prev) => !prev);

  };

  const updateLocalStorage = (newQuant) => {
    // Update the quantity in localStorage
    const updatedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedItems = updatedCart.map((item) => {
      if (item.name === name) {
        return { ...item, quantity: newQuant };
      }
      return item;
    });

    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };

  return (
    <>
      <div className="cartcard">
        <img
          className="cartcard-img"
          onClick={onCardClick}
          src={productimg}
          alt=""
        />
        <p className="cartcard-name">{name}</p>
        <div className="quantity-controls cartcard-quan">
          <button className="quantity-button" onClick={handleDecreaseQuant}>
            -
          </button>
          <p className="quantity-text">{quant}</p>
          <button className="quantity-button " onClick={handleIncreaseQuant}>
            +
          </button>
        </div>
        <p className="cartcard-subtitle">{subtitle}</p>
        <div className="cartcard-bottom">
          <div className="cartcard-price">
            <p className="card-price-text">Цена</p>
            <p className="istom-text">{price} ₽</p>
          </div>
          <button
            className="remove-from-cart-button istom-btn"
            onClick={handleRemoveFromCart}
          >
            {/* <img src={cardcart} alt="" /> */}
            <DeleteOutlinedIcon style={{ color: "white" }} />
          </button>
        </div>
      </div>
    </>
  );
};
