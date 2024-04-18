import React from "react";
import Contacts from "../sub/Contacts";
import Image from "next/image";
import "@/styles/component_styles/Footer.scss";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-title">
				<h1 className=" colorful-span">CONTATOS</h1>
			</div>
			<Contacts />
			<p>Portfólio por Hazel Arcangelo Inácio.</p>
		</footer>
	);
};

export default Footer;
