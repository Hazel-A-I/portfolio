/** @format */
"use client";
import React from "react";
import { motion } from "framer-motion";
import {
	slideInFromLeft,
	slideInFromRight,
	slideInFromTop,
} from "@/utils/motion";
import { PowerIcon } from "@heroicons/react/16/solid";

const SkillText = () => {
	return (
		<div className="w-full h-auto flex flex-col items-center justify-center">
			<motion.div
				variants={slideInFromTop}
				className="Welcome-box p-[1.2rem] mb-[1.5rem] border border-[#7042f88b] opacity-[0.9]">
				<PowerIcon className="text-[#b49bff] mr-[1rem] h-[2rem] w-[2rem]" />
				<h1 className="Welcome-text text-[1.6rem]">
					Check my development skills!
				</h1>
			</motion.div>
			<motion.div
				variants={slideInFromLeft(0.5)}
				className="text-[3rem] text-white font-bold mt-[1rem] text-center mb-[1.5rem]">
				<span className="colorful-span">
					Making apps with modern technologies
				</span>
			</motion.div>
			<motion.div
				variants={slideInFromRight(0.5)}
				className="cursive text-[2.4rem] text-gray-200 mb-[2.5rem] mt-[1rem] text-center">
				And adapting to your team necessities
			</motion.div>
		</div>
	);
};

export default SkillText;
