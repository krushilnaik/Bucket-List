import styles from "./styles/Result.module.scss";
import { Button } from "@mantine/core";
import Link from "next/link";

function StripeCompletedPage() {
	return (
		<div className={styles.result}>
			<h1>Thanks for your support!! 👍</h1>
			<Link href="/" passHref>
				<Button sx={() => ({ width: "fit-content", margin: "auto" })}>
					Return Home
				</Button>
			</Link>
		</div>
	);
}

export default StripeCompletedPage;
