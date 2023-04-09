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
	const [sem_1, setSem_1] = useState(false);
	const [sem_2, setSem_2] = useState(false);
	const [sem_3, setSem_3] = useState(false);
	const [sem_4, setSem_4] = useState(false);
	const [sem_5, setSem_5] = useState(false);
	const [sem_6, setSem_6] = useState(false);
	const [sem_7, setSem_7] = useState(false);
	return (
		<>
			<div>
				<button
					className=" resultbtn "
					onClick={() => {
						setSem_1(true);
						setSem_2(false);
						setSem_3(false);
						setSem_4(false);
						setSem_5(false);
						setSem_6(false);
						setSem_7(false);
					}}
				>
					{" "}
					SEM_1{" "}
				</button>
				<button
					className=" resultbtn "
					onClick={() => {
						setSem_1(false);
						setSem_2(true);
						setSem_3(false);
						setSem_4(false);
						setSem_5(false);
						setSem_6(false);
						setSem_7(false);
					}}
				>
					{" "}
					SEM_2{" "}
				</button>
				<button
					className=" resultbtn "
					onClick={() => {
						setSem_1(false);
						setSem_2(false);
						setSem_3(true);
						setSem_4(false);
						setSem_5(false);
						setSem_6(false);
						setSem_7(false);
					}}
				>
					{" "}
					SEM_3{" "}
				</button>

				<button
					className=" resultbtn "
					onClick={() => {
						setSem_1(false);
						setSem_2(false);
						setSem_3(false);
						setSem_4(true);
						setSem_5(false);
						setSem_6(false);
						setSem_7(false);
					}}
				>
					{" "}
					SEM_4{" "}
				</button>
				<button
					className=" resultbtn "
					onClick={() => {
						setSem_1(false);
						setSem_2(false);
						setSem_3(false);
						setSem_4(false);
						setSem_5(true);
						setSem_6(false);
						setSem_7(false);
					}}
				>
					{" "}
					SEM_5{" "}
				</button>
				<button
					className=" resultbtn "
					onClick={() => {
						setSem_1(false);
						setSem_2(false);
						setSem_3(false);
						setSem_4(false);
						setSem_5(false);
						setSem_6(true);
						setSem_7(false);
					}}
				>
					{" "}
					SEM_6{" "}
				</button>
				<button
					className=" resultbtn "
					onClick={() => {
						setSem_1(false);
						setSem_2(false);
						setSem_3(false);
						setSem_4(false);
						setSem_5(false);
						setSem_6(false);
						setSem_7(true);
					}}
				>
					{" "}
					SEM_7{" "}
				</button>
			</div>
			<div>
				{sem_1 && <Show user={user} result={user.result.year_1.one} />}
				{sem_2 && <Show user={user} result={user.result.year_1.two} />}
				{sem_3 && <Show user={user} result={user.result.year_2.one} />}
				{sem_4 && <Show user={user} result={user.result.year_2.two} />}
				{sem_5 && <Show user={user} result={user.result.year_3.one} />}
				{sem_6 && <Show user={user} result={user.result.year_3.two} />}
				{sem_7 && <Show user={user} result={user.result.year_3.one} />}
			</div>
		</>
	);
}

export default Result;
