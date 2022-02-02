import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { destroyCookie } from "nookies";
import styles from "./styles/Checkout.module.scss";
import { Button } from "@mantine/core";


const CheckoutForm = ({ paymentIntent }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [checkoutError, setCheckoutError] = useState();
  const [checkoutSuccess, setCheckoutSuccess] = useState();

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const {
        error,
        paymentIntent: { status }
      } = await stripe.confirmCardPayment(paymentIntent.client_secret, {
        payment_method: {
          card: elements.getElement(CardElement)
        }
      });

      if (error) throw new Error(error.message);

      if (status === "succeeded") {
        setCheckoutSuccess(true);
        destroyCookie(null, "paymentIntentId");
      }
    } catch (err) {
      alert(err.message);
      setCheckoutError(err.message);
    }
  };

  if (checkoutSuccess) return <p>Payment successful!</p>;

  return (
    <div className={styles.checkout}>
      <form onSubmit={handleSubmit}>
        <CardElement />

          <Button type="submit" disabled={!stripe} variant="gradient" gradient={{ from: "orange", to: "red" }} onClick={""}>
            DONATE
          </Button>

        {checkoutError && <span style={{ color: "red" }}>{checkoutError}</span>}
      </form >
    </div >
  );
};

export default CheckoutForm;