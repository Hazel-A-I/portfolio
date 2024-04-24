import Image from "next/image";
import React from "react";

import "@/styles/component_styles/Footer.scss";
const Contacts = () => {
	return (
		<div className="contacts">
			<a
				key="email-footer"
				href="mailto:hazelinacio@gmail.com"
				className="rounded-full contact-list-item">
				<Image src={"/email-footer.svg"} alt="Me envie um e-mail" fill />
			</a>
			<a
				className="rounded-full contact-list-item"
				key="linkedin-footer"
				href="https://www.linkedin.com/in/hazel-arcangelo/"
				target="_blank">
				<Image src={"/linkedin-footer.svg"} alt="Acesse meu linkedin" fill />
			</a>
			<a
				className="rounded-full contact-list-item"
				key="github-footer"
				href="https://github.com/Hazel-A-I"
				target="_blank">
				<Image src={"/github-footer.svg"} alt="Acesse meu github" fill />
			</a>
			<a
				className="rounded-full contact-list-item"
				key="whatsapp-footer"
				href="https://api.whatsapp.com/send?phone=5547991508820"
				target="_blank">
				<Image
					src={"/whatsapp-footer.svg"}
					alt="Envie uma mensagem no whatsapp"
					fill
				/>
			</a>
		</div>
	);
};

export default Contacts;
