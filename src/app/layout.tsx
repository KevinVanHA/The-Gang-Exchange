import type { Metadata } from "next";
import { Providers } from "@/components/shared/Providers";
import Head from 'next/head';
import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({ subsets: ['latin'] });
import { ColorModeScript } from "@chakra-ui/react";
import { Navbar } from "@/components/shared/Navbar";
import { AutoConnect } from "thirdweb/react";
import { client } from "@/consts/client";

export const metadata: Metadata = {
	title: "Marketplace",
	description: " Hustle for Gang Gold. Stack Up. Dominate the Market. ",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" data-theme="dark" style={{ colorScheme: "dark" }} className={montserrat.className}>
			<Head>
				<ColorModeScript initialColorMode="dark" />
			</Head>
			   <body className="chakra-ui-dark" style={{ paddingBottom: "100px" }}>
			     <Providers>
			       <AutoConnect client={client} />
			       <Navbar />
			       {children}
			     </Providers>
			   </body>
		</html>
	);
}
