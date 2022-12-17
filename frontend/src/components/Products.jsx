import React, { useContext, useEffect, useState } from "react";
import { Auth } from "../contexts/Auth";
import Product from "./Product";
import ProductsForm from "./ProductsForm";

export default function Products({ products, setProducts }) {
  const { user } = useContext(Auth);

  useEffect(() => {
    if(!user) {
      return
    }
    const fetchProducts = async () => {
      const response = await fetch("/api/products", {
        headers: {
          "Authorization": `Bearer ${user.token}`,
        },
      });
      const json = await response.json();
      setProducts(json);
    };

    fetchProducts();
  }, [user]);

  return (
    <div>
      <ProductsForm setProducts={setProducts} />
      <div>
        {products.map((product) => {
          return <Product product={product} key={product._id} />;
        })}
      </div>
    </div>
  );
}