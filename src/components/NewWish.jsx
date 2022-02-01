import { FaPlusCircle } from "react-icons/fa";
import styles from "./styles/NewWish.module.scss";

function NewWish() {
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
			/>
			<button type="submit">
				<FaPlusCircle />
			</button>
		</form>
	);
}

export default NewWish;
