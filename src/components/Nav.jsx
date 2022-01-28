import { Button, Group, Menu, Space } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import Avatar from "./Avatar";

import styles from "./styles/Nav.module.scss";
import UserButton from "./UserButton";

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
				<Menu
					withArrow
					placement="center"
					control={
						<UserButton
							showAvatar={asPath !== "/bucket"}
							image="https://via.placeholder.com/200x200"
							name="Krushil Naik"
							email="krushilnaik96@gmail.com"
						/>
					}
				>
					<Menu.Label>Application</Menu.Label>
					<Menu.Item icon={<FaSignOutAlt />}>Logout</Menu.Item>
				</Menu>
			</Group>
		</nav>
	);
}

export default Nav;
