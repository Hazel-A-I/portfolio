import React from "react";
import ProjectCard from "../sub/ProjectCard";
import "../../styles/component_styles/Projects.scss";
import { Project_data } from "../../constants";

const Projects = () => {
	return (
		<section id="projects" className="section-projects">
			<h1 className="colorful-span">Meus projetos</h1>
			<div className="projects-area">
				{Project_data.map((project, index) => (
					<ProjectCard key={index} {...project} index={index} />
				))}
			</div>
		</section>
	);
};

export default Projects;
