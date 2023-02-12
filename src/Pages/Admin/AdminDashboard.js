import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase";

function AdminDashboard() {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(false);
	async function getAllStudents() {
		let userData = [];
		const querySnapshot = await getDocs(collection(db, "students"));
		querySnapshot.forEach((doc) => {
			let data = doc.data();

			if (data.role === "student") {
				userData.push(data);
			}
		});

		setUsers(userData);
		console.log(users);
	}

	useEffect(() => {
		getAllStudents();
	}, []);

	function Loading() {
		return (
			<div class="spinner-box">
				<div class="three-quarter-spinner"></div>
			</div>
		);
	}

	return (
		<div className="admin-dashboard">
			<div className="dashboard-service ">
				<button onClick={() => console.log("hi")} className="  service-box ">
					{/* <img src={attendanceImg} alt="result" /> */}
					<strong>All Student</strong>
				</button>
				<button onClick={() => console.log("hi")} className=" service-box ">
					{/* <img src={resultImg} alt="result" /> */}
					<strong>Add Student</strong>
				</button>
				<button onClick={() => console.log("hi")} className=" service-box ">
					{/* <img src={attendanceImg} alt="result" /> */}
					<strong>Update Student</strong>
				</button>
				<button onClick={() => console.log("hi")} className="  service-box ">
					{/* <img src={attendanceImg} alt="result" /> */}
					<strong>Delete Student</strong>
				</button>
			</div>
			{loading ? (
				<Loading />
			) : (
				users &&
				users.map((doc) => {
					return <div key={doc.id}> {doc.id} </div>;
				})
			)}
		</div>
	);
}

export default AdminDashboard;

// write a private route for using recent version of react router?
