/** @format */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import StarCanvas from "@/components/main/StarBackground";
import Header from "@/components/main/Header";
import Footer from "@/components/main/Footer";
const inter = Inter({ subsets: ["latin"] });

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
			<body className={`${inter.className} bg-[#030014]`}>
				<Header />
				<StarCanvas />
				{children}

				<Footer />
			</body>
		</html>
	);
}
