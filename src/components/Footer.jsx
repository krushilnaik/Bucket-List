import React, { useState } from "react";
import { Button } from "@mantine/core";
// import { loadStripe } from "@stripe/stripe-js";
// import { useLazyQuery } from '@apollo/client';
// import { QUERY_CHECKOUT } from '../../utils/queries';

import styles from "./styles/Footer.module.scss";

const amounts = ["$5", "$10", "$15", "Other"];

// const stripePromise = loadStripe(
// 	"pk_test_51KNSXfIW0PJEnifXJ0lxdieLSM4hAObZXhY3H7txnvZ2x9QKirybibxJehixNnOM2KbqzwNuP4PjODu3wMpdcrV300v6l26v3y"
// );

function Footer() {
	const [value, setValue] = useState("");

	return (
		<div className={styles.donation}>
			<p>SUPPORT OUR WORK</p>
			{amounts.map((amount) => (
				<Button
					component="button"
					key={`donate-${amount}`}
					color={amount === value ? "grape" : "gray"}
					onClick={() => setValue(amount)}
				>
					{amount}
				</Button>
			))}
			<Button
				disabled={value === ""}
				variant="gradient"
				gradient={{ from: "orange", to: "red" }}
				onClick={""}
			>
				DONATE
			</Button>
		</div>
	);
}

export default Footer;