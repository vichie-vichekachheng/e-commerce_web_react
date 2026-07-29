import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProbyId } from "../data/product";

export default function ProductDetails(){
    const { id } = useParams();
    const [product, setproduct] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const foundPro = getProbyId(id);
        if(!foundPro){
            navigate("/");
            return;
        }
        setproduct(foundPro);
    }, [id, navigate]); 

    if (!product) return null;

    return(
        <div className="page">
           <div className="container">
                <div className="product-detail">
                    <div className="product-detail-image">
                        <img src={product.image} alt={product.name} />
                    </div>
                    <div className="product-detail-content">
                        <h1 className="product-detail-name">{product.name}</h1>
                        <p className="product-detail-price">${product.price}</p>
                        <p className="product-detail-description">{product.description}</p>
                        <button className="btn btn-primary">
                            Add to Cart
                        </button>
                    </div>
                </div>
           </div>
        </div>
    )
}