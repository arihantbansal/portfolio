import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
	initialColorMode: "dark",
	useSystemColorMode: false,
};

const theme = extendTheme({
	fonts: {
		heading: `'IBM Plex Sans', sans-serif`,
		body: `'IBM Plex Sans', sans-serif`,
	},
	config,
});

export default theme;
