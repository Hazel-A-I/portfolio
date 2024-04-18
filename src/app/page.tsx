/** @format */
import "@/styles/component_styles/home.scss";
import Projects from "@/components/main/Projects";
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
// import Courses from "@/components/main/Courses";

// import Image from "next/image";

export default function Home() {
	return (
		<main className="grid-home">
			<div className="section-division">
				<Hero />
				<Skills />
				<Projects />
				{/* <Courses /> */}
			</div>
		</main>
	);
}
