import React from "react";

export default function Product(){
    return(
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">
            Shoes!                                        {/* for the product title */}
            <div className="badge badge-secondary">NEW</div>  {/* for th price */}
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p> {/* for the discription  */}
            <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>  {/* these wo for the tags */}
            <div className="badge badge-outline">Products</div>
            </div>
        </div>
        </div>
    );
}