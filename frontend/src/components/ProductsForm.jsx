import React, { useContext, useState } from "react";
import { Auth } from "../contexts/Auth";

export default function ProductsForm({setProducts}) {
  const { user } = useContext(Auth);

  const [title, setTitle] = useState("");
  const [postedBy, setPostedBy] = useState(user.id);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(0);
  const [location, setLocation] = useState("");

  console.log(postedBy);

  const handleAddProduct = async (event) => {
    event.preventDefault();
    if (!user) {
      console.log('user not found!')
      return;
    }
    const product = { title, postedBy, description, price, category, location};

    const response = await fetch("http://localhost:3000/api/products", {
      method: "POST",
      mode: 'cors',
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
                    className="input input-bordered w-64" />
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
                    className="input input-bordered w-48" />
            <span>DZD</span>
        </label>

        <label className="label">
            <span className="label-text">Description:</span>
        </label>
        <label className="input-group">
            <span>Description</span>
            <input type="text" 
                   value={description}
                    onChange={(e) => {
                    setDescription(e.target.value);
                    }} 
                    placeholder=". . ." 
                    className="input input-bordered" />
        </label>

        <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Pick Category:</span>
        </label>
        <select value={category} 
                onChange={(e) => {
                  setCategory(e.target.value);
                  }}
        className="select select-bordered">
            <option value="">Category</option>
            <option value="Clothes">Clothes</option>
            <option value="Dishes">Dishes</option>
            <option value="Toys">Toys</option>
            <option value="Electronics">Electronics</option>
            <option value="Cosmetics">Cosmetics</option>
            <option value="Home Furniture">Home Furniture</option>
            <option value="Sport Materials">Sport Materials</option>
            <option value="Sea Materials">Sea Materials</option>
        </select>
      </div>

      
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Pick City:</span>
        </label>
        <select 
                value={location} 
                onChange={(e) => {
                  setLocation(e.target.value);
                  }}
                className="select select-bordered">
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

        <button onClick={handleAddProduct} className="btn btn-outline mt-10">Add Product</button>
      
    </div>
  );
}