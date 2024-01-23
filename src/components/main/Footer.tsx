import React from "react";
import Contacts from "../sub/Contacts";
import Image from "next/image";

const Footer = () => {
	return (
		<footer className="w-full h-full relative flex items-center justify-center mt-[8rem]">
			<div className=" absolute top-0 z-10 border border-[#7042F861] bg-[#403f4a38] px-[2rem] rounded-full">
				<h1 className=" colorful-span text-[3.6rem] font-extrabold select-none">
					CONTATOS
				</h1>
			</div>
			<Contacts />
			<div className="w-full h-[30rem] mt-auto">
				<Image
					src={"/wave.svg"}
					alt="Fundo de ondas"
					style={{ objectFit: "cover", padding: 0, margin: 0 }}
					fill
				/>
			</div>
		</footer>
	);
};

export default Footer;
