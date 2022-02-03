import { useMutation } from "@apollo/client";
import { FaCheckDouble } from "react-icons/fa";
import { MARK_AS_DONE } from "../utils/mutations";
import styles from "./styles/Wish.module.scss";

function Wish(props) {
	const { wishId, item, callback } = props;

	console.log(wishId);

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
		} else {
			console.log(moddedWish.data);
		}

		callback(moddedWish.data.markWishDone);
	};

	return (
		<div className={styles.wish}>
			<button onClick={handleClick}>
				<FaCheckDouble />
			</button>
			<span>{item}</span>
		</div>
	);
}

export default Wish;
