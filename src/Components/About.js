import React from "react";

function About({ data }) {
	console.log(data.picture);

	return (
		<div className="card ">
			<div
				className="card-left"
				style={{
					backgroundImage: `url(${data.picture})`,
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					backgroundSize: "contain",
				}}
			></div>
			<div className="card-right">
				<h1 className=" "> {data.name} </h1>
				<div className="mx-auto">
					<p>{data.description}</p>
				</div>
			</div>
		</div>
	);
}

export default About;
