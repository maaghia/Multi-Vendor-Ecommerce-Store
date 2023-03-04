import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Product from "./Product";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}
export default function Products() {
  const [products, setProducts] = useState([]);
  const temp = useQuery();
  const category = temp.get("category");

  /* useEffect(() => {
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
        setProducts(data);
      })
      .catch((e) => console.log(e));
  }, []);
 */
  useEffect(() => {
    let link = category
      ? `http://localhost:3000/api/products/category/${category}`
      : "http://localhost:3000/api/products";

    fetch(link)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((e) => console.log(e));
  }, [category]);

  return (
    <div>
      <div className="flex flex-wrap gap-10 justify-center">
        {products?.map((product) => {
          return <Product product={product} key={product._id} />;
        })}
      </div>
    </div>
  );
}
