import React, { useEffect, useState, useContext } from "react";
import { Auth } from "../contexts/Auth";
import Product from "../components/Product";
export default function MyProducts() {
    const { user } = useContext(Auth);
    console.log("from my products",user)
    const [products, setProducts] = useState([]);
    const [userid, setUserid] = useState("");
    //setUserid(user.id); 
    //console.log(userid)
    
    useEffect(() => {
        fetch(`http://localhost:3000/api/products/postedBy/63948f020ec60e6eaf334731`)
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


    
    /* const fetchProducts = async (userid) => {
        const response = await fetch(`http://localhost:3000/api/products/postedBy/${userid}`)
        .then((response)=> response.json())
        .then((data)=>setProducts(data))
    }
    fetchProducts(userid); */
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
