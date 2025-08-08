/** @format */

import styles from "../../styles/component_styles/Header.module.scss";
import gridStyle from "../../styles/general_styles/_gridContainer.module.scss";
import spanStyle from "../../styles/general_styles/_span.module.scss";
import { Socials } from "../../constants";
import Image from "next/image";
import React from "react";

const Header = () => {
	return (
		<header
			className={`${styles["header"]} shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md`}>
			<div
				className={
					gridStyle["grid-container"] + " " + styles["header-content"]
				}>
				<a href="#about-me" className={styles["name-area"]}>
					<span
						className={styles["name-text"] + " " + spanStyle["colorful-span"]}>
						&lt;/&gt;
					</span>
					<span className={styles["name-text"]}>
						Hazel {""}
						<span className={styles.surname}>Arcangelo</span>
					</span>
				</a>

				<div className={styles.shortcuts}>
					<div className={styles["shortcut-list"]}>
						<a href="#about-me" className={styles.transition}>
							Sobre mim
						</a>
						<a href="#skills" className={styles.transition}>
							Competências
						</a>
						<a href="#projects" className={styles.transition}>
							Projetos
						</a>
						{/* <a href="#courses" className={styles.transition}>
							Cursos
						</a> */}
					</div>
				</div>

				<div className={styles.socials}>
					{Socials.map((social) => (
						<a
							key={social.name}
							href={social.link}
							target="_blank"
							className={`${styles["social-image"]}`}>
							<Image
								src={social.src}
								alt={social.name}
								fill
								className={`${styles["graycale-filter"]}`}
							/>
						</a>
					))}
				</div>
			</div>
		</header>
	);
};

export default Header;
