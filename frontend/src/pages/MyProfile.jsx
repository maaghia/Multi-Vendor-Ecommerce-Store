import React, {useContext, useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import { Auth } from "../contexts/Auth";

export default function MyProfile(){

    const { user } = useContext(Auth);
    //this instead of line 7 
    //console.log("myprofile", user);

    return(
        <div>

            <div className="flex flex-column">
                <div className="card shadow-2xl w-80 m-4">
                <div className="flex">
                    <div> <img className="w-20 rounded-full" src="https://placeimg.com/80/80/people" /> </div>
                    <div className="mt-5"> 
                    <NavLink to="/editProfile" className="btn btn-link">Edit Profile</NavLink> 
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title"> {user.fullName} </h2>
                    <h3 className="flex gap-5">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                            </svg>
                        </span>
                        {user.phoneNbr}
                    </h3>

                    <h3 className="flex gap-5">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            </svg> 
                        </span>
                        {user.location}
                    </h3>
                    <div className="flex flex-col gap-5 mt-5 ">
                    <NavLink to="/myProducts" className="btn">My Products</NavLink>
                    <NavLink to="/addproduct" className="btn">Add a Product</NavLink>
                    </div>
                    
                </div>
            </div>
            
</div>

        </div>
    );
}