import React, {useContext, useState, useEffect} from "react";
import { Auth } from "../contexts/Auth";
import { NavLink } from "react-router-dom";

export default function EditProfile(){
    const { user } = useContext(Auth);
    console.log(user)
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNbr, setPhoneNbr] = useState("");
    const [location, setLocation] = useState("");

    const handleEditProfile = async (event) => {
        event.preventDefault();

        let updatedUser = {
            fullName: fullName ? fullName : user?.fullName,
            location: location ? location : user?.location,
            email: email ? email : user?.email,
            phoneNbr: phoneNbr ? phoneNbr : user?.phoneNbr,
        }
      
          const response = await fetch("http://localhost:3000/api/users/update", {
            method: "PATCH",
            mode: 'cors',
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${user.token}`
            },
            body: JSON.stringify(updatedUser), 
            
          });
          const json = await response.json()
      
          console.log(json)    
      };
         
    return(
        <form className="mt-10">
            <div>
            <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://placeimg.com/80/80/people" />
            </div>
            </div>
            </div>

            <div className="form-control">
            <label className="label">
                <span className="label-text">Your Full Name</span>
            </label>
            <label className="input-group">
                <span>Name</span>
                <input type="text" 
                    value={fullName}
                    placeholder={user?.fullName}
                    onChange={(e) => {
                        setFullName(e.target.value);
                        console.log(e.target.value)
                    }}
                    className="input input-bordered w-60" />
            </label>
            </div>

            <div className="form-control">
            <label className="label">
                <span className="label-text">Your Email</span>
            </label>
            <label className="input-group">
                <span>E-mail</span>
                <input type="text" 
                    value={email} 
                    placeholder={user?.email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    className="input input-bordered w-60" />
            </label>
            </div>
            
            <div className="form-control">
            <label className="label">
                <span className="label-text">Your Phone Number</span>
            </label>
            <label className="input-group">
                <span>Phone Nb</span>
                <input type="text" 
                    placeholder={user?.phoneNbr}
                    value={phoneNbr}
                    onChange={(e) => {
                        setPhoneNbr(e.target.value);
                    }}
                    className="input input-bordered" />
            </label>
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
                    

            <div className="flex gap-5 mt-10">
            <button onClick={handleEditProfile} className="btn btn-success w-20">Save</button>
            <NavLink to="/myProfile" className="btn btn-error w-20">Cancel</NavLink>        
            </div>      
             

        </form>
    );
}