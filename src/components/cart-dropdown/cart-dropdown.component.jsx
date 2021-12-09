import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import './cart-dropdown.styles.scss'

import { selectCurrentItems} from "../../redux/cart/cart.selector";
import { removeItem, toggleHidden} from '../../redux/cart/cart.action'

const CartDropdown = ({item, toggleHidden, removeItem}) => {
    console.log('item:', item)
    return(
      <section className='header__cart-dropdown'>
        <h3 className='header__cart-dropdown--title'>Twój koszyk</h3>
        
            {   item.length ?
                item.map(cartItem => <div className='header__cart-dropdown__item-info' key={cartItem.id}>
                    <img className='header__cart-dropdown__item-info--img' src={cartItem.image} alt="" />
                    <span className='header__cart-dropdown__item-info--name'>{cartItem.name}</span>
                    <div className='header__cart-dropdown__item-info__right'>
                        <span className='header__cart-dropdown__item-info__right--item-count'>x{cartItem.quantity}</span>
                        <span className='header__cart-dropdown__item-info__right--remove-item' onClick={() => removeItem(cartItem)}>usuń</span>
                    </div>
                    
                </div>)
               : <div className='header__cart-dropdown--empty-cart'>Twój koszyk jest pusty
                    <div className='header__cart-dropdown--empty-cart--smaller-text'>Dodaj do koszyka przedmioty i kup je szybko i wygodnie.</div>
                </div>
                       
            }
        <Link className='header__cart-dropdown--button' title='flower' to='/cart/payment' onClick={toggleHidden}>Przejdź do koszyka</Link>
        

    </section>   
    )
   
}

const mapDispatchToProps = (dispatch) => ({
    toggleHidden: () => dispatch(toggleHidden()),
    removeItem: (item) => dispatch(removeItem(item))
})


const mapStateToProps = (state) => ({
    item: selectCurrentItems(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);