import styles from "./styles/Home.module.scss";
import { signIn } from "next-auth/react";
import { FaFillDrip } from "react-icons/fa";
import PFSuggestion from "../components/PFSuggestion";
import { motion } from "framer-motion";

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
			<motion.div
				initial={{ opacity: 0, x: -150 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 1 }}
			>
				<h1>
					<div>
						Welcome to <span className={styles.gradient_text}>Bucket List</span>
					</div>
					<FaFillDrip />
				</h1>
				<h2>Your before-I-die's in one place</h2>
				<p>
					Just about everyone has a bucket list, at least in their heads. But
					not many have a visual copy.{" "}
					<span className={styles.gradient_text}>BucketList</span> can be used
					as a reminder and also a motivator!
				</p>
				<button className={styles.sign_in} onClick={() => signIn()}>
					Sign up
				</button>
			</motion.div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, delay: 0.5 }}
				className={styles.hero_image}
			>
				<div className={styles.hero_image_inner}>
					{suggestions.map((_val, i) => (
						<PFSuggestion image={i % 2 === 0 ? PHINEAS : FERB} text={_val} />
					))}
				</div>
			</motion.div>
		</div>
	);
}

export default Home;
