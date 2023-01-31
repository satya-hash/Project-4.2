import React from "react";
import { Link } from "react-router-dom";
import signUp from "../Assets/signup.svg";

function SignUp() {
	return (
		<div className="sign-up px-32 flex items-center justify-center">
			<div className="container flex  items-center justify-between">
				<div>
					<img src={signUp} alt="signup" />
				</div>
				<div className="w-1/2 text-left ">
					<form className="flex flex-col justify-center items-center gap-5">
						<p>
							Already a User?{" "}
							<Link
								className="font-semibold text-blue-700 underline"
								to="/login"
							>
								Login
							</Link>{" "}
						</p>
						<div className="eamil">
							<h6>
								<label htmlFor="email">E-mail :</label>
							</h6>
							<input
								type="email"
								name="email"
								id="email"
								placeholder="Enter E-mail"
								required
								className="px-3 py-2 border-2  outline-none focus:drop-shadow-lg  "
							/>
						</div>
						<div className="fname">
							<h6>
								<label htmlFor="fName">Full Name :</label>
							</h6>
							<input
								type="text"
								name="fName"
								id="fName"
								placeholder="Enter Full Name"
								required
								className="px-3 py-2 border-2  outline-none focus:drop-shadow-lg  "
							/>
						</div>
						<div className="pass">
							<h6>
								<label htmlFor="pwd">Password :</label>
							</h6>
							<input
								type="password"
								name="pwd"
								id="pwd"
								placeholder="Password"
								required
								className="px-3 py-2 border-2  outline-none focus:drop-shadow-lg  "
							/>
						</div>
						<div className="cpass">
							<h6>
								<label htmlFor="cPwd">Confirm Password :</label>
							</h6>
							<input
								type="password"
								name="cPwd"
								id="cPwd"
								placeholder="Confirm Password"
								required
								className="px-3 py-2 border-2  outline-none focus:drop-shadow-lg  "
							/>
						</div>
						<button
							type="submit"
							className="px-8 py-3 btn bg-blue-600 border-2 border-blue-600  hover:bg-white hover:text-blue-600   text-white"
						>
							Sign Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default SignUp;
