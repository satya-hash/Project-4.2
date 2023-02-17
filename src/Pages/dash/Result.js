import React, { useState } from "react";

function Show({ user, result }) {
	return (
		<>
			<table style={{ textAlign: "left" }}>
				<tr>
					<td>
						{" "}
						<strong> Name : </strong>{" "}
					</td>
					<td> {user.fName + " " + user.lName} </td>
				</tr>
				<tr>
					<td>
						{" "}
						<strong> Registeration No : </strong>
					</td>
					<td> {user.regNo} </td>
				</tr>
				<tr>
					<td>
						{" "}
						<strong> Course : </strong>
					</td>
					<td> {user.course + " " + user.yearOfStudy} </td>
				</tr>
			</table>
			<br />
			<br />

			<table>
				<tr>
					<th>S.No</th>
					<th>Paper Name</th>
					<th>Grade Obtained</th>
				</tr>
				{Object.entries(result)
					.sort()
					.map(([key, value], index) => {
						return (
							<tr>
								<td> {index + 1} </td>
								<td style={{ textTransform: "uppercase" }}>
									{" "}
									<strong> {key}</strong>
								</td>
								<td>{value}</td>
							</tr>
						);
					})}
				{}
			</table>
		</>
	);
}

function Result({ user }) {
	const [yearOne, setyearOne] = useState(false);
	const [yearTwo, setyearTwo] = useState(false);
	const [yearThree, setyearThree] = useState(false);
	console.log(user);
	return (
		<>
			<div>
				<button
					className=" resultbtn "
					onClick={() => {
						setyearOne(true);
						setyearTwo(false);
						setyearThree(false);
					}}
				>
					{" "}
					Year-1{" "}
				</button>
				<button
					className=" resultbtn "
					onClick={() => {
						setyearOne(false);
						setyearTwo(true);
						setyearThree(false);
					}}
				>
					{" "}
					Year-2{" "}
				</button>
				<button
					className=" resultbtn "
					onClick={() => {
						setyearOne(false);
						setyearTwo(false);
						setyearThree(true);
					}}
				>
					{" "}
					Year-3{" "}
				</button>
			</div>
			<div>
				{yearOne && <Show user={user} result={user.result.year_1} />}
				{yearTwo && <Show user={user} result={user.result.year_2} />}
				{yearThree && <Show user={user} result={user.result.year_3} />}
			</div>
		</>
	);
}

export default Result;
