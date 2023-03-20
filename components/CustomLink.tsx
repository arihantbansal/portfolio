import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

export const CustomLink = ({
	href,
	colored = true,
	children,
}: {
	href: string;
	colored?: boolean;
	children: React.ReactNode;
}) => (
	<NextLink href={href} passHref>
		<Link target="_blank" color={colored ? "blue.300" : ""}>
			{children}
		</Link>
	</NextLink>
);
