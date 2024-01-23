import React from "react";
import ProjectCard from "../sub/ProjectCard";

import { Project_data } from "@/constants";

const Projects = () => {
	return (
		<section
			id="projects"
			className="flex flex-col items-center justify-center gap-[1.2rem] h-full max-h-[650rem] relative overflow-hidden pb-[8rem]">
			<h1 className="text-[4rem] font-semibold text-transparent bg-clip-text bg-gradient-to-l from-[#aa5573] to-[#9306d4] py-[8rem]">
				Meus projetos
			</h1>
			<div className="flex flex-row justify-around flex-wrap w-full mt-[1.6rem] gap-[2rem] items-center">
				{Project_data.map((project, index) => (
					<ProjectCard key={index} {...project} index={index} />
				))}
			</div>
		</section>
	);
};

export default Projects;
