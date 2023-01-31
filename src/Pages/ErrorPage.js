import React from "react";
import { Link } from "react-router-dom";
import err from "../Assets/404.png";

function ErrorPage() {
	return (
		<div className="error-page flex  items-center">
			<div className="w-2/3 overflow-hidden">
				<img src={err} alt="error page" className="w-full h-full" />
			</div>
			<div className="text-left ">
				<h3>Page Not Found</h3>
				<Link to="/">
					<button className="px-8 py-3 btn bg-blue-600 border-2 border-blue-600  hover:bg-white hover:text-blue-600   text-white">
						{" "}
						Back To Home{" "}
					</button>
				</Link>
			</div>
		</div>
	);
}

export default ErrorPage;
