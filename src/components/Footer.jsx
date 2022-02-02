import axios from "axios";
import { useState } from "react";
import { Badge, Button, Group, Text } from "@mantine/core";
import { getStripe } from "../lib/stripe";
import { useSession } from "next-auth/react";

const amounts = [5, 10, 15];

function Footer() {
	const [amount, setAmount] = useState(null);
	const { status } = useSession();

	/**
	 * Pass user-defined amount into Stripe API
	 * @type {React.MouseEventHandler}
	 */
	const handleSubmit = async (event) => {
		event.preventDefault();

		// Create a Checkout Session.
		axios.post("/api/checkout", { amount }).then(async (response) => {
			if (response.statusCode === 500) {
				console.error(response.message);
				return;
			}

			// Redirect to Checkout.
			const stripe = await getStripe();

			const { error } = await stripe.redirectToCheckout({
				sessionId: response.data.id,
			});

			if (error) {
				console.warn(error.message);
			}
		});
	};

	return (
		status === "authenticated" && (
			<Group
				direction="column"
				spacing={5}
				align="center"
				sx={() => ({
					position: "absolute",
					zIndex: 99999,
					bottom: 10,
					left: "50%",
					transform: "translateX(-50%)",
					width: "fit-content",
				})}
			>
				<Text weight={500} sx={() => ({ color: "white" })}>
					SUPPORT OUR WORK!
				</Text>
				<Group direction="row" spacing="xs">
					{amounts.map((_amount) => (
						<Button
							component="button"
							key={`donate-${_amount}`}
							color={_amount === amount ? "grape" : "gray"}
							onClick={() => setAmount(_amount)}
						>
							${_amount}
						</Button>
					))}
					<Button
						disabled={amount === ""}
						variant="gradient"
						gradient={{ from: "orange", to: "red" }}
						onClick={handleSubmit}
					>
						DONATE
					</Button>
				</Group>
				<Badge color="dark" size="md">
					⚡Powered by Stripe
				</Badge>
			</Group>
		)
	);
}

export default Footer;
