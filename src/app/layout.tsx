/** @format */

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import Header from ".././components/main/Header";
import Footer from ".././components/main/Footer";
const Inter = localFont({
	src: "./InterVariable.woff2",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Portfólio Hazel",
	description: "Criado com empenho e carinho.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${Inter.className} bg-[#030014]`}>
				<Header />
				{children}

				<Footer />
			</body>
		</html>
	);
}
