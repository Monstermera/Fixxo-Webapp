import React from 'react'
import { NavLink } from 'react-router-dom'
import { currencyFormatter } from '../utilities/currencyFormatter'
import { useShoppingCartContext, ShoppingCartContextType } from '../contexts/ShoppingCartContext'
import { ProductCardType } from '../models/ProductModel'

const ProductCard: React.FC<ProductCardType> = ({item}) => {
    const { incrementQuantity } = useShoppingCartContext() as ShoppingCartContextType

    return (
        <div className="col">
            <div className="card">
                <div className="card-img">
                    <img src={item.imageName} alt={item.name} />
                    <div className="card-menu d-xl-none">
                        <button className="menu-link"><i className="fa-regular fa-heart"></i></button>
                        <button className="menu-link"><i className="fa-regular fa-code-compare"></i></button>
                        <button onClick={() => incrementQuantity({articleNumber: item.articleNumber, product: item, quantity: 1})} className="menu-link"><i className="fa-light fa-bag-shopping"></i></button>
                    </div>
                <NavLink to={`/products/${item.articleNumber}`} className="btn-theme d-xl-none">QUICK VIEW</NavLink>
                </div>
                <div className="card-body">
                    <p className="card-text">{item.category}</p>
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-rating">
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                    </p>
                    <p className="card-price">{currencyFormatter(item.price)}</p>              
                </div>
            </div>
        </div>
    )
}

export default ProductCard