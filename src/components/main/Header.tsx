/** @format */

import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Header = () => {
	return (
		<header className="w-full  h-[6.5rem] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-[4rem] ]">
			<div className="w-full max-w-[144rem] h-full flex flex-row items-center justify-between m-auto px-[1rem]">
				<a
					href="#about-me"
					className="h-auto w-auto flex flex-row items-center">
					<span className="font-bold text-[2.4rem] ml-[1rem] hidden md:block colorful-span ">
						&lt;/&gt;
					</span>
					<span className="font-bold text-[2.4rem] ml-[1rem] hidden md:block">
						Hazel Arcangelo
					</span>
				</a>

				<div className="w-[50rem] h-full flex flex-row items-center justify-between md:mr-[8rem]">
					<div className="flex items-center justify-between w-full h-auto border border-[#7042F861] bg-[#0300145e] mr-[1.5rem] px-[2rem] py-[1rem] rounded-full text-gray-200">
						<a
							href="#about-me"
							className="cursor-pointer text-[1.6rem] hover:text-zinc-400 active:text-zinc-500 transition">
							About me
						</a>
						<a
							href="#skills"
							className="cursor-pointer text-[1.6rem] hover:text-zinc-400 active:text-zinc-500 transition">
							Skills
						</a>
						<a
							href="#projects"
							className="cursor-pointer text-[1.6rem] hover:text-zinc-400 active:text-zinc-500 transition">
							Projects
						</a>
					</div>
				</div>

				<div className="flex flex-row gap-5">
					{Socials.map((social) => (
						<a key={social.name} href={social.link} target="_blank">
							<Image
								src={social.src}
								alt={social.name}
								width={24}
								height={24}
								style={{
									filter:
										"brightness(100%) saturate(0%) invert(100%) sepia(0%) hue-rotate(0deg) contrast(100%)",
								}}
								className="hover:animate-spin-fast cursor-pointer"
							/>
						</a>
					))}
				</div>
			</div>
		</header>
	);
};

export default Header;
