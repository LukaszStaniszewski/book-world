import React from "react";
import { connect } from "react-redux";
import { addItem, removeItem } from "../../redux/cart/cart.action";

import './paymet-frame.styles.scss'


const PaymentFrame = ({cartItem, addItem, removeItem, totalPrice}) => {
const {name, author, image, price, quantity} = cartItem
console.log('PaymentFrameState:', cartItem)
console.log('TotalPrice:', totalPrice)
    return(
        
    <div className='payment-page__main__left'>
        <div className='payment-page__main__left__details'> 
            <img className='payment-page__main__left__details--img' src={image} alt="" />
            <div className='payment-page__main__left__details__info'> 
                <span className='payment-page__main__left__details__info--name'>{name}</span>
                <span className='payment-page__main__left__details__info--author'>{author}</span>
                <div className='payment-page__main__left__details__info__quantity'>
                    <span className='payment-page__main__left__details__info__quantity--remove' onClick={()=>removeItem(cartItem)}>-</span>                           
                    <span className='payment-page__main__left__details__info__quantity--number'>{quantity}</span>
                    <span className='payment-page__main__left__details__info__quantity--add' onClick={()=>addItem(cartItem)}>+</span>
                </div>
                <span className='payment-page__main__left__details__info--price'>{price * quantity}zł</span>
                
            </div>
        </div>
    </div>
   
    )
}

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item)),
    
})

export default connect(null, mapDispatchToProps)(PaymentFrame);