import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripePayment = ({total}) => {

const stripeKey = 'pk_test_51JmEWEESDEebrMvBjzMgUTvNVzS5LobHeN7ckKkIjI8QoEweUGyBGNqlR6hckygefyffZWiiVRIbZlaHgJVw1e0y00SFp8nHAe'
const money = total*100
const onToken = (token) => {

    alert('płatność została pomyślnie zakończona')
}

return (
<StripeCheckout 
    name= "Book World"
    label="Zapłać kartą"
    panelLabel="Zapłać teraz"
    description={`Kwota do zapłacenia wynosi ${total}zł`}
    amount={money}
    currency="PLN"
    
    locale="pl"
    
    
    token={onToken}
    stripeKey={stripeKey}
    />
    
)
}

export default StripePayment