/** @format */
import React from "react";
import HeroContent from "../sub/HeroContent";
import styles from "../../styles/component_styles/Hero.module.scss";
const Hero = () => {
	return (
		<section id="about-me" className={styles["section-hero"]}>
			<HeroContent />
		</section>
	);
};

export default Hero;
