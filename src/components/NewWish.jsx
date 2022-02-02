import { FaPlusCircle } from "react-icons/fa";
import styles from "./styles/NewWish.module.scss";
import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { useSession } from "next-auth/react";

function NewWish({ callback }) {
	const { data: session, status } = useSession();
	const [wishText, setWishText] = useState("");

	const ADD_WISH = gql`
		mutation Mutation($wishText: String!, $userId: String!) {
			addWish(wishText: $wishText, userId: $userId) {
				wishText
				isCompleted
			}
		}
	`;

	const [addWish, { error }] = useMutation(ADD_WISH, {
		variables: { wishText, userId: session.user.id },
	});

	if (error) {
		console.log(error);
	}

	/**
	 * TODO: hook this up to the addWish GraphQL mutation
	 */
	return (
		<form className={styles.new_wish}>
			<input
				type="text"
				name="new_wish"
				id="new_wish"
				placeholder="Add something:"
				value={wishText}
				onChange={(event) => setWishText(event.currentTarget.value)}
			/>
			<button
				type="submit"
				onClick={async (event) => {
					event.preventDefault();
					const newWish = await addWish();
					callback(newWish.data.addWish);
				}}
			>
				<FaPlusCircle />
			</button>
		</form>
	);
}

export default NewWish;
