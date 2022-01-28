import { Button, Group, Space } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Avatar from "./Avatar";

import styles from "./styles/Nav.module.scss";

function Nav() {
	const { asPath } = useRouter();

	return (
		<nav className={styles.nav}>
			<Group position="right">
				<Link href="/" passHref>
					<Button component="a">Home</Button>
				</Link>
				<Link href="/bucket" passHref>
					<Button component="a">Bucket</Button>
				</Link>
				{asPath !== "/bucket" ? (
					<Avatar inNav={true} src="https://via.placeholder.com/200x200" />
				) : (
					<Space w={45}></Space>
				)}
			</Group>
		</nav>
	);
}

export default Nav;
