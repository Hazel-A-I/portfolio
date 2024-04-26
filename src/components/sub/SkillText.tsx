/** @format */
"use client";
import React from "react";
import { motion } from "framer-motion";
import {
	slideInFromLeft,
	slideInFromRight,
	slideInFromTop,
} from "../../utils/motion";
import { PowerIcon } from "@heroicons/react/16/solid";
import "../../styles/component_styles/Skills.scss";

const SkillText = () => {
	return (
		<div className="skill-text">
			<motion.div
				variants={slideInFromTop}
				className="Welcome-box stacks-message">
				<PowerIcon className="power-icon" />
				<h1 className="Welcome-text stacks-text">
					Veja minha stack de desenvolvimento!
				</h1>
			</motion.div>
			<motion.div variants={slideInFromLeft(0.5)} className="skills-title">
				<span className="colorful-span">
					Criando aplicativos com tecnologias modernas
				</span>
			</motion.div>
			<motion.div
				variants={slideInFromRight(0.5)}
				className="cursive skills-subtitle">
				E me adaptando à necessidade de sua equipe
			</motion.div>
		</div>
	);
};

export default SkillText;
