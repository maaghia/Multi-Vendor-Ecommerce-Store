import React, {useState} from "react";
import { useSignup } from "../hooks/useSignup";

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phonenbr, setPhoneNbr] = useState("");
    const [fullName, setFullName] = useState("");
    const { error, isLoading, signup } = useSignup();

    const handleSignup = async () => {
        await signup(email, password, phonenbr);
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
                   value={phonenbr}
                   onChange={(e) => {
                    setPhoneNbr(e.target.value);
                   }}
                   className="input input-bordered" />
        </label>
        </div>

        <button onClick={handleSignup} className="btn btn-outline mt-10">Signup</button>
        
        {error && ( <div><p>{error}</p></div> )}

        </form>
    );
}