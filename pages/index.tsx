import { Box, Flex, Text, Heading, Divider } from "@chakra-ui/react";
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
				<Box paddingBottom="5">
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
						engineering from{" "}
						<CustomLink href="https://www.bits-pilani.ac.in/goa">bits pilani</CustomLink>, india.
					</Text>
					<br />
					<Text color="gray">
						<CustomLink
							href="https://explorer.solana.com/address/GsuyNHX76ZGXwisQ2qSyP6nNUgx2DxNtCQXESVswzC6F"
							colored={false}>
							arihantbansal dot sol
						</CustomLink>{" "}
						<CustomLink
							href="https://etherscan.io/address/0xcd1151307f382f9301dabf07f563c93f6547ae06"
							colored={false}>
							arihantbansal dot eth
						</CustomLink>
					</Text>
				</Box>
				<Divider />
				<Box></Box>
			</Box>
		</>
	);
};

export default Home;
