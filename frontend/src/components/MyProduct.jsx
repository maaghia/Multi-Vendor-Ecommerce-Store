import React from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios';
import UpdateProduct from "../pages/UpdateProduct";
import { useContext } from "react";
import { Auth } from "../contexts/Auth";


export default function MyProduct({product}){
  console.log("myprod",product)
  const { user } = useContext(Auth);
    const deleteProduct = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:3000/api/products/${id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}`},
        });
        return response.data;
     } catch (error) {
        throw new Error(error.message);
    }
    };

    const handleDelete = async (id) => {
        try {
          if(user.id === product.postedBy)
          {await deleteProduct(id);
          window.location.reload();}
        } catch (error) {
          console.error(error);
        }
      };
      const handleEdit = (product) => {
        console.log('product:', product);
        if (product){
          const productId = product.id;
          window.location.assign(`/editProduct/${product.id}`);
        }
      }

    return(
        <div className="card w-60 bg-base-100 shadow-xl p-0">
        <figure><img src={import.meta.env.VITE_API_URL + product.imageURL} alt="product's image" /></figure>
        <div className="card-body ">
            <h4 className="card-title text-left">
            {product.title}                                       {/* for the product title */}
            <div className="badge badge-secondary">{product.category}</div>  {/* for the seller */}
            </h4>
            <p className="text-left">{product.description}</p> {/* for the description  */}
            <div className="card-actions justify-end">
            {/* <div className="badge badge-outline mt-3">{product.price}</div>  {/* for the price */} 
            {user && (
            
            <div className="flex gap-3 mt-2">
                <button className="btn btn-circle" onClick={() => handleDelete(product._id)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="red"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                {/* <button className="btn btn-circle" onClick={() => handleEdit(product)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg>
                </button>  */}
                <NavLink to={`/editProduct/${product._id}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                  <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                  </svg>
                </NavLink>
            </div>
            )}
            </div>
        </div>
        </div>
    );
}