import Image from "next/image";
import React from "react";

import "@/styles/component_styles/Footer.scss";
const Contacts = () => {
	return (
		<div className="contacts">
			<ul className="contact-list">
				<li className="rounded-full">
					<a href="mailto:hazelinacio@gmail.com">
						<Image
							src={"/email-footer.svg"}
							alt="Me envie um e-mail"
							width={40}
							height={40}
						/>
					</a>
				</li>
				<li className=" rounded-full">
					<a
						href="https://www.linkedin.com/in/hazel-arcangelo/"
						target="_blank">
						<Image
							src={"/linkedin-footer.svg"}
							alt="Acesse meu linkedin"
							width={40}
							height={40}
						/>
					</a>
				</li>
				<li className="rounded-full">
					<a href="https://github.com/Hazel-A-I" target="_blank">
						<Image
							src={"/github-footer.svg"}
							alt="Acesse meu github"
							width={40}
							height={40}
						/>
					</a>
				</li>
				<li className="rounded-full">
					<a
						href="https://api.whatsapp.com/send?phone=5547991508820"
						target="_blank">
						<Image
							src={"/whatsapp-footer.svg"}
							alt="Envie uma mensagem no whatsapp"
							width={40}
							height={40}
						/>
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Contacts;
