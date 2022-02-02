import styles from "./styles/Wish.module.scss";

function Wish(props) {
	const { item } = props;

	return <div className={styles.wish}>{item}</div>;
}

export default Wish;
