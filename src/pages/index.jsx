import styles from "./styles/Home.module.scss";
import { signIn } from "next-auth/react";
import { FaFillDrip } from "react-icons/fa";
import PFSuggestion from "../components/PFSuggestion";
import { motion } from "framer-motion";
import Link from "next/link";

const suggestions = [
	"Building a rocket",
	"Fighting a mummy",
	"Climbing up the Effiel Tower",
	"Discovering something that doesn't exist",
	"Giving a monkey a shower",
	"Surfing tidal waves",
	// "Creating nanobots",
	// "Locating Frankenstein's brain",
];

const PHINEAS = "/images/phineas.png";
const FERB = "/images/ferb.jpg";

function Home() {
	return (
		<div className={styles.hero}>
			<div
				className={styles.call_to_action}
				// initial={false}
				// transition={{ duration: 1 }}
			>
				<motion.h1 layoutId="header" transition={{ duration: 0.5 }}>
					<div>
						Welcome to <span className={styles.gradient_text}>Bucket List</span>
					</div>
					<FaFillDrip />
				</motion.h1>
				<h2>Your before-I-die's in one place</h2>
				<p>
					Just about everyone has a bucket list, at least in their heads. But
					not many have a visual copy.{" "}
					<span className={styles.gradient_text}>BucketList</span> can be used
					as a reminder and also a motivator!
				</p>
				<Link href="/auth/sign_in">
					<button className={styles.sign_in}>Sign up</button>
				</Link>
			</div>
			<div className={styles.container}>
				<motion.div
					layoutId="hero_gradient"
					initial={false}
					animate={{ rotate: 135 }}
					className={styles.gradient_square}
				></motion.div>
				<div className={styles.hero_image}>
					<div className={styles.hero_image_inner}>
						{suggestions.map((_val, i) => (
							<PFSuggestion
								key={`pf-${i}`}
								image={i % 2 === 0 ? PHINEAS : FERB}
								text={_val}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
