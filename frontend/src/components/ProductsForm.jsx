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

  /* //LOCATION
  const [isChecked, setIsChecked] = useState(false);
  //const { coords } = usePosition();

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    if (event.target.checked) {
      console.log(coords);
    }
  }; */

  

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
            <option value="">Category</option>
            <option value="Clothes">Clothes</option>
            <option value="Dishes">Dishes</option>
            <option value="Toys">Toys</option>
            <option value="Electronics">Electronics</option>
            <option value="Cosmetics">Cosmetics</option>
            <option value="Home Furniture">Home Furniture</option>
            <option value="Sport Materials">Sport Materials</option>
        </select>
      </div>

      
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Pick City:</span>
        </label>
        <select className="select select-bordered">
          <option value="">City</option>
          <option value="Adrar">Adrar</option>
          <option value="Chlef">Chlef</option>
          <option value="Laghouat">Laghouat</option>
          <option value="Oum el-Bouaghi">Oum el-Bouaghi</option>
          <option value="Batna">Batna</option>
          <option value="Béjaïa">Béjaïa</option>
          <option value="Biskra">Biskra</option>
          <option value="Béchar">Béchar</option>
          <option value="Blida">Blida</option>
          <option value="Bouira">Bouira</option>
          <option value="Tamanrasset">Tamanrasset</option>
          <option value="Tébessa">Tébessa</option>
          <option value="Tlemcen">Tlemcen</option>
          <option value="Tiaret">Tiaret</option>
          <option value="Tizi Ouzou">Tizi Ouzou</option>
          <option value="Algiers">Algiers</option>
          <option value="Djelfa">Djelfa</option>
          <option value="Jijel">Jijel</option>
          <option value="Setif">Setif</option>
          <option value="Saïda">Saïda</option>
          <option value="Skikda">Skikda</option>
          <option value="Sidi Bel Abbes">Sidi Bel Abbes</option>
          <option value="Annaba">Annaba</option>
          <option value="Guelma">Guelma</option>
          <option value="Constantine">Constantine</option>
          <option value="Médéa">Médéa</option>
          <option value="Mostaganem">Mostaganem</option>
          <option value="M'Sila">M'Sila</option>
          <option value="Muaskar">Muaskar</option>
          <option value="Oran">Oran</option>
          <option value="El Bayadh">El Bayadh</option>
          <option value="Illizi">Illizi</option>
          <option value="Bordj Bou Arreridj">Bordj Bou Arreridj</option>
          <option value="Boumerdes">Boumerdes</option>
          <option value="El Tarf">El Tarf</option>
          <option value="Tindouf">Tindouf</option>
          <option value="Tissemsilt">Tissemsilt</option>
          <option value="El Oued">El Oued</option>
          <option value="Khenchela">Khenchela</option>
          <option value="Souk Ahras">Souk Ahras</option>
          <option value="Tipaza">Tipaza</option>
          <option value="Mila">Mila</option>
          <option value="Ain Defla">Ain Defla</option>
          <option value="Naama">Naama</option>
          <option value="Aïn Témouchent">Aïn Témouchent</option>
          <option value="Ghardaia">Ghardaia</option>
          <option value="Relizane">Relizane</option>
          <option value="Tahoua">Tahoua</option>

          </select>
      </div>
        
       {/*  <div className="form-control">
        <label className="label cursor-pointer mt-5">
          <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} className="checkbox checkbox-primary" />
          <span className="label-text">Allow us to get your Location (mandatory)</span>
        </label>
      </div> */}

        <button onClick={handleAddProduct} className="btn btn-outline mt-10">Add Product</button>
      
    </div>
  );
}