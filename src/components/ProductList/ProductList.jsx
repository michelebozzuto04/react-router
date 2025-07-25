import './ProductList.css'
import '../../index.css'
import { IoStar } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { OrbitProgress } from 'react-loading-indicators'

export default function ProductList({ products }) {
    return (
        <div className="container">
            {products.length !== 0 ?
                <div className="product-grid">{
                    products.map((product) => {
                        return (
                            <Link key={product.id} to={`/products/${product.id}`}>
                                <div className='product-card'>
                                    <img src={product.image} />
                                    <span className='product-category'>{product.category}</span>
                                    <div className='product-rating-container'>
                                        <IoStar color='#ffc400' />
                                        <span>{product.rating.rate}</span>
                                    </div>
                                    <span className='product-title'>{product.title}</span>
                                    <span className='product-price'>{'$' + product.price}</span>
                                </div>
                            </Link>
                        )
                    })}
                </div> :
                <div style={{ marginTop: 100 }}>
                    <OrbitProgress variant="split-disc" color="#27DEFF" size="medium" text="" textColor="" />
                </div>
            }
        </div>
    )
}