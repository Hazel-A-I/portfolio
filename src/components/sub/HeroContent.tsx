/** @format */

"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "../../utils/motion";
import spanStyles from "../../styles/general_styles/_span.module.scss";
import { TypeAnimation } from "react-type-animation";
import styles from "../../styles/component_styles/Hero.module.scss";

const HeroContent = () => (
	<motion.div
		initial="hidden"
		animate="visible"
		className={styles["hero-content"]}>
		<div className={styles["left-area-hero"]}>
			<motion.div
				variants={slideInFromLeft(0.5)}
				className={styles["main-text-hero"]}>
				<span className={spanStyles["colorful-span"]}>Olá, eu sou</span>
				<TypeAnimation
					sequence={[
						"Hazel",
						2000,
						"Web Developer",
						1000,
						"Mobile Developer",
						1000,
					]}
					wrapper="span"
					speed={50}
					style={{ display: "inline-block" }}
					repeat={Infinity}
					cursor={true}
				/>
				<span>
					Eu crio incríveis e{}
					<span className={spanStyles["colorful-span"]}> estilosos </span>
					projetos
				</span>
			</motion.div>

			<motion.p
				variants={slideInFromLeft(0.8)}
				className={styles["secondary-text-hero"]}>
				Sou um desenvolvedor com experiência em{" "}
				<span className={spanStyles["colorful-span"]}>Websites</span>,{" "}
				<span className={spanStyles["colorful-span"]}>Mobile apps</span>, e{" "}
				<span className={spanStyles["colorful-span"]}>Metodologias Ágeis</span>
			</motion.p>

			<div className={styles["buttons-area-hero"]}>
				<motion.a
					variants={slideInFromLeft(1)}
					href="mailto:hazelinacio@gmail.com"
					whileHover={{ scale: 0.98 }}
					className={`${styles["hero-button"]} button-primary`}>
					<span className="no-select">Me contrate</span>
				</motion.a>

				<motion.a
					variants={slideInFromLeft(1)}
					href="/resume_hazel.docx"
					download="resume_hazel.docx"
					whileHover={{ scale: 0.98 }}
					className={`${styles["hero-button"]} button-primary`}>
					<span className="no-select">Download CV</span>
				</motion.a>
			</div>
		</div>

		<motion.div
			variants={slideInFromRight(0.8)}
			className={styles["right-area-hero"]}>
			<div className={styles["blob-profile-pic"]}></div>
		</motion.div>
	</motion.div>
);

export default HeroContent;
