import React, { useEffect, useState, useContext } from "react";
import useFetchData from "../hooks/useFetchData";
import Product from "../components/Product";
import { Auth } from "../contexts/Auth";


export default function MyProducts() {
    const { user } = useContext(Auth);
    
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
        setProducts(data);
      })
      .catch((e) => console.log(e));
  }, []);
  
  return (
    <div>
      <div className="flex flex-wrap gap-10 justify-center">
        { products?.filter(product => {
          return <Product product={product} key={product._id}/>;
        })}
      </div>
    </div>
  );
}
