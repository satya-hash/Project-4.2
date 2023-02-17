import React from "react";

function Details({ user }) {
	return (
		<div>
			<h4>Details :</h4>
			<table>
				<tr>
					<td>
						<p>Name</p>
					</td>
					<td>
						{" "}
						<p>{user.fName + user.lName}</p>{" "}
					</td>
				</tr>
				<tr>
					<td>
						<p>Age</p>
					</td>
					<td>
						{" "}
						<p>{user.age}</p>{" "}
					</td>
				</tr>
				<tr>
					<td>
						<p>DoB</p>
					</td>
					<td>
						{" "}
						<p>{user.dateOfBirth}</p>{" "}
					</td>
				</tr>
				<tr>
					<td>
						<p>Mobile No</p>
					</td>
					<td>
						{" "}
						<p>{user.mobileNo}</p>{" "}
					</td>
				</tr>
				<tr>
					<td>
						<p>Course</p>
					</td>
					<td>
						{" "}
						<p>{user.course}</p>{" "}
					</td>
				</tr>
				<tr>
					<td>
						<p>Year Of Join</p>
					</td>
					<td>
						{" "}
						<p>{user.yearOfJoin}</p>{" "}
					</td>
				</tr>
				<tr>
					<td>
						<p>Year Of Study</p>
					</td>
					<td>
						{" "}
						<p>{user.yearOfStudy}</p>{" "}
					</td>
				</tr>
			</table>
		</div>
	);
}

export default Details;
