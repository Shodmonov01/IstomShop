import React, { useEffect, useState } from "react";
import { CartCard } from "../components/CartCard/CartCard";
import CartTotal from "../components/CartTotal/CartTotal";
import cart from "../assets/images/cart.svg";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const navigate = useNavigate();

  // const [productsData, setProductsData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [realoadData, setrealoadData] = useState(false);

  useEffect(() => {
    // Получение данных корзины из localStorage
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const handleRemoveFromCart = (itemName) => {
    // Filter out the item with the specified name from the cart
    const updatedCart = cartItems.filter((item) => item.name !== itemName);

    // Update state and localStorage with the new cart
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Проверка наличия товаров в корзине
  const isCartEmpty = cartItems.length === 0;


  const handleCardClick = (id) => {
    const selectedItem = cartItems.find((item) => item.id === id);
    if (selectedItem) {
      console.log("Selected Item:", selectedItem);
      navigate(`/store/${selectedItem.id}`);
    } else {
      console.log("Item not found");
    }
  };
  

  return (
    <>
      <div className="container">
        <div
          className="cartpage"
          style={{
            margin: "50px auto",
            display: "flex",
            justifyContent: "center",
            gap: "45px",
          }}
        >
          {isCartEmpty ? (
            <div style={{ textAlign: "center", margin: "100px" }}>
              <img src={cart} alt="Empty Cart" style={{ width: "100px" }} />
              <p style={{ fontSize: "28px", margin: "25px" }}>
                Корзина пуста. Добавьте товары.
              </p>
            </div>
          ) : (
            <>
              <div className="cartpage-card">
                {cartItems.map((product) => (
                  <CartCard
                    setrealoadData={setrealoadData}
                    productimg={product.image}
                    name={product.name}
                    initialQuant={product.quantity} // Pass the initial quantity
                    price={product.price}
                    subtitle={product.description}
                    key={product.id}
                    onCardClick={() => handleCardClick(product.id)}
                    onRemoveFromCart={handleRemoveFromCart}
                    data-aos="fade-up"
                  />
                ))}
              </div>
              <div>
                <CartTotal realoadData={realoadData} />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default CartPage;
