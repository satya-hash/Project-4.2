import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UilFacebookF, UilEnvelope, UilGithub } from "@iconscout/react-unicons";
import logo from "../Assets/logo.png";
import login from "../Assets/login.svg";
import { useAuth } from "../Components/contexts/AuthContext";

function Loading() {
	return (
		<div class="spinner-box">
			<div class="three-quarter-spinner"></div>
		</div>
	);
}

function Login() {
	let emailRef = useRef();
	let passRef = useRef();
	let { logIn, currentUser, getData } = useAuth();
	let [load, setLoad] = useState(false);
	let [error, setError] = useState("");
	let navigate = useNavigate();

	if (currentUser) {
		return navigate("/dashboard");
	}

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			setLoad(true);
			await logIn(emailRef.current.value, passRef.current.value);
			navigate("/dashboard");
			console.log("success");
		} catch (err) {
			setError(err.code);
			console.error(err.code);
			console.error(err.message);
		}
		setLoad(false);
	}

	return load ? (
		<Loading />
	) : (
		<div className="login ">
			<div className="login-left ">
				<img src={login} alt="login" />
			</div>
			<div className="login-right ">
				<div className="logo">
					<Link to="/">
						<img src={logo} alt="Logo" className="logo" />
					</Link>
				</div>
				{error}
				<form onSubmit={handleSubmit}>
					<div>
						<p>
							<label htmlFor="email">E-mail :</label>
						</p>
						<input
							type="text"
							name="email"
							id="email"
							ref={emailRef}
							placeholder="example@gamil.com"
							required
						/>
					</div>
					<div>
						<p>
							<label htmlFor="password">Password :</label>
						</p>
						<input
							type="password"
							name="password"
							id="password"
							ref={passRef}
							placeholder="*****************"
							required
						/>
					</div>
					<button type="submit" className="btn ">
						Login
					</button>
					<div className="sign-op">
						<a href="*">Forget Password?</a>
						<Link to="/signup">Sign Up</Link>
					</div>
					<hr />
					<div>
						<small>Or Sign Up with</small>
						<ul>
							<li className=" icon">
								<a href="*">
									<UilFacebookF size="32" />
								</a>
							</li>
							<li className=" icon">
								<a href="*">
									<UilGithub size="32" />
								</a>
							</li>
							<li className=" icon">
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
