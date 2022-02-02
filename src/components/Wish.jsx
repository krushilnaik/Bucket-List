import styles from "./styles/Wish.module.scss";
import { Checkbox } from '@mantine/core';

function Wish(props) {
	const { item } = props;

	return <div className={styles.wish}>
		<Checkbox />{item}
	</div>;
}

export default Wish;


