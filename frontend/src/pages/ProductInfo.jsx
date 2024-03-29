import React from "react";
import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";

export default function ProductInfo(){
    const [product, setProduct] = useState("");
    const [seller, setSeller] = useState("");
    const {id} = useParams();
 
   

    useEffect(() => {
        const fetchProduct = (prodid) => {
            fetch(`http://localhost:3000/api/products/${prodid}`)
            .then((response)=> response.json())
            .then((data)=>setProduct(data))
        }
        fetchProduct(id);

        if(product){
            fetch(`http://localhost:3000/api/users/${product.postedBy}`).then((response) => response.json()).then((data) => {
            console.log(data)
            setSeller(data)
        })}
        
    },[product, seller]);
    
    

    return(
        <div>
            <div className="flex flex-column">
                <div className="card shadow-2xl w-80 m-4">
                <figure>
                <img src={import.meta.env.VITE_API_URL + product.imageURL} alt="product's image" />
                </figure>

                

                <div className="card-body">
                    <h2 className="card-title">{product.title} 
                    <div className="badge badge-secondary">{product.category}</div>
                    </h2>

                    <h4 className="flex text-left">
                        
                        {product.description}
                    </h4>

                    <h3 className="flex gap-5">
                        <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                        </svg>
                        </span>
                        {seller.fullName}
                    </h3>

                    <h3 className="flex gap-5">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                            </svg>
                        </span>
                        {seller.phoneNbr}
                    </h3>

                    <h3 className="flex gap-5">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            </svg> 
                        </span>
                        {seller.location}
                    </h3>
                </div>
            </div>
            
</div>

        </div>
    );
}