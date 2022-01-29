import { Text } from "@mantine/core";
import styles from "./styles/Home.module.scss";

function Home() {
	return (
		<div className={styles.hero}>
			<Text align="center" size="xl" weight="bold">
				Home page
			</Text>
		</div>
	);
}

export default Home;
