/** @format */

import Header from "@/components/main/Header";
import Hero from "../components/main/Hero";

// import Image from "next/image";

export default function Home() {
	return (
		<main className="h-full w-full">
			<div className="flex flex-col h-[85rem] gap-[8rem]">
				{/* <Header /> */}
				<Hero />
			</div>
		</main>
	);
}
