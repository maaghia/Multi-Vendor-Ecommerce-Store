import React from "react";

export default function Product({product}){
    return(
        <div className="card w-60 bg-base-100 shadow-xl">
        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">
            {product.title}                                       {/* for the product title */}
            <div className="badge badge-secondary">{product.category}</div>  {/* for the seller */}
            </h2>
            <p>{product.discription}</p> {/* for the discription  */}
            <div className="card-actions justify-end">
            <div className="badge badge-outline">{product.price}</div>  {/* for the price */}
            
            </div>
        </div>
        </div>
    );
}