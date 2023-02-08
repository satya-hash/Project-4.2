import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import signUpImg from "../Assets/signup.svg";
import { useAuth } from "../Components/contexts/AuthContext";

function Loading() {
	return (
		<div class="spinner-box flex justify-center items-center h-screen">
			<div class="three-quarter-spinner"></div>
		</div>
	);
}

function SignUp() {
	let emailRef = useRef();
	let passwordRef = useRef();
	let confirmPasswordRef = useRef();
	let { signUp } = useAuth();
	let [error, setError] = useState("");
	let [loading, setLoading] = useState(false);
	let navigate = useNavigate();

	async function handleSubmit(e) {
		e.preventDefault();

		if (passwordRef.current.value !== confirmPasswordRef.current.value) {
			return setError("password do not match");
		}

		try {
			setError("");
			setLoading(true);
			await signUp(emailRef.current.value, passwordRef.current.value);
			navigate("/profile");
			console.log("sign");
		} catch (err) {
			setError(err.message);
			console.error(err.message);
		}

		setLoading(false);
	}

	return loading ? (
		<Loading />
	) : (
		<div className="sign-up px-32 flex items-center justify-center">
			<div className="container flex  items-center justify-between">
				<div>
					<img src={signUpImg} alt="signup" />
				</div>
				<div className=" text-left border-2 p-12 rounded-lg ">
					<form
						className="flex flex-col justify-center items-center gap-5 "
						onSubmit={handleSubmit}
					>
						{error && <p className="text-red-600">{error}</p>}
						<div className="eamil">
							<h6>
								<label htmlFor="email">E-mail :</label>
							</h6>
							<input
								ref={emailRef}
								type="email"
								name="email"
								id="email"
								placeholder="Enter E-mail"
								required
								className="px-3 py-2 border-2  outline-none focus:drop-shadow-lg  "
							/>
						</div>
						{/* <div className="fname">
							<h6>
								<label htmlFor="fName">Full Name :</label>
							</h6>
							<input
								ref={nameRef}
								type="text"
								name="fName"
								id="fName"
								placeholder="Enter Full Name"
								required
								className="px-3 py-2 border-2  outline-none focus:drop-shadow-lg  "
							/>
						</div> */}
						<div className="pass">
							<h6>
								<label htmlFor="pwd">Password :</label>
							</h6>
							<input
								ref={passwordRef}
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
								ref={confirmPasswordRef}
								type="password"
								name="cPwd"
								id="cPwd"
								placeholder="Confirm Password"
								required
								className="px-3 py-2 border-2  outline-none focus:drop-shadow-lg  "
							/>
						</div>
						<button
							disabled={loading}
							type="submit"
							className="px-8 py-3 btn bg-blue-600 border-2 border-blue-600  hover:bg-white hover:text-blue-600   text-white"
						>
							Sign Up
						</button>
					</form>
					<p className="text-center mt-3">
						Already a User?{" "}
						<Link className="font-semibold text-blue-700 underline" to="/login">
							Login
						</Link>{" "}
					</p>
				</div>
			</div>
		</div>
	);
}

export default SignUp;
