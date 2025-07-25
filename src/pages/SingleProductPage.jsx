import { useEffect, useState } from "react"
import { IoArrowBack, IoArrowForward, IoStar } from "react-icons/io5";
import { OrbitProgress } from "react-loading-indicators";
import { Link, Navigate, useParams } from "react-router-dom";

export default function SingleProductPage() {

    const [product, setProduct] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.error(error));
    }, [id])

    return (
        <>
            <div className='single-product-card'>
                {product ?
                    <>
                        <img src={product.image} />
                        <div className="single-product-details">
                            <span className='product-category'>{product.category}</span>
                            <span className='product-title'>{product.title}</span>
                            <div className='product-rating-container'>
                                <span className="rating-rate">{product.rating.rate}</span>
                                <IoStar size={26} color='#ffc400' />
                                <span className="rating-count">{product.rating.count} Ratings</span>
                            </div>
                            <hr />
                            <span className='product-description'>{product.description}</span>
                            <span className='product-price'>{'$' + product.price}</span>
                            <div className="cta">
                                <button className="btn btn-outline">Add to cart</button>
                                <button className="btn btn-primary">Buy now</button>
                            </div>
                        </div>
                        <div className="navigation-container">
                            <Link to={`/products/${parseInt(id) - 1}`}>
                                <div className="navigation-btn">
                                    <IoArrowBack size={40} color='#fff' />
                                </div>
                            </Link>

                            <Link to={`/products/${parseInt(id) + 1}`}>
                                <div className="navigation-btn">
                                    <IoArrowForward size={40} color='#fff' />
                                </div>
                            </Link>
                        </div>
                    </> :
                    <OrbitProgress variant="split-disc" color="#27DEFF" size="medium" text="" textColor="" />
                }
            </div>

        </>
    )
}