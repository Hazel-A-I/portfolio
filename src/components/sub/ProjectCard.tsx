"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import ProjectModal from "./ProjectModal";

interface Props {
	name: string;
	description: string;
	background_image: string;
	link_repo: string;
	link_host?: string | null | undefined;
	width: number;
	height: number;
	index: number;
	video_source: string;
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
				className="flex flex-col grow basis-[36rem] items-center justify-between bg-[#03001417] backdrop-blur-lg border border-[#2a0e61] rounded-[0.8rem] z-50 h-[20rem] cursor-pointer"
				onClick={handleToggleModal}>
				<div className="overflow-hidden w-full h-[80%] flex rounded-t-lg shadow-sm border border-[#2a0e61]">
					<Image
						src={background_image}
						alt={name}
						width={width}
						height={height}
						className="select-none w-full object-fill"
					/>
				</div>
				<div className="h-[20%] flex items-center text-[1.4rem]">{name}</div>
			</motion.div>
			{isModalOpen && renderModal()}
		</>
	);
};

export default ProjectCard;
