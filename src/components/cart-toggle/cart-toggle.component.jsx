import React from "react";
import { connect } from "react-redux";

import './cart-toggle.styles.scss'
import { ReactComponent as ShoppingIcon} from '../../resources/shopping-icon.svg'
import { toggleHidden } from "../../redux/cart/cart.action";
import { selectCurrentItems } from "../../redux/cart/cart.selector";
import { ItemCount } from "../../redux/cart/cart.utils";

const CartToggle = ({toggleHidden, item}) => {
console.log('cartToggle item:', item)
    return(
    <div className='header__nav--links__cart__toggle' onClick={toggleHidden}> 
        <ShoppingIcon className='header__nav--links__cart__toggle--icon'></ShoppingIcon>
        <span className='header__nav--links__cart__toggle--item-count'>{ItemCount(item)}</span>
    </div>
)}

const mapStateToProps = (state) => ({
    item: selectCurrentItems(state)
})

const mapDispatchToProps = (dispatch) => ({
    toggleHidden: () => dispatch(toggleHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartToggle)