import React, { useContext, useState } from "react";

export default function Search(){

    const [category, setCategory] = useState("");
    const [location, setLocation] = useState("");

    return(
        <div className="flex flex-col gap-5">
            <div className="flex gap-5 mt-10 justify-center">
            <input type="text" placeholder="Type here" className="input input-primary pr-14 pl-14" />
            <button  className="ease-in-out duration-300">
            <span className="mt-5"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg></span>
            </button>
            </div>

            <div className="flex gap-5">
                <div className="form-control w-full max-w-xs">
                <label className="label">
                <span className="label-text">Search by Category:</span>
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
                    <option value="Accesories">Accesories</option>
                    <option value="Home Furniture">Home Furniture</option>
                    <option value="Sport Materials">Sport Materials</option>
                    <option value="Sea Materials">Sea Materials</option>
                </select>
            </div>

            
            <div className="form-control w-full max-w-xs">
                <label className="label">
                <span className="label-text">Search by City:</span>
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

            </div>
        </div>
        
    );
}