import React from "react";
import { UilArrowRight } from "@iconscout/react-unicons";
import CarouselComponent from "../Components/Carousel ";
function Home() {
	let images = [
		"https://via.placeholder.com/400x300/FF0000",
		"https://via.placeholder.com/400x300/00FF00",
		"https://via.placeholder.com/400x300/0000FF",
	];

	return (
		<>
			<div className="home">
				<div className="landing">
					<div>
						<h1 className="">Student Management System</h1>
						<h5>
							Student Management System is a comprehensive software solution
							designed to streamline and automate the administrative tasks of
							educational institutions. It allows teachers, administrators, and
							staff to manage student information, track attendance, create
							reports, and communicate with parents and students.
						</h5>
						<button className="btn ">
							Read More
							<UilArrowRight size="28" />
						</button>
					</div>
					<div></div>
				</div>
			</div>
			<CarouselComponent images={images} />
		</>
	);
}

export default Home;
