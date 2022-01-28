import { Group, Tabs, Text } from "@mantine/core";
import { motion } from "framer-motion";
import { useState } from "react";
import { Reorder } from "framer-motion";
import styles from "./styles/Bucket.module.scss";
import Wish from "../components/Wish";
import NewWish from "../components/NewWish";
import Avatar from "../components/Avatar";

// export const getServerSideProps = async (ctx) => ({
// 	props: {
// 		data: null,
// 	},
// });

const initialTodos = ["🍅 Tomato", "🥒 Cucumber", "🧀 Cheese", "🥬 Lettuce"];
const initialDones = ["🥑 Avocado", "🍕 Pizza", "🍟 Fries"];

function Bucket() {
	const [todos, setTodos] = useState(initialTodos);
	const [dones, setDones] = useState(initialDones);

	return (
		<Group direction="row" spacing={30} position="center" align="flex-start">
			<Group direction="column" spacing={25} position="center">
				<Avatar
					className={styles.avatar}
					src="https://via.placeholder.com/200x200"
				/>
				<motion.div
					initial={{ y: -75, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ type: "spring", stiffness: 150, delay: 0.3 }}
				>
					<Text size="xl" align="center" weight="bold">
						Your Bucket
					</Text>
				</motion.div>
			</Group>

			<motion.div
				initial={{ x: 75, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ type: "spring", stiffness: 125, delay: 0.2 }}
			>
				<Tabs grow>
					<Tabs.Tab label="To do" color="cyan">
						<section className={styles.section}>
							<Reorder.Group
								axis="y"
								onReorder={setTodos}
								className={styles.bucket}
								values={todos}
							>
								<NewWish />
								{todos.map((item) => (
									<Wish key={item} item={item} />
								))}
							</Reorder.Group>
						</section>
					</Tabs.Tab>
					<Tabs.Tab label="Done" color="orange">
						<section className={styles.section}>
							<Reorder.Group
								axis="y"
								onReorder={setDones}
								className={styles.bucket}
								values={dones}
							>
								{dones.map((item) => (
									<Wish key={item} item={item} />
								))}
							</Reorder.Group>
						</section>
					</Tabs.Tab>
				</Tabs>
			</motion.div>
		</Group>
	);
}

export default Bucket;
