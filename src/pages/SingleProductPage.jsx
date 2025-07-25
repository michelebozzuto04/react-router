import { useEffect, useState } from "react"
import { IoStar } from "react-icons/io5";
import { useParams } from "react-router-dom";

export default function SingleProductPage() {

    const [product, setProduct] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setProduct(data)
            })
            .catch(error => console.error(error));
    }, [])

    return (
        <>
            {product ?
                <div key={product.id} className='single-product-card'>
                    <img src={product.image} />
                    <div className="single-product-details">
                        <span className='product-category'>{product.category}</span>
                        <span className='product-title'>{product.title}</span>
                        <div className='product-rating-container'>
                            <span>{product.rating.rate}</span>
                            <IoStar size={26} color='#ffc400' />
                        </div>
                        <span className='product-description'>{product.description}</span>
                        <span className='product-price'>{'$' + product.price}</span>
                    </div>
                </div> :
                <h1>Loading...</h1>
            }
        </>
    )
}