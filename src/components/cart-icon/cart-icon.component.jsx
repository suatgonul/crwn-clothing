import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import {toggleCartHidden} from "../../redux/cart/cart.actions";
import {connect} from "react-redux";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";

const CartIcon = ({dispatch, totalQuantity}) => (
    <div className='cart-icon' onClick={() => dispatch(toggleCartHidden())}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{totalQuantity}</span>
    </div>
)

const mapStateToProps = state => ({
    totalQuantity: selectCartItemsCount(state)
})

export default connect(mapStateToProps)(CartIcon);