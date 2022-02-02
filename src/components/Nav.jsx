import { Button, Group, Menu } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
import React from "react";
import { FaSignOutAlt, FaTrashAlt } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";

import UserButton from "./UserButton";

function Nav() {
	const { asPath } = useRouter();
	const { data: session } = useSession();

	return (
		<Group position="right" m="md" mb="xl">
			<Link href="/" passHref>
				<Button component="a">Home</Button>
			</Link>
			<Link href="/bucket" passHref>
				<Button component="a">Bucket</Button>
			</Link>
			{session ? (
				<Menu
					withArrow
					placement="center"
					control={
						<UserButton showAvatar={asPath !== "/bucket"} {...session.user} />
					}
				>
					<Menu.Label>Application</Menu.Label>
					<Menu.Item icon={<FaSignOutAlt />} onClick={() => signOut()}>
						Logout
					</Menu.Item>

					<Menu.Label>Danger zone</Menu.Label>
					<Menu.Item color="red" icon={<FaTrashAlt />}>
						Delete account
					</Menu.Item>
				</Menu>
			) : (
				<Link href="/auth/sign_in" passHref>
					<Button
						component="a"
						sx={() => ({
							width: 45,
							height: 45,
							padding: 0,
							borderRadius: 999,
						})}
					>
						<BsPersonCircle size={45} />
					</Button>
				</Link>
			)}
		</Group>
	);
}

export default Nav;
