import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

export const CustomLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
	<NextLink href={href} passHref>
		<Link target="_blank" color="blue.300">
			{children}
		</Link>
	</NextLink>
);
