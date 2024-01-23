import Image from "next/image";
import React from "react";

const Contacts = () => {
	return (
		<div className="absolute top-[8rem] z-10">
			<ul className="flex flex-row gap-[4rem]">
				<li className="shadow-md shadow-[#cdb4ff]/50 rounded-full">
					<a href="mailto:hazelinacio@gmail.com">
						<Image
							src={"/email-footer.svg"}
							alt="Me envie um e-mail"
							width={80}
							height={80}
						/>
					</a>
				</li>
				<li className="shadow-md shadow-[#cdb4ff]/50 rounded-full">
					<a
						href="https://www.linkedin.com/in/hazel-arcangelo/"
						target="_blank">
						<Image
							src={"/linkedin-footer.svg"}
							alt="Acesse meu linkedin"
							width={80}
							height={80}
						/>
					</a>
				</li>
				<li className="shadow-md shadow-[#cdb4ff]/50 rounded-full">
					<a href="https://github.com/Hazel-A-I" target="_blank">
						<Image
							src={"/github-footer.svg"}
							alt="Acesse meu github"
							width={80}
							height={80}
						/>
					</a>
				</li>
				<li className="shadow-md shadow-[#cdb4ff]/50 rounded-full">
					<a
						href="https://api.whatsapp.com/send?phone=5547991508820"
						target="_blank">
						<Image
							src={"/whatsapp-footer.svg"}
							alt="Envie uma mensagem no whatsapp"
							width={80}
							height={80}
						/>
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Contacts;
