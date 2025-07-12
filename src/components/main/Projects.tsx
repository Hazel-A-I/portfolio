import React from "react";
import ProjectCard from "../sub/ProjectCard";
import styles from "../../styles/component_styles/Projects.module.scss";
import { Project_data } from "../../constants";

const Projects = () => {
	return (
		<section id="projects" className={styles["section-projects"]}>
			<h1 className={styles["colorful-span"]}>Meus projetos</h1>
			<div className={styles["projects-area"]}>
				{Project_data.map((project, index) => (
					<ProjectCard key={index} {...project} index={index} />
				))}
			</div>
		</section>
	);
};

export default Projects;
