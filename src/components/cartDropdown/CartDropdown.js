import React from 'react';
import CustomButton from '../customButton/CustomButton';
import './CartDropdown.scss';
import CartItem from '../cartItem/CartItem';
import {connect} from 'react-redux';
import {selectCartItems } from '../../redux/cart/cart-selectors';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart-action';

const Cart = ({cartItems, history, toggleCartHidden}) =>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {   cartItems.length ? 
            (cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>))
            :
            (<span className='empty-message'>Your cart is empty</span>)
        }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout'); toggleCartHidden()}}
            >GO TO CHECKOUT</CustomButton>
    </div>
)
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})
const mapDispatchToProps = dispatch =>({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));