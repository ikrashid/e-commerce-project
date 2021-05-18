import React from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CartIcon from '../cartIcon/CartIcon';
import CartDropdown from '../cartDropdown/CartDropdown';
import {selectHidden} from '../../redux/cart/cart-selectors';
import {selectCurrentUser} from '../../redux/user/user-selectors';

const Header = ({signedIn, hidden}) =>(
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>Shop</Link>
            <Link className='option' to='/shop'>Contact</Link>
            {signedIn ? 
                (<div className='option' onClick={() => auth.signOut()}>Sign Out</div>) 
                : (<Link className='option' to='/signIn'></Link>)
            }
            <CartIcon/>
        </div>
        {hidden ? null : <CartDropdown/>}
    </div>

);
const mapStateToProps = createStructuredSelector({
    signedIn: selectCurrentUser,
    hidden: selectHidden
})
export default connect(mapStateToProps)(Header);

// we can use hidden as a prop because we're getting access to the state (through the connect method)
// why state.cart.hidden? because cart is the name of our reducer, and hidden is the property defined in cartReducer
// then use this property to toggle the icon