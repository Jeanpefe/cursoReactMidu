import './Products.css'
import { AddToCartIcon } from './icons'

export function Products ({products}) {
    return (
        <main className='products'>
            <ul>
                {products.slice(0,10).map(product => (
                    <li key={product.id}>
                        <img 
                            src='https://i.pinimg.com/474x/c4/86/5b/c4865b31956c0571ac923bdce5934419.jpg'
                            alt={product.title}
                        />
                        <div>
                            <strong>{product.title}</strong> - €{product.price}
                        </div>
                        <div>
                            <button>
                                <AddToCartIcon />  
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    )
}