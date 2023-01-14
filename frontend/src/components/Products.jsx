import React, { useEffect, useState } from "react";
import useFetchData from "../hooks/useFetchData";
export default function Products() {
  // const {isLoading, apiData, serverError } = useFetchData("/api/products");
  // console.log(apiData);

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
        console.log(data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <div>
        {products?.map((product) => {
          return <Product product={product} key={product._id} />;
        })}
      </div>
    </div>
  );
}
