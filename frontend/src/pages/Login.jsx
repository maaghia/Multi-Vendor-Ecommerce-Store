import React, {useState} from "react";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from 'react-router-dom';


export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { error, isLoading, login } = useLogin();
    const navigate = useNavigate();

    const handleLogin = async () => {
       await login(email, password);
       navigate('/');
    };
   return(
        <form>
        <div className="login m-10 text-xl">Login</div>

        <div className="form-control">
        <label className="label">
            <span className="label-text">Your Email</span>
        </label>
        <label className="input-group">
            <span>Email</span>
            <input type="text" 
                   value={email} 
                   placeholder="info@site.com" 
                   onChange={(e) => {
                    setEmail(e.target.value);
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
                   placeholder="********" 
                   value={password}
                   onChange={(e) => {
                   setPassword(e.target.value);
                   }}
                   className="input input-bordered" />
        </label>
        </div>

        <button 
            onClick={handleLogin} 
            disabled={isLoading}
            className="btn btn-outline mt-10"
        >
            Login
        </button>
        {error && <p>{error.message}</p>}
        </form>
    );
}