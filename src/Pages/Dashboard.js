import React, { useState } from "react";
import resultImg from "../Assets/resultIcon.png";
import attendance from "../Assets/attendanceIcon.png";
import { useAuth } from "../Components/contexts/AuthContext";
import { Navigate } from "react-router-dom";

function Dashboard() {
	let { showResult } = useAuth();
	let [result, setResult] = useState();

	console.log(Navigate());

	async function getResult() {
		let data = await showResult();
		setResult(data.data());
		console.log(result);
	}

	return (
		<div className="dashboard px-32 text-left ">
			<div className="service flex justify-center items-center h-1/2 gap-12 ">
				<div
					className="result flex flex-col justify-center items-center p-5 shadow-lg rounded-md w-60"
					onClick={getResult}
				>
					<img src={resultImg} alt="result" className="w-16" />
					<button className="font-semibold text-2xl">Result</button>
				</div>
				<div className="attendence  flex flex-col justify-center items-center p-5 shadow-lg rounded-md w-60">
					<img src={attendance} alt="result" className="w-16" />
					<button className="font-semibold text-2xl">Attendance</button>
				</div>
				<div className="detailsBtn  flex flex-col justify-center items-center p-5 shadow-lg rounded-md w-60">
					<img src={attendance} alt="result" className="w-16" />
					<button className="font-semibold text-2xl">Details</button>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
