import React from "react";
import result from "../Assets/resultIcon.png";
import attendance from "../Assets/attendanceIcon.png";

function Dashboard() {
	let showResult = () => {
		console.log("shown");
	};

	return (
		<div className="dashboard px-32 text-left ">
			<div className="service flex justify-center items-center h-1/2 gap-12 ">
				<div
					className="result flex flex-col justify-center items-center p-5 shadow-lg rounded-md w-60"
					onClick={showResult}
				>
					<img src={result} alt="result" className="w-16" />
					<button className="font-semibold text-2xl">Result</button>
				</div>
				<div className="attendence  flex flex-col justify-center items-center p-5 shadow-lg rounded-md w-60">
					<img src={attendance} alt="result" className="w-16" />
					<button className="font-semibold text-2xl">Attendance</button>
				</div>
				{/* <div className="student-details  flex flex-col justify-center items-center p-5 shadow-lg rounded-md">
					<img src={attendance} alt="result" className="w-16" />
					<button className="font-semibold text-2xl">Details</button>
				</div> */}
			</div>
		</div>
	);
}

export default Dashboard;
