/** @format */

"use client";
import React from "react";
import { motion } from "framer-motion";
import {
	slideInFromLeft,
	slideInFromRight,
	slideInFromTop,
} from "@/utils/motion";
import "@/styles/general_styles/span.scss";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import "@/styles/component_styles/Hero.scss";

const HeroContent = () => (
	<motion.div initial="hidden" animate="visible" className="hero-content">
		<div className="left-area-hero">
			<motion.div variants={slideInFromLeft(0.5)} className="main-text-hero">
				<span className="colorful-span">Olá, eu sou</span>
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
					<span className="colorful-span"> estilosos </span>
					projetos
				</span>
			</motion.div>

			<motion.p variants={slideInFromLeft(0.8)} className="secondary-text-hero">
				Sou um desenvolvedor com experiência em{" "}
				<span className="colorful-span">Websites</span>,{" "}
				<span className="colorful-span">Mobile apps</span>, e{" "}
				<span className="colorful-span">Metodologias Ágeis</span>
			</motion.p>

			<div className="buttons-area-hero">
				<motion.a
					variants={slideInFromLeft(1)}
					href="mailto:hazelinacio@gmail.com"
					whileHover={{ scale: 0.98 }}
					className="hero-button button-primary">
					<span className="no-select">Me contrate</span>
				</motion.a>

				<motion.a
					variants={slideInFromLeft(1)}
					href="/resume_hazel.docx"
					download="resume_hazel.docx"
					whileHover={{ scale: 0.98 }}
					className="hero-button button-primary">
					<span className="no-select">Download CV</span>
				</motion.a>
			</div>
		</div>

		<motion.div variants={slideInFromRight(0.8)} className="right-area-hero">
			<div className="blob-profile-pic"></div>
		</motion.div>
	</motion.div>
);

export default HeroContent;
