/** @format */
import styles from ".././styles/component_styles/Home.module.scss";
import Projects from ".././components/main/Projects";
import Hero from ".././components/main/Hero";
import Skills from ".././components/main/Skills";
// import Courses from "@/components/main/Courses";

// import Image from "next/image";

export default function Home() {
	return (
		<main className={styles["grid-home"]}>
			<div className={styles["section-division"]}>
				<Hero />
				<Skills />
				<Projects />
				{/* <Courses /> */}
			</div>
		</main>
	);
}
