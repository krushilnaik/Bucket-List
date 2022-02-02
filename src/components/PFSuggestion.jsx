import { forwardRef } from "react";
import { Avatar, Group, Text } from "@mantine/core";

const PFSuggestion = forwardRef(({ image, text, ...others }, ref) => (
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
));

PFSuggestion.displayName = "PFSuggestion";

export default PFSuggestion;
