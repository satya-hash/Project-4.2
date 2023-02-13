import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase";
import { UilTrashAlt, UilSync } from "@iconscout/react-unicons";
import { useNavigate } from "react-router-dom";
function AdminDashboard() {
	const [users, setUsers] = useState();
	let navigate = useNavigate();

	async function getAllStudents() {
		console.log("start");
		let userData = [];
		let snap = await getDocs(collection(db, "students"));
		snap.forEach((doc) => {
			let data = doc.data();
			// console.log(doc.id);
			if (data.role === "student") {
				userData.push({ id: doc.id, data: data });
			}
		});
		setUsers(userData);
	}
	console.log(users);
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
			{/* <div className="dashboard-service ">
				<button onClick={() => console.log("hi")} className="  service-box ">
					<strong>All Student</strong>
				</button>
				<button onClick={() => console.log("hi")} className=" service-box ">
					<strong>Add Student</strong>
				</button>
				<button onClick={() => console.log("hi")} className=" service-box ">
					<strong>Update Student</strong>
				</button>
				<button onClick={() => console.log("hi")} className="  service-box ">
					<strong>Delete Student</strong>
				</button>
			</div> */}
			{/* {loading ? (
				<Loading />
			) : (
				users &&
				users.map((doc) => {
					return <div key={doc.id}> {doc.id} </div>;
				})
			)} */}
			<div className="all-students">
				<button onClick={() => navigate("/update_form")}> Add Student </button>
				{users && (
					<table className="">
						<tr>
							<th>S No</th>
							<th>Registration No</th>
							<th>Name</th>
							<th>Email</th>
							<th>Update</th>
							<th>Delete</th>
						</tr>
						{users.map(({ id, data }, index) => (
							<tr>
								<td> {index + 1} </td>
								<td> {data.regNo} </td>
								<td> {data.fName + " " + data.lName} </td>
								<td> {data.email} </td>
								<td>
									{" "}
									<button>
										{" "}
										<UilSync />{" "}
									</button>{" "}
								</td>
								<td>
									{" "}
									<button>
										<UilTrashAlt />
									</button>{" "}
								</td>
							</tr>
						))}
					</table>
				)}
			</div>
		</div>
	);
}

export default AdminDashboard;

// write a private route for using recent version of react router?
