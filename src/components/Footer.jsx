import React, { useState } from "react";
import { Button } from "@mantine/core";

import styles from "./styles/Footer.module.scss";

const amounts = ["$5", "$10", "$15", "Other"];

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
			>
				DONATE
			</Button>
		</div>
	);
}

export default Footer;