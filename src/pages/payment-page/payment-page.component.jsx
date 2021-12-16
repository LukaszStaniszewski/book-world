import React from "react";
import { connect } from "react-redux";

import './payment-page.styles.scss'
import PaymentFrame from "../../components/payment/payment-frame";
import StripePayment from "../../components/stripe-payment/stripe-payment.component";
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
                <div className='payment-page__right--amount'>{totalValue}zł</div>
               <div className='payment-page__right__stripe-payment'>
                    <StripePayment className='payment-page__right__stripe-payment--button' total={totalValue}></StripePayment>
                    <div className='payment-page__right__stripe-payment--message'>
                    *Użyj poniższe dane aby zrealizować płatność*
                    <br></br>
                    Email: <span className='payment-page__right__stripe-payment--message--data'>dowolny adres email,</span>
                    <br></br>
                    Numer karty: <span className='payment-page__right__stripe-payment--message--data'>5555 5555 5555 4444,</span>
                    <br></br> 
                    Exp: <span className='payment-page__right__stripe-payment--message--data'>10/24,</span> 
                    <br></br>
                    CVV: <span className='payment-page__right__stripe-payment--message--data'>123</span>
                    </div>  
               </div>
            </div>
        </section>
    )
}

const mapStateToProps = (state) => ({
    item: selectCurrentItems(state),
    totalValue: selectCartsPrice(state),
})

export default connect(mapStateToProps)(PaymentPage)