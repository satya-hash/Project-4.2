import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import login from "../Assets/login.svg";
import { UilFacebookF, UilEnvelope, UilGithub } from "@iconscout/react-unicons";
function Login() {
	return (
		<div className="login p-32 mt-12 w-full h-screen flex items-center justify-between">
			<div className="left w-1/2">
				<img src={login} alt="" />
			</div>
			<div className="right pt-5 shadow-xl rounded-xl  px-12 w-2/5">
				<div className="logo w-80 mx-auto ">
					<Link to="/">
						<img src={logo} alt="Logo" />
					</Link>
				</div>
				<form action="" className="text-left flex flex-col py-8 gap-3">
					<h6>
						<label htmlFor="email">E-mail :</label>
					</h6>
					<input
						type="text"
						name="email"
						id="email"
						placeholder="example@gamil.com"
						className="px-3 py-2 border-2 rounded-md outline-none focus:drop-shadow-lg  "
					/>
					{/* <h6>
						<label htmlFor="reg">Registration No :</label>
					</h6>
					<input
						type="number"
						name="reg"
						id="reg"
						placeholder="Reg No"
						className="px-3 py-2 border-2 rounded-md outline-none focus:scale-110 my-2"
					/> */}
					<h6>
						<label htmlFor="password">Password :</label>
					</h6>
					<input
						type="password"
						name="password"
						id="password"
						placeholder="*****************"
						className=" px-3 py-2 border-2 rounded-md outline-none focus:drop-shadow-lg "
					/>
					<button className="px-5 py-3 bg-blue-600 border-2 border-blue-600  hover:bg-white hover:text-blue-600 rounded-md  text-white">
						Login
					</button>
					<div className="sign flex justify-between items-center">
						<a href="*">Forget Password?</a>
						<Link to="/signup">Sign Up</Link>
					</div>
					<hr />
					<div className="text-center">
						<small>Or Sign Up with</small>
						<ul className="flex justify-center gap-3 items-center mt-3">
							<li className="bg-white p-3 rounded-full drop-shadow-xl hover:-translate-y-1 hover:text-blue-300 icon">
								<a href="*">
									<UilFacebookF size="32" />
								</a>
							</li>
							<li className="bg-white p-3 rounded-full drop-shadow-xl hover:-translate-y-1 hover:text-blue-300 icon">
								<a href="*">
									<UilGithub size="32" />
								</a>
							</li>
							<li className="bg-white p-3 rounded-full drop-shadow-xl hover:-translate-y-1 hover:text-blue-300 icon">
								<a href="*">
									<UilEnvelope size="32" />
								</a>
							</li>
						</ul>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Login;
