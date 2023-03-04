import React, { useEffect, useState, useContext } from "react";
import { Auth } from "../contexts/Auth";
import MyProduct from "../components/MyProduct";
export default function MyProducts() {
    const { user } = useContext(Auth);
    //console.log("from my products",user)
    const [products, setProducts] = useState([]);
    const [userid, setUserid] = useState("");
    
    /* useEffect(() => {
        fetch(`http://localhost:3000/api/products/postedBy/${user.id}`)
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


    
    },[]);  */

    useEffect(() => {
      if (user) {
        fetch(`http://localhost:3000/api/products/postedBy/${user.id}`)
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
      }
    }, [user]);

  return (
    <div>
         <div className="flex flex-wrap gap-10 justify-center">
          { products?.map((product)=> {
            return <MyProduct key={product._id} product={product} />;
          })}

      </div>   
    </div>
  );
}
