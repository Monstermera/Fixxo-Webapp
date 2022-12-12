import React from 'react'
import { useShoppingCartContext, ShoppingCartContextType} from '../../contexts/ShoppingCartContext'
import { CartItemType } from '../../models/ShoppingCartModel'
import { currencyFormatter } from '../../utilities/currencyFormatter'

const ShoppingCartItem: React.FC<CartItemType> = ({item}) => {
    const { decrementQuantity, incrementQuantity, removeItem } = useShoppingCartContext() as ShoppingCartContextType

    return (
        <div className="shoppingcart-item">
            <div className="item-image">
                <img src={item.product.imageName} alt={item.product.name}/>
            </div>
            <div className="item-info">
                <div className="item-info-name">{item.product.name}</div>
                <div className="item-info-quantity">
                    <button onClick={() => decrementQuantity(item)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => incrementQuantity(item)}>+</button>
                </div>
            </div>
            <div className="item-price">
                <div>{currencyFormatter(item.product.price * item.quantity)}</div>
                <button onClick= {() => removeItem(item.articleNumber)}><i className="fa-solid fa-trash"></i></button>

            </div>
        </div>
    )
}

export default ShoppingCartItem