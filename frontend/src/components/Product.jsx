import React from "react";

export default function Product({product}){
    return(
        <div className="card w-60 bg-base-100 shadow-xl p-0">
        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
        <div className="card-body ">
            <h4 className="card-title text-left">
            {product.title}                                       {/* for the product title */}
            <div className="badge badge-secondary">{product.category}</div>  {/* for the seller */}
            </h4>
            <p className="text-left">{product.description}</p> {/* for the discription  */}
            <div className="card-actions justify-end">
            <div className="badge badge-outline">{product.price} 900 DZD</div>  {/* for the price */}
            <div className="buy"> 
            <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
            </svg>
            </button>
            </div>

            </div>
        </div>
        </div>
    );
}