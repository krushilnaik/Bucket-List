import { forwardRef } from "react";
import { Avatar, Group, Space, Text, UnstyledButton } from "@mantine/core";
import { BsChevronRight } from "react-icons/bs";
// import Avatar from "./Avatar";

const PFSuggestion = forwardRef(({ image, text, ...others }, ref) => (
	// <UnstyledButton
	// 	ref={ref}
	// 	sx={(theme) => ({
	// 		padding: "5px",
	// 		borderRadius: 7,
	// 		backgroundColor: theme.colors.blue[8],
	// 		"&:hover": {
	// 			backgroundColor: theme.colors.blue[9],
	// 		},
	// 	})}
	// 	{...others}
	// >
	<Group
		sx={() => ({
			backgroundColor: "darkslateblue",
			padding: "10px 7px",
			maxWidth: "17em",
			borderRadius: 10,
			":nth-child(even)": {
				flexDirection: "row-reverse",
				textAlign: "end",
				alignSelf: "end",
			},
			boxShadow: "0 0 5px white",
		})}
	>
		<Avatar src={image} radius="xl" />

		<div style={{ flex: 1 }}>
			<Text color="white" size="md" weight={500}>
				{text}
			</Text>
		</div>
	</Group>
	// </UnstyledButton>
));

export default PFSuggestion;
