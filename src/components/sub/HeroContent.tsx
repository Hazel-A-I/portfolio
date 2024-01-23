/** @format */

"use client";
import React from "react";
import { motion } from "framer-motion";
import {
	slideInFromLeft,
	slideInFromRight,
	slideInFromTop,
} from "@/utils/motion";
import "../styles/span.scss";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { once } from "events";

const HeroContent = () => (
	<motion.div
		initial="hidden"
		animate="visible"
		className="flex flex-row items-center justify-around px-[1.5rem] mt-[16rem] w-full z-[20]">
		<div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
			<motion.div
				variants={slideInFromLeft(0.5)}
				className="flex flex-col gap-[2rem] mt-[2.4rem] text-[6rem] leading-none font-bold text-white max-w-[60rem] w-auto h-auto">
				<span className="font-extrabold colorful-span">Olá, eu sou</span>
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
					Eu crio incríveis e<span className="colorful-span"> estilosos </span>
					projetos
				</span>
			</motion.div>

			<motion.p
				variants={slideInFromLeft(0.8)}
				className="text-[1.8rem] leading-[2.8rem] text-gray-400 my-[2rem] max-w-[50rem]">
				Sou um desenvolvedor Front-end com experiência em{" "}
				<span className="colorful-span">Websites</span>,{" "}
				<span className="colorful-span">Mobile apps</span>, e{" "}
				<span className="colorful-span">Metodologias Ágeis</span>
			</motion.p>

			<div className="flex flex-row w-full gap-[2rem]">
				<motion.a
					variants={slideInFromLeft(1)}
					href="mailto:hazelinacio@gmail.com"
					whileHover={{ scale: 0.98 }}
					className="py-[0.8rem] text-[1.6rem] button-primary text-center text-cyan-100  cursor-pointer rounded-[0.8rem] w-full max-w-[20rem]">
					<span className="no-select">Me contrate</span>
				</motion.a>

				<motion.a
					variants={slideInFromLeft(1)}
					href="/cv_hazel.docx"
					download="resume_hazel.docx"
					whileHover={{ scale: 0.98 }}
					className="py-[0.8rem]  text-[1.6rem] button-primary text-center text-cyan-100  cursor-pointer rounded-[0.8rem] w-full max-w-[20rem]">
					<span className="no-select">Download CV</span>
				</motion.a>
			</div>
		</div>
		<motion.div
			variants={slideInFromRight(0.8)}
			className="w-full h-full flex justify-center items-center ml-[1.5rem]">
			<Image
				src="/placeholder.png"
				alt="placeholder for later three.js"
				height={650}
				width={650}
			/>
		</motion.div>
	</motion.div>
);

export default HeroContent;
