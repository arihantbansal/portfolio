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
				<meta property="og:title" content="Arihant" key="title" />
			</Head>
			<Box p="12" bg="black" minH="100vh">
				<Heading>gm!</Heading>
				<br />
				<Text>
					i&apos;m{" "}
					<CustomLink href="https://explorer.solana.com/address/GsuyNHX76ZGXwisQ2qSyP6nNUgx2DxNtCQXESVswzC6F">
						Arihant
					</CustomLink>{" "}
					- a 20 yr old internet craftsman. just a fancy way to say i build this on the internet.{" "}
				</Text>
				<br />
				<Text>
					find me on <CustomLink href="https://twitter.com/_arihantbansal">twitter</CustomLink> or{" "}
					<CustomLink href="https://github.com/arihantbansal">github</CustomLink>.
				</Text>
				<br />
				<Text>
					currently building products in web3 while trying to graduate with my bachelors in
					engineering from bits pilani, india.
				</Text>
				<br />
				<Text color="gray">arihantbansal dot sol arihantbansal dot eth</Text>
			</Box>
		</>
	);
};

export default Home;
