import React from "react";

function About({ data }) {
	return (
		<div className="card ">
			<div className="card-left ">{/* <img src={aboutImg} alt="" /> */}</div>
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
