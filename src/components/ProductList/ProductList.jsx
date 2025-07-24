import './ProductList.css'
import '../../index.css'

export default function ProductList({ products }) {
    return (
        <div className="container">
            <div className="product-grid">
                {products.map((product) => {
                    return (
                        <div key={product.id} className='product-card'>
                            <img src={product.image} />
                            <h2>{product.title}</h2>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}