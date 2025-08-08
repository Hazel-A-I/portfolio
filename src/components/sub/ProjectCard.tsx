"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import ProjectModal from "./ProjectModal";
import styles from "../../styles/component_styles/Projects.module.scss";

interface Props {
	name: string;
	description: string;
	background_image: string;
	link_repo: string;
	link_host?: string | null | undefined;
	width: number;
	height: number;
	index: number;
	video_source?: string | null | undefined;
}

const ProjectCard = ({
	name,
	description,
	link_repo,
	link_host,
	background_image,
	width,
	height,
	index,
	video_source,
}: Props) => {
	const [isModalOpen, setToggleModal] = useState(false);

	const handleToggleModal = () => {
		setToggleModal(!isModalOpen);
	};

	const renderModal = () => (
		<ProjectModal
			isOpen={isModalOpen}
			handleClose={handleToggleModal}
			videoSrc={video_source}
			imageSrc={background_image}
			name={name}
			description={description}
			link_repo={link_repo}
			link_host={link_host}
		/>
	);

	return (
		<>
			<motion.div
				variants={slideInFromTop}
				custom={index}
				className={`${styles["project-card"]} backdrop-blur-lg`}
				onClick={handleToggleModal}>
				<div className={styles["project-image"]}>
					<Image
						src={background_image}
						alt={name}
						width={width}
						height={height}
						className={`select-none w-full object-fill`}
					/>
				</div>
				<div className={styles["project-name"]}>{name}</div>
			</motion.div>
			{isModalOpen ? renderModal() : null}
		</>
	);
};

export default ProjectCard;
