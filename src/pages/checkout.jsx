import React from "react";
import Stripe from "stripe";
import { parseCookies, setCookie } from "nookies";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "../components/CheckoutForm";

const stripeSecret = `${process.env.STRIPE_SECRET}`

const stripePromise = loadStripe("pk_test_51KNSXfIW0PJEnifXJ0lxdieLSM4hAObZXhY3H7txnvZ2x9QKirybibxJehixNnOM2KbqzwNuP4PjODu3wMpdcrV300v6l26v3y");

export const getServerSideProps = async ctx => {
  const stripe = new Stripe(stripeSecret);

  let paymentIntent;

  const { paymentIntentId } = await parseCookies(ctx);

  if (paymentIntentId) {
    paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    return {
      props: {
        paymentIntent
      }
    };
  }

  paymentIntent = await stripe.paymentIntents.create({
    amount: 500,
    currency: "usd"
  });

  setCookie(ctx, "paymentIntentId", paymentIntent.id);

  return {
    props: {
      paymentIntent
    }
  };
};

const CheckoutPage = ({ paymentIntent }) => (
  <Elements stripe={stripePromise}>
    <CheckoutForm paymentIntent={paymentIntent} />
  </Elements>
);

export default CheckoutPage;