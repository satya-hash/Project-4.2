import React from "react";
import { UilArrowRight } from "@iconscout/react-unicons";
function Home() {
	return (
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
			</div>
		</div>
	);
}

export default Home;
