import { useEffect } from "react";
import Header from "../components/Header/Header";

export default function HomePage({ products }) {

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    }, [])

    return (
        <>
            <h1>Home</h1>
        </>
    )
}