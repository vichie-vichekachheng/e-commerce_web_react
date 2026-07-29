import ProductCart from "../components/product";
import{ getProduct} from "../data/product";
import { Link } from 'react-router-dom';

export default function Home() {
    const products = getProduct();

    return (
        <div className="page">
            <div className="home-hero">
                <h1 className="home-title">WELCOME TO UNTENSELL</h1>
                <p className="home-subtitle">Discover amazing products at great prices</p>
            </div>
            <div className="container">
                <h2 className="page-title">OUR PRODUCTS</h2>
                <div className="product-grid">
                    {products.map((product) => (
                        <ProductCart product={product} key={product.id} />
                    ))}
                </div>
            </div>
        </div>
    );
}