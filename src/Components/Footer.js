import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import { useAuth } from "./contexts/AuthContext";
import {
	UilFacebookF,
	UilTwitter,
	UilGithub,
	UilInstagramAlt,
} from "@iconscout/react-unicons";

function Footer() {
	let { currentUser } = useAuth();
	return (
		<div className="footer px-32 py-8 flex gap-5 flex-col">
			<div className="links flex justify-between items-center">
				<div className="left flex flex-col gap-5 items-center justify-center">
					<div className="logo w-80 ">
						<Link to="/">
							<img src={logo} alt="Logo" />
						</Link>
					</div>
					<div className="social">
						<ul className="flex gap-3">
							<li className="bg-white p-3 rounded-full drop-shadow-xl hover:-translate-y-1 icon hover:text-blue-300">
								<a href="*">
									<UilFacebookF size="24" color="#1F92CD" />
								</a>
							</li>
							<li className="bg-white p-3 rounded-full drop-shadow-xl hover:-translate-y-1 icon hover:text-blue-300">
								<a href="*">
									<UilTwitter size="24" color="#39BCF8" />
								</a>
							</li>
							<li className="bg-white p-3 rounded-full drop-shadow-xl hover:-translate-y-1 icon hover:text-blue-300">
								<a href="*">
									<UilGithub size="24" />
								</a>
							</li>
							<li className="bg-white p-3 rounded-full drop-shadow-xl hover:-translate-y-1 icon hover:text-blue-300">
								<a href="*">
									<UilInstagramAlt size="24" color="#BA30A6" />
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="right flex gap-16">
					<div className="page-links flex flex-col text-left">
						<h5>Pages</h5>
						<ul className="text-md">
							<li>
								<Link to="/">Home</Link>
							</li>
							{currentUser && (
								<li>
									<Link to="/circular">Circular</Link>
								</li>
							)}
							<li>
								<Link to="/contact">Contact Us</Link>
							</li>
							<li>
								<Link to="/about">About Us</Link>
							</li>
						</ul>
					</div>
					<div className="page-links flex flex-col text-left">
						<h5>Other Resources</h5>
						<ul className="text-md">
							<li>
								<Link to="/">MIT License</Link>
							</li>
							<li>
								<Link to="/circular">Terms & Conditions</Link>
							</li>
							<li>
								<Link to="/contact">Privacy Policy</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="horizantal-line border-b-2 border-gray-500 " />
			<div className="copy-right">
				Copyright © {new Date().getFullYear()} by 4/4 CSE.
			</div>
		</div>
	);
}

export default Footer;
