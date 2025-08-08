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
import styles from "../../styles/component_styles/Skills.module.scss";

const SkillText = () => {
	return (
		<div className={styles["skill-text"]}>
			<motion.div
				variants={slideInFromTop}
				className={`${styles["Welcome-box"]} ${styles["stacks-message"]}`}>
				<PowerIcon className={styles["power-icon"]} />
				<h1 className={`${styles["Welcome-box"]} ${styles["stacks-text"]}`}>
					Veja minha stack de desenvolvimento!
				</h1>
			</motion.div>
			<motion.div
				variants={slideInFromLeft(0.5)}
				className={styles["skills-title"]}>
				<span className={styles["colorful-span"]}>
					Criando aplicativos com tecnologias modernas
				</span>
			</motion.div>
			<motion.div
				variants={slideInFromRight(0.5)}
				className={styles["skills-subtitle"]}>
				E me adaptando à necessidade de sua equipe
			</motion.div>
		</div>
	);
};

export default SkillText;
