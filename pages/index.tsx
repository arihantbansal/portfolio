import { Box, Flex, IconButton, Text, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { CustomLink } from "../components/CustomLink";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>0xarihant</title>
			</Head>
			<Box p="4">
				<Flex alignItems="center" justifyContent="space-between" mx="auto">
					<Heading as="h1" size="lg">
						Arihant Bansal
					</Heading>
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
						<CustomLink href="https://github.com/arihantbansal">
							<IconButton
								aria-label="GitHub"
								icon={<BsGithub />}
								variant="ghost"
								fontSize="20px"
								_hover={{}}
							/>
						</CustomLink>
						<CustomLink href="https://linkedin.com/in/arihantbansal">
							<IconButton
								aria-label="LinkedIn"
								icon={<FaLinkedin />}
								variant="ghost"
								fontSize="20px"
								_hover={{ color: "#0072b1" }}
							/>
						</CustomLink>
					</Flex>
				</Flex>

				<Box>
					<Text>
						web3 dev. serial builder. passionate about
						<Text
							as="span"
							bgGradient="linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)"
							bgClip="text">
							privacy
						</Text>
						, data sovereignty, and open source.
					</Text>
				</Box>
			</Box>
		</>
	);
};

export default Home;
