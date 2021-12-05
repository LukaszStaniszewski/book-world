import React from "react";
import { connect } from "react-redux";

import './payment-page.styles.scss'
import PaymentFrame from "../../components/payment/payment-frame";
import { selectCurrentItems, selectCartsPrice } from "../../redux/cart/cart.selector"; 


const PaymentPage = ({item, totalValue}) => {
    return (
        <section className='payment-page'>
            <div className='payment-page--title' >Zamówienie od book-world</div>
            {
            totalValue > 0 ?
            <div className="payment-page__main">
                
                {
                    item.map(cartItem => 
                    cartItem.quantity > 0 ? <PaymentFrame key={cartItem.id} cartItem={cartItem}></PaymentFrame>
                    : '')
                }  
            </div>
            : <div className='payment-page__empty-cart'>Twój koszyk jest pusty</div>
        
            }
            <div className='payment-page__right'>
                    <div className='payment-page__right--title'>Kwota do zapłaty:</div>
                    <div className='payment-page__right--payment'>{totalValue}zł</div>
            </div>
        </section>
    )
}

const mapStateToProps = (state) => ({
    item: selectCurrentItems(state),
    totalValue: selectCartsPrice(state),
})

export default connect(mapStateToProps)(PaymentPage)