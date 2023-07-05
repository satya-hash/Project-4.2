import React, { useEffect, useState } from "react";
import resultImg from "../Assets/resultIcon.png";
import attendanceImg from "../Assets/attendanceIcon.png";
import { useAuth } from "../Components/contexts/AuthContext";
import Attendance from "./dash/Attendance";
import Result from "./dash/Result";
import Details from "./dash/Details";
import { Navigate } from "react-router-dom";

function Dashboard() {
	let { currentUser, getData } = useAuth();
	const [user, setUser] = useState();
	const [result, setResult] = useState(false);
	const [attendance, setAttendance] = useState(false);
	const [details, setDetails] = useState(false);

	async function giveData(id) {
		let res = await getData(id);
		let data = await res.data();
		setUser(data);
	}

	useEffect(() => {
		giveData(currentUser.uid);
	}, []);

	if (user) {
		if (user.role === "admin") {
			return <Navigate to="/admin_dashboard" />;
		} else {
			function handleResult() {
				setAttendance(false);
				setDetails(false);
				setResult(true);
			}

			function handleAttendance() {
				setDetails(false);
				setResult(false);
				setAttendance(true);
			}

			function handleDetails() {
				setAttendance(false);
				setResult(false);
				setDetails(true);
			}

			return (
				<div className="dashboard  ">
					<div className="dashboard-service ">
						<button onClick={handleResult} className=" service-box ">
							<img src={resultImg} alt="result" />
							<p>Result</p>
						</button>
						<button
							onClick={handleAttendance}
							className="attendence service-box "
						>
							<img src={attendanceImg} alt="result" />
							<p>Attendance</p>
						</button>
						<button onClick={handleDetails} className="details  service-box ">
							<img src={attendanceImg} alt="result" />
							<p>Details</p>
						</button>
					</div>
					<div>
						{result && <Result user={user} />}
						{attendance && <Attendance attendance={user.attendance} />}
						{details && <Details user={user} />}
					</div>
				</div>
			);
		}
	}
}
export default Dashboard;
