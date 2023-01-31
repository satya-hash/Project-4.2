import React from "react";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<div className="navbar px-32 flex justify-between items-center shadow-md text-lg font-medium bg-white">
			<div className="logo w-80">
				<Link to="/">
					<img src={logo} alt="Logo" />
				</Link>
			</div>
			<div className="navkeys flex ">
				<ul className="flex gap-6">
					<li className="navlink">
						<Link to="/">Home</Link>
					</li>
					<li className="navlink">
						<Link to="/circular">Circular</Link>
					</li>
					<li className="navlink">
						<Link to="/contact">Contact Us</Link>
					</li>
					<li className="navlink">
						<Link to="/about">About Us</Link>
					</li>
				</ul>
			</div>
			<div>
				<ul className="flex gap-6 items-center ">
					<li className="navlink">
						<Link to="/signup">Sign Up</Link>
					</li>
					<li className="btn px-8 py-3  bg-blue-600 text-white border-2 border-blue-600  hover:bg-white hover:text-blue-600">
						<Link to="/login">
							<button>Login</button>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Navbar;
