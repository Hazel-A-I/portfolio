import React from "react";
import Contacts from "../sub/Contacts";
import styles from "../../styles/component_styles/Footer.module.scss";
import spanStyle from "../../styles/general_styles/_span.module.scss";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles["footer-title"]}>
				<h1 className={spanStyle["colorful-span"]}>CONTATOS</h1>
			</div>
			<Contacts />
			<p>Portfólio por Hazel Arcangelo Inácio.</p>
		</footer>
	);
};

export default Footer;
