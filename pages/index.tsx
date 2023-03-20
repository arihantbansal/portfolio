import { Box, Text, Heading, Divider } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { CustomLink } from "../components/CustomLink";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Arihant</title>
				<meta property="og:title" content="Arihant" key="title" />
			</Head>
			<Box p="12" bg="black" minH="100vh" maxW="40vw">
				<Box paddingBottom="5">
					<Heading>gm!</Heading>
					<br />
					<Text>
						i&apos;m{" "}
						<CustomLink href="https://explorer.solana.com/address/GsuyNHX76ZGXwisQ2qSyP6nNUgx2DxNtCQXESVswzC6F">
							Arihant
						</CustomLink>{" "}
						- a 20 yr old internet craftsman. just a fancy way to say i build this on the internet.{" "}
						i am passionate about privacy, decentralization and distributed systems.
					</Text>
					<br />
					<Text>
						currently building products in web3 while trying to graduate with my bachelors in
						engineering from{" "}
						<CustomLink href="https://www.bits-pilani.ac.in/goa">bits pilani</CustomLink>, india.
					</Text>
					<br />
					<Text>
						find me on <CustomLink href="https://twitter.com/_arihantbansal">twitter</CustomLink> or{" "}
						<CustomLink href="https://github.com/arihantbansal">github</CustomLink>.
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
				<Box paddingTop="5">
					<Heading>buidls</Heading>
					<br />
					<Box paddingY={"2"}>
						<Text>
							<CustomLink href="https://github.com/deaudit/deaudit">NiftyClick</CustomLink> -
							capture your memories as nfts on solana. easy as click, edit, mint. won a grant by
							solana foundation.
						</Text>
					</Box>
					<Box paddingY={"2"}>
						<Text>
							<CustomLink href="https://github.com/deaudit/deaudit">DeAudit</CustomLink> - an
							onchain decentralized smart contract audit marketplace. get paid to find
							vulnerabilities in smart contracts. won prizes @ polygon buidlit &apos;22 and filecoin
							microgrant.
						</Text>
					</Box>
					<Box paddingY={"2"}>
						<Text>
							<CustomLink href="https://gmi-name-service.vercel.app/">gmi name service</CustomLink>{" "}
							- get your own .gmi tld on polygon chain.
						</Text>
					</Box>
					<Box paddingY={"2"}>
						<Text>
							<CustomLink href="https://darth-fandom.vercel.app/">darth fandom</CustomLink> -
							onchain board to share your fav star wars gifs.
						</Text>
					</Box>
				</Box>
				<Divider />
				<Box paddingTop="5">
					<iframe
						style={{ borderRadius: "12px", backgroundColor: "black" }}
						src="https://open.spotify.com/embed/playlist/6pFDVSoFjX5f0jQnnXbwhA?utm_source=generator&theme=0"
						width="100%"
						height="380"
						frameBorder="0"
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
						loading="lazy"></iframe>
				</Box>
			</Box>
		</>
	);
};

export default Home;
