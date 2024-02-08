import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailCard from "../components/DetailCard/DetailCard";
import DetailDesk from "../components/DetailDesk/DetailDesk";
import { Promotion } from "../components/Promotion/Promotion";
import { URL } from "../hooks/hook";

function DetailsPage() {
  const { id } = useParams();

  const [productsData, setProductsData] = useState(null);

  useEffect(() => {
    axios
      .get(`${URL}/shop/product/${id}`)
      .then((res) => {
        setProductsData(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleClickToCard = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = existingCart.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      existingCart[existingProductIndex].quantity += 1;
    } else {
      existingCart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));
    console.log("Товар добавлен в корзину:", product);
  };



  return (
    <>
      <div className="container">
        <div className="details">
          <div>
            {productsData && (
              <>
                <DetailCard
                  image={productsData.image}
                  name={productsData.name}
                  // quant={productsData.quantity}
                  // quant={quant}

                  price={productsData.price}
                  firm={productsData.firm}
                  manufactured_city={productsData.manufactured_city}
                  created_at={productsData.created_at}
                  main_category_name={productsData.category[0].main_category_name}
                  images_set={productsData.images_set[0].image}
                  // addToCart={() => handleClickToCard(productsData)}
                  quant={
                    productsData.quantity ||
                    (existingCartItem && existingCartItem.quantity) || 1
                  }
                  addToCart={() => handleClickToCard(productsData)}
                  // setQuant={setQuant}
                  key={productsData.id}
                  data-aos="fade-up"
                />
              </>
            )}
          </div>
          <div>
            {productsData && <DetailDesk details={productsData} />}
          </div>

          <div style={{ marginBottom: "70px" }}>
            <Promotion />
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailsPage;
