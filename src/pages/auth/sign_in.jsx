import { useMediaQuery } from "@mantine/hooks";
import { motion } from "framer-motion";
import { getProviders, signIn } from "next-auth/react";
import { FaFillDrip } from "react-icons/fa";

import styles from "../styles/Auth.module.scss";

export default function SignIn({ providers }) {
	const isMobile = useMediaQuery("(max-width: 768px)");

	return (
		<div className={styles.center}>
			<motion.h1
				className={styles.header}
				layoutId="header"
				initial={false}
				animate={{ scale: isMobile ? 0.9 : 1.1 }}
				transition={{ duration: 0.5 }}
			>
				<div>
					Welcome to <span className={styles.gradient_text}>Bucket List</span>
				</div>
				<FaFillDrip />
			</motion.h1>
			<div className={styles.auth_links}>
				<motion.div
					layoutId="hero_gradient"
					initial={false}
					animate={{ rotate: 0 }}
					className={styles.gradient_square}
				></motion.div>

				{Object.values(providers).map((provider) => (
					<button
						key={provider.name}
						className={styles.button}
						data-provider={provider.id.toLowerCase()}
						onClick={() => signIn(provider.id)}
					>
						Sign in with {provider.name}
					</button>
				))}
			</div>
		</div>
	);
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
	const providers = await getProviders();
	return {
		props: { providers },
	};
}
