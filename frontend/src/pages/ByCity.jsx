import React, { useEffect, useState, useContext } from "react";
import { Auth } from "../contexts/Auth";
import Product from "../components/Product";
import { useParams } from "react-router-dom";
export default function ByCity () {
    const { user } = useContext(Auth);

    const [products, setProducts] = useState([]);
    
    const { city } = useParams();
    console.log("ByCity", city)

    
    useEffect(() => {
        fetch(`http://localhost:3000/api/products/city/${city}`)
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
