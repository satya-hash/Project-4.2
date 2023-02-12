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
		<div className="navbar">
			<div className="logo ">
				<Link to="/">
					<img src={logo} alt="Logo" className="logo" />
				</Link>
			</div>
			<div className="navkeys">
				<ul>
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

			{!currentUser ? (
				<ul>
					{/* <li className="navlink">
						<Link to="/admin">Admin</Link>
					</li> */}
					<li>
						<Link to="/login">
							<button className="btn">Login</button>
						</Link>
					</li>
				</ul>
			) : (
				<div class="dropdown">
					<button class="dropbtn">
						<img
							src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
							alt=""
						/>
					</button>
					<div class="dropdown-content">
						<p> {currentUser.displayName}</p>
						<button
							style={{ background: "none", border: "none", outline: "none" }}
							onClick={handleLogOut}
						>
							logout
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default Navbar;
