import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CartTotal.scss";
import { useNavigate } from "react-router-dom";

function CartTotal({ realoadData }) {
  const [cartData, setCartData] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const cartDataFromLocalStorage =
      JSON.parse(localStorage.getItem("cart")) || [];
    setCartData(cartDataFromLocalStorage);
  }, [realoadData]);

  useEffect(() => {
    let newTotalQuantity = 0;
    let newTotalPrice = 0;

    cartData.forEach((item) => {
      newTotalQuantity += item.quantity || 0;
      newTotalPrice += (item.quantity || 0) * item.price;
    });

    setTotalQuantity(newTotalQuantity);
    setTotalPrice(newTotalPrice);
  }, [cartData, formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleOrderSubmit = async () => {
    const orderItems = cartData.map((item) => ({
      product: item.id,
      quantity: item.quantity,
    }));

    const requestData = {
      product_data: orderItems,
      total_price: totalPrice,
      full_name: formData.full_name,
      email: formData.email,
      phone: formData.phone,
    };

    try {
      const response = await axios.post(
        "https://api.istomshop.ru/shop/card/",
        requestData
      );

      console.log("Заказ успешно отправлен:", response.data);

      localStorage.removeItem("cart");
      navigate('/store')
      // Ваши дополнительные действия после успешной отправки заказа
    } catch (error) {
      console.error("Ошибка при отправке заказа:", error);
      // Ваши дополнительные действия в случае ошибки
    }
  };

  return (
    <div className="container">
      <div className="carttotal">
        <p className="carttotal-desk__title">Ваш заказ</p>
        <p className="carttotal-desk__count">Товары: {totalQuantity}</p>
        <p className="carttotal-desk__price">Общая сумма: {totalPrice} руб</p>

        <div className="carttotal-desk__name-input">
          <p>Ваше имя</p>
          <input
            className="connect-name"
            type="text"
            placeholder="Иван Иванов"
            name="full_name"
            value={formData.full_name}
            onChange={handleInputChange}
          />
        </div>

        <div className="carttotal-desk__mail-input">
          <p>Ваша почта</p>
          <input
            className="connect-mail"
            type="email"
            placeholder="ivan@mail.ru"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="carttotal-desk__number-input">
          <p>Ваш номер</p>
          <input
            className="connect-number"
            type="text"
            placeholder="+7(999) 999-9999"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>

        <button
          className="istom-btn carttotal-desk__btn"
          onClick={handleOrderSubmit}
        >
          Оформить заказ
        </button>
      </div>
    </div>
  );
}

export default CartTotal;
