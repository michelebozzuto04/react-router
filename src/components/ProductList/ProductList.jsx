import './ProductList.css'
import '../../index.css'
import { IoStar } from 'react-icons/io5'

export default function ProductList({ products }) {
    return (
        <div className="container">
            <div className="product-grid">
                {products.map((product) => {
                    return (
                        <div key={product.id} className='product-card'>
                            <img src={product.image} />
                            <span className='product-category'>{product.category}</span>
                            <div className='product-rating-container'>
                                <IoStar color='#ffc400' />
                                <span>{product.rating.rate}</span>
                            </div>
                            <span className='product-title'>{product.title}</span>
                            <span className='product-price'>{'$' + product.price}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}