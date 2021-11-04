import React from 'react';
import './stripe-button.styles.scss';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Jr8VJH0yfKxvwWnhZ7MYWra1ekURjwzSDX3LtiP8RuRpxodBP8zEyOVMO2CyJtOUJkRqkT768VRQsi8sdNlGPpN00mOoNDTT6';

    const onToken = token => {
        console.log(token);
        alert('Payment successful');
    }

    return (
        <StripeCheckout label='Pay Now'
                        name='CRWN Clothing Ltd.'
                        billingAddress
                        shippingAddress
                        image='https://svgshare.com/i/CUz.svg'
                        description={`Your total is $${price}`}
                        amount={priceForStripe}
                        panelLabel='Pay Now'
                        token={onToken}
                        stripeKey={publishableKey}>
        </StripeCheckout>
    );
}

export default StripeCheckoutButton;