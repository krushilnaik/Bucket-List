import { Group, Tabs, Text } from "@mantine/core";
import { motion } from "framer-motion";
import { useState } from "react";
import Wish from "../components/Wish";
import NewWish from "../components/NewWish";
import Avatar from "../components/Avatar";
import { getSession, useSession } from "next-auth/react";
import apolloClient from "../lib/apollo";
import { QUERY_USER } from "../utils/queries";

import styles from "./styles/Bucket.module.scss";

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
			loggedIn: session ? true : false,
			wishes: data.user.wishes,
			userImage: session.user.image,
		},
	};
};

function Bucket(props) {
	const { wishes, userImage, loggedIn } = props;

	console.log(loggedIn);

	const [todos, setTodos] = useState(
		wishes.filter((wish) => !wish.isCompleted)
	);

	const [dones, setDones] = useState(wishes.filter((wish) => wish.isCompleted));
	// const { data: session, status } = useSession();

	// if (status === "loading") {
	// 	return <div>loading...</div>;
	// }

	const optimisticAddWish = (newWish) => {
		setTodos([...todos, newWish]);
	};

	const optimisticSetDone = () => {
		// work in progress
	};

	return (
		<Group direction="row" spacing={30} position="center" align="flex-start">
			<Group direction="column" spacing={25} position="center">
				<Avatar className={styles.avatar} src={userImage} />
				<motion.div
					initial={{ y: -75, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
				>
					<Text
						size="xl"
						align="center"
						weight="bold"
						sx={(theme) => ({ color: theme.colors.gray[0] })}
					>
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
							<div className={styles.bucket}>
								<NewWish callback={optimisticAddWish} />
								{todos.map((item) => (
									<Wish key={item.id} wishId={item.id} item={item.wishText} />
								))}
							</div>
						</section>
					</Tabs.Tab>
					<Tabs.Tab label="Done" color="orange">
						<section className={styles.section}>
							<div className={styles.bucket}>
								{dones.map((item) => (
									<Wish key={item.id} item={item.wishText} />
								))}
							</div>
						</section>
					</Tabs.Tab>
				</Tabs>
			</motion.div>
		</Group>
	);
}

export default Bucket;
