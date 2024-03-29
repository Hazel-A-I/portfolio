/** @format */

import Projects from "@/components/main/Projects";
import Hero from "../components/main/Hero";
import Skills from "@/components/main/Skills";

// import Image from "next/image";

export default function Home() {
	return (
		<main className="h-full w-full max-w-[144rem] mx-auto">
			<div className="flex flex-col  gap-[8rem] ">
				<Hero />
				<Skills />
				<Projects />
			</div>
		</main>
	);
}
