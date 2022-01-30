import React from 'react';
import { CardElement, Elements } from '@stripe/react-stripe-js';
import CheckoutForm from "../components/CheckoutForm";

const CheckoutForm = ({ paymentIntent }) => {
    const handleSubmit = async e => {
        e.preventDefault();

        try {
            const { error, paymentIntent: { status } = await stripe.confirmCardPayment(paymentIntent.client_secret,{
                payment_method: {
                    card: elements.getElement(CardElement)
                }
            }) }

            if (error) throw new Error(error.message)

            if (stauts === "suceeded") {
                alert("Payment made!")
            }
        }
        catch (err) {
            aler(err.message);

        }

    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe}>
                DONATE
            </button>
        </form>
    );

}

export default CheckoutForm
