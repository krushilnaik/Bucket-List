import { useMutation } from "@apollo/client";
import { MARK_AS_DONE } from "../utils/mutations";
import styles from "./styles/Wish.module.scss";

function Wish(props) {
	const { wishId, item } = props;

	const [markDone, { error }] = useMutation(MARK_AS_DONE, {
		variables: { wishId },
	});

	if (error) {
		console.error(error);
	}

	const handleClick = async () => {
		await markDone();
	};

	return (
		<div className={styles.wish}>
			<button onClick={handleClick}>x</button>
			<span>{item}</span>
		</div>
	);
}

export default Wish;
