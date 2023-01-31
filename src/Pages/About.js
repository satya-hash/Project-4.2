import React from "react";
import { UilArrowRight } from "@iconscout/react-unicons";

function About() {
	return (
		<div className="about flex justify-center items-center px-32 text-left w-full ">
			<div className="card flex justify-center items-center">
				<div className="card-left w-1/2 rounded-l-lg"></div>
				<div className="card-right  px-8 w-1/2">
					<h1 className=" font-bold  ">About Us!</h1>
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
						<button className="btn px-5 py-3 flex justify-between items-center bg-blue-600 border-2 border-blue-600  hover:bg-white hover:text-blue-600   text-white">
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
