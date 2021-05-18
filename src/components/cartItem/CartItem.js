import React from 'react';
import './CartItem.scss';

const CartItem = ({item: {imageUrl, price, name, quantity}}) =>(
    <div className='cart-item'>
        <img alt='item' src={imageUrl}/>
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>{quantity} x ${price}</span>
        </div>
    </div>
)

export default CartItem;