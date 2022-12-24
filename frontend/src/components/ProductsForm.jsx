import React, { useContext, useState } from "react";
import { Auth } from "../contexts/Auth";

export default function ProductsForm({setProducts}) {
  const [title, setTitle] = useState("");
  const [postedBy, setAuthor] = useState("");
  const [price, setPrice] = useState(0);

  const {user} = useContext(Auth)

  console.log(title);

  const handleAddProduct = async () => {
    if (!user) {
      console.log('user not found!')
      return
    }
    const product = { title, price, postedBy};

    const response = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${user.token}`
      },
      body: JSON.stringify(product),
    });

    const json = await response.json()

    console.log(json)

    setProducts(prevState => [...prevState, json])
    
  };
  return (
    <div className="flex-row justify-center">

        <label className="label">
            <span className="label-text">Title:</span>
        </label>
        <label className="input-group">
            <span>Title</span>
            <input type="text" 
                   value={title}
                    onChange={(e) => {
                    setTitle(e.target.value);
                    }} 
                    placeholder="product title" 
                    className="input input-bordered" />
        </label>

        <label className="label">
            <span className="label-text">Seller:</span>
        </label>
        <label className="input-group">
            <span>Seller</span>
            <input type="text" 
                   value={postedBy}
                   onChange={(e) => {
                     setAuthor(e.target.value);
                   }}
                   placeholder="username" 
                   className="input input-bordered" />
        </label>

        <label className="label">
            <span className="label-text">Enter amount</span>
        </label>
        <label className="input-group">
            <span>Price</span>
            <input  type="number"
                    value={price}
                    onChange={(e) => {
                    setPrice(e.target.value);
                    }}
                    placeholder="10" 
                    className="input input-bordered w-40" />
            <span>DZD</span>
        </label>

        <div className="input-group mt-10 ">
        <select className="select select-bordered w-60">
        <option className="input input-bordered w-40" defaultValue="category">Pick category</option>
            <option>Clothes</option>
            <option>Dishes</option>
            <option>Toys</option>
            <option>Electronics</option>
            <option>Cosmetics</option>
            <option>Home Furniture</option>
            <option>Sport Materials</option>
        </select>
        <button className="btn">Go</button>
        </div>

        <button onClick={handleAddProduct} className="btn btn-outline mt-10">Add Product</button>
      
    </div>
  );
}