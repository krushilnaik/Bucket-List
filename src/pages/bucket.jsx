import { Group, Tabs, Text } from "@mantine/core";
import { motion } from "framer-motion";
import { useState } from "react";
import { Reorder } from "framer-motion";
import styles from "./styles/Bucket.module.scss";
import Wish from "../components/Wish";
import NewWish from "../components/NewWish";
import Avatar from "../components/Avatar";
import { getSession, useSession } from "next-auth/react";
import apolloClient from "../lib/apollo";
import { QUERY_USER } from "../utils/queries";

export const getServerSideProps = async (ctx) => {
	const session = await getSession(ctx);

	const { data } = await apolloClient.query({
		query: QUERY_USER,
		variables: {
			userId: session.user.id,
		},
	});

	return {
		props: {
			wishes: data.user.wishes,
		},
	};
};

const initialTodos = ["🍅 Tomato", "🥒 Cucumber", "🧀 Cheese", "🥬 Lettuce"];
const initialDones = ["🥑 Avocado", "🍕 Pizza", "🍟 Fries"];

function Bucket(props) {
	const { wishes } = props;

	const [todos, setTodos] = useState(
		wishes.filter((wish) => !wish.isCompleted)
	);
	const [dones, setDones] = useState(wishes.filter((wish) => wish.isCompleted));
	const { data: session, status } = useSession();

	if (status === "loading") {
		return <div>loading...</div>;
	}

	// const { loading, data } = useQuery(QUERY_USER, {
	// 	variables: {
	// 		userId: session.user.id,
	// 	},
	// });

	// if (loading) {
	// 	return <div>loading...</div>;
	// }

	// console.log("the data", data);

	return (
		<Group direction="row" spacing={30} position="center" align="flex-start">
			<Group direction="column" spacing={25} position="center">
				<Avatar className={styles.avatar} src={session.user.image} />
				<motion.div
					initial={{ y: -75, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
				>
					<Text size="xl" align="center" weight="bold">
						Your Bucket
					</Text>
				</motion.div>
			</Group>

			<motion.div
				initial={{ x: 75, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
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
									<Wish key={item.id} item={item.wishText} />
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
									<Wish key={item.id} item={item.wishText} />
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
