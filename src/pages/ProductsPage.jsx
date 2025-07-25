import { useEffect, useState } from "react"
import ProductList from "../components/ProductList/ProductList";
import { Navigate } from "react-router-dom";

export default function ProductsPage() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => {
                console.error(error)
            });
    }, [])

    return (
        <>
            <div className="jumbotron-secondary">
                <div>
                    <h1>ALL PRODUCTS</h1>
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
                <ProductList products={products} />
            </div>
        </>
    )
}