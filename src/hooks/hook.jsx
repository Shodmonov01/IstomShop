export const URL = "https://api.istomshop.ru";
// export const URL = "http://127.0.0.1:8000/";


import { useEffect } from "react";
import axios from "axios";



// export const data = [
//   {
//     img: amir,
//     title: "Перчатки Боксерские",
//     cost: "180.000 uzs",
//     id: 0,
//   },
//   {
//     img: amir,
//     title: "Перчатки Боксерские",
//     cost: "180.000 uzs",
//     id: 0,
//   },
//   {
//     img: amir,
//     title: "Перчатки Боксерские",
//     cost: "180.000 uzs",
//     id: 0,
//   },

// ];

export function useGetThreeProducts(setProductsData) {
  useEffect(() => {
    axios
      .get(`${URL}/shop/product/`)
      .then((res) => {
        // Сохраните данные в состоянии
        setProductsData(res.data.results.slice(0, 3));
      })
      .catch((err) => console.log(err));
  }, [setProductsData]);
}


