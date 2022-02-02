import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

/**
 * Load pre-existing Stripe instance
 * or create a new one if none exists
 */
export const getStripe = () => {
	if (!stripePromise) {
		stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
	}

	return stripePromise;
};
