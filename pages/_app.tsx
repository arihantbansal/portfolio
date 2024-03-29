import type { AppProps } from "next/app";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import "../styles/globals.css";
import "@fontsource/ibm-plex-sans/400.css";
import theme from "../utils/theme";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Flex
				minH="100vh"
				direction="column"
				bgColor="black"
				justifyContent="center"
				alignItems="center">
				<Component {...pageProps} />
			</Flex>
		</ChakraProvider>
	);
}

export default MyApp;
