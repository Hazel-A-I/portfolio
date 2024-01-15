/** @format */

"use client";
import React from "react";
import { motion } from "framer-motion";
import {
	slideInFromLeft,
	slideInFromRight,
	slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/16/solid";
import "../styles/span.scss";
import Image from "next/image";

const HeroContent = () => (
	<motion.div
		initial="hidden"
		animate="visible"
		className="flex flex-row items-center justify-around px-[1.5rem] mt-[16rem] w-full z-[20]">
		<div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
			<motion.div
				variants={slideInFromTop}
				className="Welcome-box p-[0.8rem] border border-[#7042f88b] opacity-[0.9]">
				<SparklesIcon className="text-[#b49bff] mr-[1rem] h-[2rem] w-[2rem]" />
				<h1 className="Welcome-text text-[1.3rem]">Front-end Developer</h1>
			</motion.div>

			<motion.div
				variants={slideInFromLeft(0.5)}
				className="flex flex-col gap-[2rem] mt-[2.4rem] text-[6rem] leading-none font-bold text-white max-w-[60rem] w-auto h-auto">
				<span className="font-extrabold">Hello! I&apos;m Hazel</span>
				<span>
					I create awesome and
					<span className="colorful-span"> stylish </span>
					projects
				</span>
			</motion.div>

			<motion.p
				variants={slideInFromLeft(0.8)}
				className="text-[1.8rem] leading-[2.8rem] text-gray-400 my-[2rem] max-w-[50rem]">
				I&apos;m a Front-end developer with experience in{" "}
				<span className="colorful-span">Websites</span>,{" "}
				<span className="colorful-span">Mobile apps</span>, and{" "}
				<span className="colorful-span">Software development</span>
			</motion.p>

			<motion.a
				variants={slideInFromLeft(1)}
				href="/cv_hazel.docx"
				download="resume_hazel.docx"
				className="py-[0.8rem] text-[1.6rem] button-primary text-center text-cyan-100  cursor-pointer rounded-[0.8rem] max-w-[20rem]">
				<span className="no-select">Download my resume!</span>
			</motion.a>
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
