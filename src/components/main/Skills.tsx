/** @format */

import { Skill_data } from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
	return (
		<section
			id="skills"
			className="flex flex-col items-center justify-center gap-[1.2rem] h-full max-h-[650rem] relative overflow-hidden pt-[8rem]"
			style={{ transform: "scale(0.9)" }}>
			<SkillText />
			<div className="flex flex-row justify-around flex-wrap my-[1.6rem] gap-[2rem] items-center">
				{Skill_data.map((image, index) => (
					<div
						key={index}
						className="flex grow basis-[18rem] items-center justify-center p-[1.2rem] bg-[rgba(122,122,122,0.1)] rounded-[1rem]  shadow shadow-[#2A0E61]/50 backdrop-blur-md z-50 ">
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
