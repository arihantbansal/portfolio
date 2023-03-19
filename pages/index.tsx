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
			<Box p="12">
				<Footer />
			</Box>
		</>
	);
};

export default Home;
