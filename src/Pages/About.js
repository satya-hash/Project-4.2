import React from "react";
import { UilArrowRight } from "@iconscout/react-unicons";

function About() {
	return (
		<div className="about ">
			<div className="card ">
				<div className="card-left ">{/* <img src={aboutImg} alt="" /> */}</div>
				<div className="card-right">
					<h1 className=" ">About Us!</h1>
					<div className="mx-auto">
						<p>
							Student Management system is a Professional Educational Platform.
							Here we will only provide you with interesting content that you
							will enjoy very much. We are committed to providing you the best
							of Educational, with a focus on reliability and management portal.
							we strive to turn our passion for Educational into a thriving
							website. We hope you enjoy our Educational as much as we enjoy
							giving them to you.
						</p>
						<button className="btn ">
							{" "}
							Learn More <UilArrowRight size="28" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
