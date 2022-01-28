import { forwardRef } from "react";
import { Group, Space, Text, UnstyledButton } from "@mantine/core";
import { BsChevronRight } from "react-icons/bs";
import Avatar from "./Avatar";

const UserButton = forwardRef(
	({ image, name, email, icon, showAvatar, ...others }, ref) => (
		<UnstyledButton
			ref={ref}
			sx={(theme) => ({
				padding: "5px",
				borderRadius: 7,
				backgroundColor: theme.colors.blue[8],
				"&:hover": {
					backgroundColor: theme.colors.blue[9],
				},
			})}
			{...others}
		>
			<Group>
				{showAvatar ? (
					<Avatar src={image} inNav={true} />
				) : (
					<Space w={45} h={45} />
				)}

				<div style={{ flex: 1 }}>
					<Text color="white" size="sm" weight={500}>
						{name}
					</Text>

					<Text size="xs">{email}</Text>
				</div>

				{icon || <BsChevronRight />}
			</Group>
		</UnstyledButton>
	)
);

export default UserButton;
