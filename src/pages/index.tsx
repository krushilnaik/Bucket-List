import { motion } from "framer-motion";

import styles from "./styles/Home.module.scss";

function Home() {
	return (
		<main>
			<motion.img
				src="https://via.placeholder.com/50x50"
				className={styles.avatar}
				layoutId="avatar"
			/>
		</main>
	);
}

export default Home;
