import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";

export default function Signup(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNbr, setPhoneNbr] = useState("");
    const [fullName, setFullName] = useState("");
    const [location, setLocation] = useState("");
    const { error, isLoading, signup } = useSignup();

    const navigate = useNavigate();
    const handleSignup = async (event) => {
        event.preventDefault();
        await signup(email, password, phoneNbr, fullName, location);
        navigate(`/`);
      };

    return(
        <form>
        <div className="login m-10 text-xl">Signup</div>
        
        <div className="form-control">
        <label className="label">
            <span className="label-text">Your Email</span>
        </label>
        <label className="input-group">
            <span>Email</span>
            <input type="text"
                   placeholder="info@site.com" 
                   value={email}
                   onChange={(e) => {
                   setEmail(e.target.value);
                   }}
                   className="input input-bordered w-60" />
        </label>
        </div>

        <div className="form-control">
        <label className="label">
            <span className="label-text">Your Full Name</span>
        </label>
        <label className="input-group">
            <span>Name</span>
            <input type="text"
                   placeholder="Full Name" 
                   value={fullName}
                   onChange={(e) => {
                   setFullName(e.target.value);
                   }}
                   className="input input-bordered w-60" />
        </label>
        </div>

        <div className="form-control">
        <label className="label">
            <span className="label-text">Your Password</span>
        </label>
        <label className="input-group">
            <span>Password</span>
            <input type="password"
                   placeholder= "********" 
                    value={password}
                    onChange={(e) => {
                    setPassword(e.target.value);
                    }}
                   className="input input-bordered" />
        </label>
        </div>

        <div className="form-control">
        <label className="label">
            <span className="label-text">Your Phone Number</span>
        </label>
        <label className="input-group">
            <span>Phone Nb</span>
            <input type="text" 
                   placeholder="05********" 
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

        <button onClick={handleSignup} className="btn btn-outline mt-10">Signup</button>
        
        {error && ( <div><p>{error}</p></div> )}

        </form>
    );
}