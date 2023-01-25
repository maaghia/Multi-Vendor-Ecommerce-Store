import React, { useEffect, useState, useContext } from "react";
import { Auth } from "../contexts/Auth";
export default function MyProducts() {
    const { user } = useContext(Auth);
    console.log("from my products",user.id)
    const [products, setProducts] = useState([]);
    
   useEffect(() => {
    const fetchProducts = async (userid) => {
        const response = await fetch(`http://localhost:3000/api/products/postedBy/${userid}`)
        .then((response)=> response.json())
        .then((data)=>setProducts(data))
    }
    fetchProducts(user.id);
    },[]); 

  return (
    <div>
        {/* <div className="flex flex-wrap gap-10 justify-center">
        { products?.filter(product => {
          return <Product{product.postedBy}==={user.id}/>;
        })}
      </div> */}  
    </div>
  );
}
