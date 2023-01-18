import React, { useContext, useState } from "react";
import { Auth } from "../contexts/Auth";
import Demo from "../pages/Demo"
import { geolocated } from "react-geolocated";
<<<<<<< HEAD
import { Auth } from "../contexts/Auth";
=======
>>>>>>> fdfeb3b7e0bdc9f4c2e96d2cdc2828d26ba06990

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

<<<<<<< HEAD
  //LOCATION
  const [checked, setChecked] = useState(false);

  const handleChange = () => { 
    if (!user) {
      console.log('user not found!')
      return
    }
=======
  const [checked, setChecked] = useState(false);
  const handleChange = () => { 
>>>>>>> fdfeb3b7e0bdc9f4c2e96d2cdc2828d26ba06990
    setChecked(!checked); 
    console.log('The checkbox was toggled'); 
    
  };
<<<<<<< HEAD
  
  useEffect(() => {
    getLocation(); //idk how to get location from demo
  }, []);

  const getLocation = async () => {
    setLocation(/* idk what variable to put here */);
  };
=======
>>>>>>> fdfeb3b7e0bdc9f4c2e96d2cdc2828d26ba06990

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
          <input type="checkbox" onChange={handleChange} className="checkbox checkbox-primary" />
          <span className="label-text">Allow us to get your Location (mandatory)</span>
        </label>
      </div>

        <button onClick={handleAddProduct} className="btn btn-outline mt-10">Add Product</button>
      
    </div>
  );
}