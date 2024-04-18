/** @format */

import { Skill_data } from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";
import "@/styles/component_styles/Skills.scss";

const Skills = () => {
	return (
		<section id="skills" className="section-skills">
			<SkillText />
			<div className="skills-area">
				{Skill_data.map((image, index) => (
					<div
						key={index}
						className="skill-card shadow shadow-[#2A0E61]/50 backdrop-blur-md">
						<SkillDataProvider
							name={image.skill_name}
							src={image.Image}
							width={image.width}
							height={image.height}
							index={index}
						/>
					</div>
				))}
			</div>
		</section>
	);
};

export default Skills;
