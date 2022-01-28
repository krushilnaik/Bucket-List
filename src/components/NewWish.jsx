import { TextInput } from "@mantine/core";
import { FaPlusCircle } from "react-icons/fa";
import styles from "./styles/NewWish.module.scss";

function NewWish() {
	return (
		<form className={styles.new_wish}>
			<input
				type="text"
				name="new_wish"
				id="new_wish"
				placeholder="Add something:"
			/>
			<button type="submit">
				<FaPlusCircle />
			</button>
		</form>
	);
}

export default NewWish;
