"use client";
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import HeaderDropdown from "@/components/ui/MyComponents/HeaderDropdown";
import { ButtonsAlertDialog } from "@/components/ui/MyComponents/ButtonsAlertDialog";
import Image from "next/image";
import { default as NextLink } from "next/link";

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const heroSection = document.getElementById("Home");
			const heroHeight = heroSection ? heroSection.offsetHeight : 0;
			const scrollTop = window.scrollY;
			setIsScrolled(scrollTop > heroHeight);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header
			className={`flex justify-between items-center w-full h-[7.25rem] py-[1.75rem] px-[1.25rem] shrink-0 fixed z-20 pb-3 transition-colors duration-500 ${
				isScrolled ? "bg-white shadow-md" : "bg-transparent"
			}`}>
			<NextLink href="">
				<Image
					src="/images/jkanLogo3.png"
					width={500}
					height={500}
					alt="Universe Logo"
					className="cursor-pointer max-sm:w-[150px] sm:w-[175px]"
				/>
			</NextLink>
			<nav className="flex items-center gap-[3rem] max-sm:hidden">
				<Link
					activeClass="active"
					to="Home"
					spy={true}
					smooth={true}
					className="cursor-pointer body-md"
					duration={600}>
					Home
				</Link>
				<Link
					activeClass="active"
					to="whyJoinUs"
					spy={true}
					smooth={true}
					className="cursor-pointer body-md"
					duration={600}>
					Why Join Us
				</Link>
				<Link
					activeClass="active"
					to="community"
					spy={true}
					smooth={true}
					className="cursor-pointer body-md"
					duration={600}>
					Community
				</Link>
				<Link
					activeClass="active"
					to="latestPosts"
					spy={true}
					smooth={true}
					className="cursor-pointer body-md"
					duration={600}>
					Latest posts
				</Link>
				<Link
					activeClass="active"
					to="theTeam"
					spy={true}
					smooth={true}
					className="cursor-pointer body-md"
					duration={600}>
					The Team
				</Link>
				<Link
					activeClass="active"
					to="partners"
					spy={true}
					smooth={true}
					className="cursor-pointer body-md"
					duration={600}>
					Partners
				</Link>
			</nav>
			<div className="flex justify-end items-center gap-[1.8125rem] max-sm:hidden">
				<ButtonsAlertDialog
					variant="outline"
					className={"bg-inherit"}>
					Login
				</ButtonsAlertDialog>
				<ButtonsAlertDialog>Signup</ButtonsAlertDialog>
			</div>
			<HeaderDropdown className="sm:hidden" />
		</header>
	);
};

export default Header;
