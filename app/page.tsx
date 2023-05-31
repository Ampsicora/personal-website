import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { Github, Linkedin, FileText, Mail, Twitter, Instagram } from "lucide-react";

import contactStyles from './styles/contact.module.css'

const navigation = [
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
];

const socials = [
	{
		icon: <Github size={20} />,
		href: "https://github.com/ampsicora",
		label: "Github",
		handle: "",
	},
	{
		icon: <Linkedin size={20} />,
		href: "https://www.linkedin.com/in/alessandro-sartori/",
		label: "LinkedIn",
		handle: "",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:alessandro@sartori.io",
		label: "Email",
		handle: "",
	},
	{
		icon: <Twitter size={20} />,
		href: "https://twitter.com/Ampsicora0",
		label: "Twitter",
		handle: "",
	},
	{
		icon: <FileText size={20} />,
		href: "https://drive.google.com/file/d/1mtbQnJz3jQ3zrrTNQuSiWfbSGmMhEOGo/view?usp=sharing",
		label: "Curriculum",
		handle: "",
	},
	{
		icon: <Instagram size={20} />,
		href: "https://www.instagram.com/alesartoz/",
		label: "Instagram",
		handle: "",
	},
];


export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			<nav className="my-16 animate-fade-in" hidden>
				<ul className="flex items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
						>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>

			{/* Profile Picture */}
			<div className={contactStyles.avatar}>
				<div className="animate-fade-in">
					<img
						className={contactStyles.profileImageBorder}
						src="/profile-512.jpg"
						alt="Personal Photo"
						height={60}
					/>					
				</div>
			</div>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={200}
			/>
			
			<h1 className="z-10 text-4xl text-transparent duration-600 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-7xl whitespace-nowrap bg-clip-text ">
				Alessandro Sartori
			</h1>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-center animate-fade-in">
				<h2 className="text-zinc-500 md:text-2xl">
					✨ Web Developer, Investor & Technical Analyst
				</h2>
			</div>
			{/* Socials */}
			<div className="container flex items-center justify-center px-4 mx-auto">
				<div className="grid w-full grid-cols-3 gap-8 mx-auto sm:grid-cols-6 lg:gap-16">
					{socials.map((s) => (
						<Link
							href={s.href}
							target="_blank"
							className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
						>
							<span
								className="absolute w-px h-1/4 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
								aria-hidden="true"
							/>
							<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
								{s.icon}
							</span>{" "}
							<div className="z-10 flex flex-col items-center">
								<span className="text-xl font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
									{s.handle}
								</span>
								<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
									{s.label}
								</span>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
