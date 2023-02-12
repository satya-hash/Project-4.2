import React, { useEffect, useState } from "react";
import resultImg from "../Assets/resultIcon.png";
import attendanceImg from "../Assets/attendanceIcon.png";
import { useAuth } from "../Components/contexts/AuthContext";
import Attendance from "./dash/Attendance";
import Result from "./dash/Result";
import Details from "./dash/Details";
import { useNavigate } from "react-router-dom";
import AdminDashboard from "./Admin/AdminDashboard";

function Dashboard() {
	let { currentUser, getData } = useAuth();
	const [user, setUser] = useState();
	let navigate = useNavigate();
	const [data, setData] = useState();
	const [result, setResult] = useState(false);
	const [attendance, setAttendance] = useState(false);
	const [details, setDetails] = useState(false);

	async function giveData() {
		let res = await getData();
		let data = await res.data();
		setUser(data);
		console.log(data.role);
	}

	useEffect(() => {
		giveData();
	}, []);

	if (user) {
		if (user.role === "admin") {
			return <AdminDashboard />;
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
						{attendance && <Attendance user={user} />}
						{details && <Details user={user} />}
					</div>
				</div>
			);
		}
	}
}
export default Dashboard;
