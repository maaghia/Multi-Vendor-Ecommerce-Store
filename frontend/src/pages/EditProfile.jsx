import React, {useContext, useState, useEffect} from "react";
import ProductInfo from "./MyProfile";
import { Auth } from "../contexts/Auth";

export default function EditProfile(){
    const { user } = useContext(Auth);
    console.log(user)
    const [fullname, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phonenbr, setPhoneNbr] = useState("");
    const [location, setLocation] = useState("");
    
        /* TODO: add condition on user and init user info  */
       /*  useEffect(() => {
            const user = JSON.parse(localStorage.getItem("user"));
        
            if (user) {
              dispatch({ type: "LOGIN", payload: user });
            }
        }, []); */
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
                    value={fullname} 
                    placeholder= {user?.fullName} 
                    onChange={(e) => {
                        setFullName(e.target.value);
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
                    placeholder= {user?.email}
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
                    value={phonenbr}
                    onChange={(e) => {
                        setPhoneNbr(e.target.value);
                    }}
                    className="input input-bordered" />
            </label>
            </div>
            
            {/* TODO: add edit location */} 

            <div className="flex gap-5 mt-10">
            <button className="btn btn-success w-20">Save</button>
            <button className="btn btn-error w-20">Cancel</button>        
            </div>      
             

        </form>
    );
}