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
		<div className="sign-up">
			<div className="container">
				<div>
					<img src={signUpImg} alt="signup" />
				</div>
				<div className="sign-form">
					<form onSubmit={handleSubmit}>
						{error && <p className="text-red-600">{error}</p>}
						<div className="email">
							<p>
								<label htmlFor="email">E-mail :</label>
							</p>
							<input
								ref={emailRef}
								type="email"
								name="email"
								id="email"
								placeholder="Enter E-mail"
								required
							/>
						</div>

						<div className="pass">
							<p>
								<label htmlFor="pwd">Password :</label>
							</p>
							<input
								ref={passwordRef}
								type="password"
								name="pwd"
								id="pwd"
								placeholder="Password"
								required
							/>
						</div>
						<div className="cpass">
							<p>
								<label htmlFor="cPwd">Confirm Password :</label>
							</p>
							<input
								ref={confirmPasswordRef}
								type="password"
								name="cPwd"
								id="cPwd"
								placeholder="Confirm Password"
								required
							/>
						</div>
						<button disabled={loading} type="submit" className="btn">
							Sign Up
						</button>
					</form>
					<p style={{ textAlign: "center" }}>
						Already a User? <Link to="/login">Login</Link>{" "}
					</p>
				</div>
			</div>
		</div>
	);
}

export default SignUp;
