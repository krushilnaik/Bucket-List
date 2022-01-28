import { Group, Tabs, Text } from "@mantine/core";
import { motion } from "framer-motion";
import styles from "./styles/Bucket.module.scss";

interface Props {}

function Bucket(props: Props) {
	const {} = props;

	return (
		<Group direction="row" spacing={30} position="center">
			<Group direction="column" spacing={25} position="center">
				<motion.img
					className={styles.avatar}
					src="https://via.placeholder.com/200x200"
					layoutId="avatar"
				/>
				<Text size="xl" align="center" weight="bold">
					Your Bucket
				</Text>
			</Group>

			<Tabs grow>
				<Tabs.Tab label="To do" color="cyan">
					<section className={styles.section}>
						<Text align="center">still need to do</Text>
					</section>
				</Tabs.Tab>
				<Tabs.Tab label="Done" color="orange">
					<section className={styles.section}>
						<Text align="center">have done</Text>
					</section>
				</Tabs.Tab>
			</Tabs>
		</Group>
	);
}

export default Bucket;
