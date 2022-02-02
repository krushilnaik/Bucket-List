import { getSession } from "next-auth/react";
import Stripe from "stripe";

// import { formatAmountForStripe } from "../../utils/helpers";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
	// https://github.com/stripe/stripe-node#configuration
	apiVersion: "2020-08-27",
});

/**
 * Convert an amount from our donation form
 * into the format Stripe expects
 * @param {number} amount
 */
function formatAmountForStripe(amount) {
	let numberFormat = new Intl.NumberFormat(["en-US"], {
		style: "currency",
		currency: "usd",
		currencyDisplay: "symbol",
	});

	const parts = numberFormat.formatToParts(amount);

	let zeroDecimalCurrency = parts.some((part) => part.type === "decimal");

	return zeroDecimalCurrency ? amount : Math.round(amount * 100);
}

export default async function handler(req, res) {
	const session = await getSession({ req });

	console.log(session);

	if (!session) {
		res.status(401).send("You need to be signed in to do that");
	}

	if (req.method === "POST") {
		const amount = req.body.amount;

		try {
			// Validate the amount that was passed from the client.
			if (!(amount >= 5 && amount <= 15)) {
				throw new Error("Invalid amount.");
			}

			/**
			 * @type {Stripe.Checkout.SessionCreateParams}
			 */
			const params = {
				submit_type: "donate",
				payment_method_types: ["card"],
				line_items: [
					{
						name: "Donation",
						amount: formatAmountForStripe(amount * 100),
						currency: "usd",
						quantity: 1,
					},
				],
				success_url: `${process.env.NEXT_PUBLIC_HOME_URL}/result?session_id={CHECKOUT_SESSION_ID}`,
				cancel_url: `${process.env.NEXT_PUBLIC_HOME_URL}/`,
			};

			/**
			 * @type {Stripe.Checkout.Session}
			 */
			const checkoutSession = await stripe.checkout.sessions.create(params);

			res.status(200).json(checkoutSession);
		} catch (err) {
			const errorMessage =
				err instanceof Error ? err.message : "Internal server error";

			console.log(err);
			res.status(500).json({ statusCode: 500, message: errorMessage });
		}
	} else {
		res.setHeader("Allow", "POST");
		res.status(405).end("Method Not Allowed");
	}
}
