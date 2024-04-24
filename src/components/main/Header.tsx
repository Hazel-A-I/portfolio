/** @format */

import "@/styles/component_styles/Header.scss";
import "@/styles/general_styles/gridContainer.scss";
import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Header = () => {
	return (
		<header className="header shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md">
			<div className="grid-container header-content">
				<a href="#about-me" className="name-area">
					<span className="name-text colorful-span ">&lt;/&gt;</span>
					<span className="name-text">
						Hazel {""}
						<span className="surname">Arcangelo</span>
					</span>
				</a>

				<div className="shortcuts">
					<div className="shortcut-list">
						<a href="#about-me" className="transition">
							Sobre mim
						</a>
						<a href="#skills" className="transition">
							Competências
						</a>
						<a href="#projects" className="transition">
							Projetos
						</a>
						{/* <a href="#courses" className=" transition">
							Cursos
						</a> */}
					</div>
				</div>

				<div className="socials">
					{Socials.map((social) => (
						<a
							key={social.name}
							href={social.link}
							target="_blank"
							className="social-image">
							<Image
								src={social.src}
								alt={social.name}
								fill
								className="grayscale-filter"
							/>
						</a>
					))}
				</div>
			</div>
		</header>
	);
};

export default Header;
