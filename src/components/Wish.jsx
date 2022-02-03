import { useMutation } from "@apollo/client";
import { MARK_AS_DONE } from "../utils/mutations";
import styles from "./styles/Wish.module.scss";

function Wish(props) {
	const { wishId, item, callback } = props;

	const [markDone, { error }] = useMutation(MARK_AS_DONE, {
		variables: { wishId },
	});

	if (error) {
		console.error(error);
	}

	const handleClick = async () => {
		const moddedWish = await markDone();

		if (moddedWish.errors) {
			console.error(moddedWish.errors);
		}
		callback(moddedWish.data.markWishDone);
	};

	return (
		<div className={styles.wish}>
			<button onClick={handleClick}>x</button>
			<span>{item}</span>
		</div>
	);
}

export default Wish;
