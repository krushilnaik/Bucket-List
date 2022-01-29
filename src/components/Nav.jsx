import { Button, Group, Menu } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FaSignOutAlt, FaTrashAlt } from "react-icons/fa";

import UserButton from "./UserButton";

function Nav() {
	const { asPath } = useRouter();

	return (
		<Group position="right" m="md" mb="xl">
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

				<Menu.Label>Danger zone</Menu.Label>
				<Menu.Item color="red" icon={<FaTrashAlt />}>
					Delete account
				</Menu.Item>
			</Menu>
		</Group>
	);
}

export default Nav;
