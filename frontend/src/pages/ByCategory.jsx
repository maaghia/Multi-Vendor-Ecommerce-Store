import React, { useEffect, useState, useContext } from "react";
import { Auth } from "../contexts/Auth";
import Product from "../components/Product";
export default function ByCategory() {
    const { user } = useContext(Auth);
    
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState("");

    
    useEffect(() => {
        fetch(`http://localhost:3000/api/products/category/${category}`)
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

    },[]); 

  return (
    <div>
    <div className="flex flex-wrap gap-10 justify-center">
      { products?.map((product)=> {
        return <Product product={product}  keys={product._id}/>;
      })}
    </div>     
    </div>
  );
}
