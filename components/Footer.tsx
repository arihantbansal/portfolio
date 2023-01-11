import { Text, Divider, HStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import { CustomLink } from "../components/CustomLink";

const Footer: NextPage = () => {
	return (
		<>
			<Divider />
			<HStack py="4" spacing="4">
				<CustomLink href="https://twitter.com/_arihantbansal">
					<Text>twitter</Text>
				</CustomLink>
				<CustomLink href="https://github.com/arihantbansal">
					<Text>github</Text>
				</CustomLink>
				<CustomLink href="https://linkedin.com/in/arihantbansal">
					<Text>linkedin</Text>
				</CustomLink>
			</HStack>
		</>
	);
};s

export default Footer;
