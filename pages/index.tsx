import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { FaTwitter } from "react-icons/fa";
import { CustomLink } from "../components/CustomLink";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>0xarihant</title>
			</Head>
			<Box p="4">
				<Flex alignItems="center" justifyContent="space-between" mx="auto">
					<Text>Arihant Bansal</Text>
					<Flex>
						<CustomLink href="https://twitter.com/_arihantbansal">
							<IconButton
								aria-label="Twitter"
								icon={<FaTwitter />}
								variant="ghost"
								fontSize="20px"
								_hover={{ color: "#1DA1F2" }}
							/>
						</CustomLink>
					</Flex>
				</Flex>
			</Box>
		</>
	);
};

export default Home;
