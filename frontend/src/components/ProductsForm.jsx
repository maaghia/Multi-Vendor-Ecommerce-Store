import React, { useContext, useState } from "react";
import { Auth } from "../contexts/Auth";
import Demo from "../pages/Demo"
import { usePosition } from 'react-geolocated';

export default function ProductsForm({setProducts}) {
  const { user } = useContext(Auth);

  const [title, setTitle] = useState("");
  const [postedBy, setAuthor] = useState("");
  const [price, setPrice] = useState(0);
  const [location, setLocation] = useState("");

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

  //LOCATION
  const [isChecked, setIsChecked] = useState(false);
  //const { coords } = usePosition();

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    if (event.target.checked) {
      console.log(coords);
    }
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
            <span className="label-text">Enter amount:</span>
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

        <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Pick Category:</span>
        </label>
        <select className="select select-bordered">
          <option disabled></option>
          <option>Clothes</option>
            <option>Dishes</option>
            <option>Toys</option>
            <option>Electronics</option>
            <option>Cosmetics</option>
            <option>Home Furniture</option>
            <option>Sport Materials</option>
        </select>
      </div>
        
        <div className="form-control">
        <label className="label cursor-pointer mt-5">
          <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} className="checkbox checkbox-primary" />
          <span className="label-text">Allow us to get your Location (mandatory)</span>
        </label>
      </div>

        <button onClick={handleAddProduct} className="btn btn-outline mt-10">Add Product</button>
      
    </div>
  );
}