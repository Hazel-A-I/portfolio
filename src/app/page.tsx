/** @format */

import Header from "@/components/main/Header";
import Hero from "../components/main/Hero";
import StarCanvas from "@/components/main/StarBackground";

// import Image from "next/image";

export default function Home() {
	return (
		<main className="h-full w-full max-w-[144rem] mx-auto">
			<div className="flex flex-col  gap-[8rem] ">
				{/* <Header /> */}
				<Hero />
			</div>
		</main>
	);
}
