import { FaPlusCircle } from "react-icons/fa";
import styles from "./styles/NewWish.module.scss";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { ADD_WISH } from "../utils/mutations";

function NewWish({ callback }) {
	const { data: session, status } = useSession();
	const [wishText, setWishText] = useState("");

	const [addWish, { error }] = useMutation(ADD_WISH, {
		variables: {
			wishText,
			userId: status === "authenticated" && session.user.id,
		},
	});

	if (status === "loading") {
		return <div>Loading...</div>;
	}

	if (error) {
		console.log(error);
	}

	const handleClick = async (event) => {
		event.preventDefault();
		const newWish = await addWish();
		callback(newWish.data.addWish);
	};

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
			<button type="submit" onClick={handleClick}>
				<FaPlusCircle />
			</button>
		</form>
	);
}

export default NewWish;
