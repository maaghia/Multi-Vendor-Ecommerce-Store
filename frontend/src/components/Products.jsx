import React, { useEffect, useState } from "react";
import useFetchData from "../hooks/useFetchData";
import Product from "./Product";
export default function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
        
      })
      .then((data) => {
       // console.log("before", products);
        setProducts(data);
       // console.log("after", products);   WHY IS THIS EMPTY
      })
      .catch((e) => console.log(e));
  }, []);
  
  return (
    <div>
      <div className="flex flex-wrap gap-10 justify-center">
        { products?.map((product) => {
          return <Product product={product} key={product._id} />;
        })}
      </div>
    </div>
  );
}
