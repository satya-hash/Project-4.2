import React, { useEffect, useState } from "react";
import { UilTrashAlt, UilSync } from "@iconscout/react-unicons";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Components/contexts/AuthContext";

function AdminDashboard() {
	const [users, setUsers] = useState();
	let { deleteData, getAllStudents } = useAuth();
	let navigate = useNavigate();

	async function getAllStudentsData() {
		console.log("start");
		let userData = [];

		let snap = await getAllStudents();
		snap.forEach((doc) => {
			let data = doc.data();
			if (data.role !== "admin") {
				userData.push({ id: doc.id, data: data });
			}
		});
		setUsers(userData);
	}

	async function handleDelete(email, id) {
		try {
			console.log("data deleted");

			await deleteData(id);
			getAllStudentsData();
		} catch (err) {
			console.log(err.meassage);
			console.log(err.code);
		}
		console.log(id);
	}
	useEffect(() => {
		getAllStudentsData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="admin-dashboard">
			<div className="all-students">
				<button onClick={() => navigate("/add_student")}> Add Student </button>
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
									<Link to="/update_student" state={id}>
										{" "}
										<UilSync />{" "}
									</Link>{" "}
								</td>
								<td>
									{" "}
									<button onClick={() => handleDelete(data.email, id)}>
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
