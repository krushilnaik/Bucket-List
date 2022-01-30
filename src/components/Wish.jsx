import { useMotionValue, Reorder, useDragControls } from "framer-motion";
import { BsArrowLeftRight } from "react-icons/bs";

import styles from "./styles/Wish.module.scss";

function Wish(props) {
	const { item } = props;
	const y = useMotionValue(0);
	const controls = useDragControls();

	return (
		<Reorder.Item
			value={item}
			id={item}
			style={{ y }}
			dragListener={false}
			dragControls={controls}
			className={styles.wish}
		>
			<span>{item}</span>
			<BsArrowLeftRight onPointerDown={(event) => controls.start(event)} />
		</Reorder.Item>
	);
}

export default Wish;
