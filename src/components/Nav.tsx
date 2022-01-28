import { Button, Group, Space, Text } from "@mantine/core";
import Link from "next/link";
import React from "react";

import styles from "./styles/Nav.module.scss";

interface Props {}

function Nav(props: Props) {
	const {} = props;

	return (
		<nav className={styles.nav}>
			<Group position="right">
				<Link href="/">
					<Button component="a">Home</Button>
				</Link>
				<Link href="/bucket">
					<Button component="a">Bucket</Button>
				</Link>
				<Space w={45}></Space>
			</Group>
		</nav>
	);
}

export default Nav;
