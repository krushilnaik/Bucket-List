import Stripe from 'Stripe';
import { laodStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js"

const stripePromise = laodStripe("STRIPE_SECRET_KEY_HERE");

export const getServerSideProps = async () => {

    const stripe = new Stripe("STRIPE_SECRET_KEY_HERE");

    const paymentIntent = await stripe.paymentIntents.create({
        amount: 5,
        currency: "usd"
    });
    return {
        props: {
            paymentIntent
        }
    }
}

const CheckoutPage = props => (
    <Elements stirpe={stripePromise}>
        <pre> {JSON.stringify(props, null, 2)} </pre>
    </Elements>
);

export default CheckoutPage;