import { useEffect, useState } from "react"
import ProductList from "../components/ProductList/ProductList";

export default function ProductsPage() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error(error));
    }, [])

    return (
        <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
            <h1 style={{ paddingTop: 2, paddingBottom: 40 }}>Products</h1>
            <ProductList products={products} />
        </div>
    )
}