import React from 'react';
import './CollectionItem.scss';
import CustomButon from '../customButton/CustomButton';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart-action';

const CollectionItem = ({item, addItem}) =>{
    const {name, price, imageUrl} = item;
    return (
            <div className = 'collection-item'>
                <div className='image'
                    style={{backgroundImage: `url(${imageUrl})`}}>
                </div>
                <div className='collection-footer'>   
                    <span className='name'>{name}</span>
                    <span className='price'>{price}</span>
                </div>
                <CustomButon onClick={() =>addItem(item)} inverted>ADD TO CART</CustomButon>
            </div>
    );
}
const mapDispatchToProps = (dispatch) =>({
    addItem: item => dispatch(addItem(item))
})
export default connect(null, mapDispatchToProps)(CollectionItem);