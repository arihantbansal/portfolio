import type { AppProps } from "next/app";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import "../styles/globals.css";
import "@fontsource/ibm-plex-sans";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider>
			<Flex minH="100vh" direction="column" bgColor="000">
				<Component {...pageProps} />
			</Flex>
		</ChakraProvider>
	);
}

export default MyApp;
