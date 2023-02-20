import React, {useContext} from "react";
import { Auth } from "../contexts/Auth";
import { useLogout } from "../hooks/useLogout";
import { NavLink } from "react-router-dom";

export default function Navbar(){
    const { user } = useContext(Auth);
    const { logout } = useLogout();
  
    const handleLogout = () => {
      logout();
    };
  
    
    return(
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">BAZAR</a>
            </div>
            <div className="flex-none">
                <NavLink to="/search" tabIndex={0} className="btn btn-ghost btn-circle">
                    <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg> 
                    </div>
                </NavLink>
                

                {user && (
                <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img src="https://placeimg.com/80/80/people" />
                    </div>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><NavLink to="/myProfile" className="justify-between">My Profile</NavLink></li>
                    <li><NavLink to="/addproduct">Add Product</NavLink></li>
                    <li><button onClick={handleLogout}>Logout</button></li>
                    <li><NavLink to="">Home</NavLink></li>
                </ul>
                </div>
                )}
                {!user && (
                    <div className="btn-group">
                        <NavLink className="btn btn-active" to="/login">Login</NavLink>
                        <NavLink className="btn" to="/signup">Signup</NavLink>
                    </div>
                )}
                
            </div>
            </div>
    );
}