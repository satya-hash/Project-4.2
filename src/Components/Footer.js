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
		<div className="footer">
			<div className="footer-links">
				<div className="footer-left ">
					<div className="logo ">
						<Link to="/">
							<img src={logo} alt="Logo" className="logo" />
						</Link>
					</div>
					<div className="footer-social">
						<ul>
							<li>
								<a href="*">
									<UilFacebookF size="24" color="#1F92CD" />
								</a>
							</li>
							<li>
								<a href="*">
									<UilTwitter size="24" color="#39BCF8" />
								</a>
							</li>
							<li>
								<a href="*">
									<UilGithub size="24" />
								</a>
							</li>
							<li>
								<a href="*">
									<UilInstagramAlt size="24" color="#BA30A6" />
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="footer-right">
					<div className="page-links">
						<h5>Pages</h5>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>

							<li>
								<Link to="/contact">Contact Us</Link>
							</li>
							<li>
								<Link to="/about">About Us</Link>
							</li>
							{/* <li>
								<Link to="/admin">Admin Login</Link>
							</li> */}
						</ul>
					</div>
					<div className="page-links ">
						<h5>Other Resources</h5>
						<ul>
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
			<div className="line"></div>
			<div
				className="copy-right"
				style={{
					textAlign: "center",
				}}
			>
				Copyright © {new Date().getFullYear()} by 4/4 CSE.
			</div>
		</div>
	);
}

export default Footer;
