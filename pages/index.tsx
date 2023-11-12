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
				<meta name="description" content="Arihant's personal site" />
				<meta
					name="keywords"
					content="Arihant, Arihant Bansal, ariban900, arihantbansal, portfolio, site, personal site, _arihantbansal, arihantbansal.sol, arihantbansal.eth"
				/>
				<meta property="og:image" content="%PUBLIC_URL%/image.png" />
				<meta property="og:title" content="Arihant's personal site" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://arihantbansal.xyz/" />
				<meta property="og:description" content="Arihant's personal site" />
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:title" content="Arihant" />
				<meta name="twitter:description" content="Arihant's personal site" />
				<meta name="twitter:url" content="https://arihantbansal.xyz/" />
				<meta property="twitter:image" content="%PUBLIC_URL%/image.png" />
			</Head>
			<Box paddingY="12" bg="black" minH="100vh" className="outer-box">
				<Box paddingBottom="5">
					<Heading>gm!</Heading>
					<br />
					<Text>
						i&apos;m{" "}
						<Text as="span" color="blue.300">
							Arihant
						</Text>{" "}
						- a software engineer based in India, building blockchain based systems. i am passionate
						about working on problems related to privacy and distributed systems.
					</Text>
					<br />
					<Text>
						i&apos;m working as a software engineer @{" "}
						<CustomLink href="https://elusiv.io/">Elusiv</CustomLink>, building a composable privacy layer for web3. also trying to graduate with my bachelors in engineering, majoring in
						electrical and electronics, from{" "}
						<CustomLink href="https://www.bits-pilani.ac.in/goa">bits pilani</CustomLink>, india.
					</Text>
					<br />
					<Text>
						find me on <CustomLink href="https://twitter.com/_arihantbansal">twitter</CustomLink> or{" "}
						<CustomLink href="https://github.com/arihantbansal">github</CustomLink>. (or{" "}
						<CustomLink href="https://linkedin.com/in/arihantbansal">linkedin</CustomLink> if
						you&apos;re into that.)
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
				<Box paddingTop="5" paddingBottom="5">
					<Heading>buidls</Heading>
					<br />
					<Box paddingY={"2"}>
						<Text>
							<CustomLink href="https://github.com/niftyclick">NiftyClick</CustomLink> - capture
							your memories as nfts on solana. easy as click, edit, mint. won a grant by solana
							foundation.
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
			</Box>
		</>
	);
};

export default Home;
