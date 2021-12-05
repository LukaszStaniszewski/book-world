import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import './cart-dropdown.styles.scss'

import { selectCurrentItems} from "../../redux/cart/cart.selector";
import { toggleHidden} from '../../redux/cart/cart.action'

const CartDropdown = ({item, toggleHidden}) => {
    console.log('item:', item)
    return(
      <section className='header__cart-dropdown'>
        <h3 className='header__cart-dropdown--title'>Twój koszyk</h3>
        {
            item.map(cartItem => cartItem.quantity > 0 ? <div className='header__cart-dropdown__item-info' key={cartItem.id}>
                <img className='header__cart-dropdown__item-info--img' src={cartItem.image} alt="" />
                <span className='header__cart-dropdown__item-info--name'>{cartItem.name}</span>
                <span>x{cartItem.quantity}</span>
               
            </div>
              : ''   )
        }
        <Link className='header__cart-dropdown--button' to='/cart/payment' onClick={toggleHidden}>Przejdź do koszyka</Link>
        

    </section>   
    )
   
}

const mapDispatchToProps = (dispatch) => ({
    toggleHidden: () => dispatch(toggleHidden())
})


const mapStateToProps = (state) => ({
    item: selectCurrentItems(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);