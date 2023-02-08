import React from "react";
import logo from "../Assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

function Navbar() {
	let { currentUser, logOut } = useAuth();
	let navigate = useNavigate();

	async function handleLogOut() {
		try {
			await logOut();
			navigate("/login");
			console.log("logout");
		} catch (err) {
			console.error(err.message);
		}
	}

	// console.table(currenUser);
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
					{currentUser && (
						<li className="navlink">
							<Link to="/dashboard">Dashboard</Link>
						</li>
					)}
					<li className="navlink">
						<Link to="/contact">Contact Us</Link>
					</li>
					<li className="navlink">
						<Link to="/about">About Us</Link>
					</li>
				</ul>
			</div>
			<div>
				{!currentUser ? (
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
				) : (
					<div class="dropdown  ">
						<button class="dropbtn rounded-full ">
							<img
								className="w-12 rounded-full"
								src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
								alt=""
							/>
						</button>
						<div class="dropdown-content">
							<p className="text-red-400"> {currentUser.displayName}</p>
							<button onClick={handleLogOut}>logout</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default Navbar;
