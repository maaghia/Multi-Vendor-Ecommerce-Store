import React from "react";
import { NavLink } from "react-router-dom";

export default function Product({product}){

    return(
        <div className="card w-60 bg-base-100 shadow-xl p-0">
        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
        <div className="card-body ">
            <h4 className="card-title text-left">
            {product.title}                                       {/* for the product title */}
            <div className="badge badge-secondary">{product.category}</div>  {/* for the seller */}
            </h4>
            <p className="text-left">{product.description}</p> {/* for the description  */}
            <div className="card-actions justify-end">
            <div className="badge badge-outline">{product.price}</div>  {/* for the price */}
            <div className="buy"> 
            <NavLink to={`/${product._id}`} className="hover:animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-plus" viewBox="0 0 16 16">
            <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
            </svg>
            </NavLink>
            </div>

            </div>
        </div>
        </div>
    );
}