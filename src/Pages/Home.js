import React from "react";
import { UilArrowRight } from "@iconscout/react-unicons";
function Home() {
	return (
		<div
			className="home"
			style={{
				height: "85vh",
			}}
		>
			<div
				className="landing px-32 w-3/4 flex items-center justify-center text-left"
				style={{
					height: "80vh",
				}}
			>
				<div>
					<h1 className="">Student Management System</h1>
					<h5>
						Student Management System is a comprehensive software solution
						designed to streamline and automate the administrative tasks of
						educational institutions. It allows teachers, administrators, and
						staff to manage student information, track attendance, create
						reports, and communicate with parents and students.
					</h5>
					<button className="btn px-8 py-3 rounded-md flex items-center justify-between bg-blue-600 text-white border-blue-600 border-2 hover:bg-white hover:text-blue-600">
						Read More
						<UilArrowRight size="28" />
					</button>
				</div>
			</div>
		</div>
	);
}

export default Home;
