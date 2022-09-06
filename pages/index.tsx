import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { CustomLink } from "../components/CustomLink";
import Footer from "../components/Footer";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Arihant</title>
			</Head>
			<Box p="12">
				<Flex alignItems="center" justifyContent="space-between" mx="auto">
					<Heading as="h1" size="lg">
						Arihant Bansal
					</Heading>
				</Flex>
				<Box my="16">
					<Text as="h2" fontSize="3xl" fontWeight="normal">
						buildoor. engineering undergrad at bits pilani, india.
					</Text>
					<br />
					<Text as="h2" fontSize="3xl" fontWeight="normal">
						passionate about{" "}
						<Text as="span" bgGradient="linear-gradient(to right, #56ab2f, #a8e063)" bgClip="text">
							privacy
						</Text>
						,{" "}
						<Text as="span" bgGradient="linear-gradient(to right, #00b4db, #0083b0)" bgClip="text">
							data sovereignty
						</Text>
						, and{" "}
						<Text as="span" bgGradient="linear-gradient(to right, #00b4db, #0083b0)" bgClip="text">
							open source software.
						</Text>
					</Text>
				</Box>
				<Footer />
			</Box>
		</>
	);
};

export default Home;
