import type { AppProps } from "next/app";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider>
			<Flex minH="100vh" direction="column">
				<Component {...pageProps} />
			</Flex>
		</ChakraProvider>
	);
}

export default MyApp;

