import React, { useContext, useEffect, useState } from "react";
import { Auth } from "../contexts/Auth";
import Product from "./Product";

export default function Products({ products, setProducts }) {


  
  return (
    <div>
      <Products setProducts={setProducts} />
      <div>
        {products?.map((product) => {
          return <Product product={product} key={product._id} />;
        })}
      </div>
    </div>
  );
}