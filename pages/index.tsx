import { Flex, Image, Heading, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>0xarihant</title>
				<meta
					name="description"
					content="Portfolio site built with TypeScript + Next.js"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Flex justify="center" align="center" direction="column">
				<Image
					src="https://pbs.twimg.com/profile_images/1537100684570423296/FXnUSb12_400x400.jpg"
					alt="A headshot of Arihant"
					boxSize="10em"
					borderRadius="full"
					m="2"
				/>
				<Heading as="h1">Hi, I&apos;m Arihant 👋, a developer</Heading>
				<Text></Text>
			</Flex>
		</>
	);
};

export default Home;

