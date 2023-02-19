import React from "react";
import { Link } from "react-router-dom";
import errImg from "../Assets/404.png";

function ErrorPage() {
	return (
		<div
			className="error-page"
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flex: "1 1 auto",
			}}
		>
			<div style={{ width: "100%" }}>
				<img src={errImg} alt="error page" style={{ width: "100%" }} />
			</div>
			<div>
				<h3>Page Not Found</h3>
				<Link to="/">
					<button className="btn"> Back To Home </button>
				</Link>
			</div>
		</div>
	);
}

export default ErrorPage;
