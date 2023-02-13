import React, { useState } from "react";
import { useRef } from "react";

function UpdateForm() {
	const [student, setStudent] = useState({
		email: "",
		fName: "",
		lName: "",
		age: "",
		role: "",
		regNo: "",
		mobileNo: "",
		yearOfJoin: "",
		yearOfStudy: "",
		dateOfBirth: "",
		course: "",
		attendance: {
			year_1: "",
			year_2: "",
			year_3: "",
		},
		result: {
			year_1: {
				maths: "",
				db: "",
				cpnm: "",
			},
			year_2: { maths: "", toc: "", cpp: "" },
			year_3: { maths: "", cn: "", dsa: "" },
		},
	});
	const emailRef = useRef();
	const passwordRef = useRef();
	function handleSubmit(e) {
		e.preventDefault();
		console.log(student);
	}
	function handleChange(e) {
		setStudent({
			...student,
			[e.target.name]: e.target.value,
		});
	}
	function handleChangeAttendance(e) {
		setStudent({
			...student,
			attendance: {
				...student.attendance,
				[e.target.name]: e.target.value,
			},
		});
	}
	function handleChangeResultYear_1(e) {
		setStudent({
			...student,
			result: {
				...student.result,
				year_1: {
					...student.result.year_1,
					[e.target.name]: e.target.value,
				},
			},
		});
	}
	function handleChangeResultYear_2(e) {
		setStudent({
			...student,
			result: {
				...student.result,
				year_2: {
					...student.result.year_2,
					[e.target.name]: e.target.value,
				},
			},
		});
	}
	function handleChangeResultYear_3(e) {
		setStudent({
			...student,
			result: {
				...student.result,
				year_3: {
					...student.result.year_3,
					[e.target.name]: e.target.value,
				},
			},
		});
	}

	return (
		<>
			<div className="update-form">
				<h4> Form </h4>
				<form onSubmit={handleSubmit}>
					<strong>Account</strong>
					<div className="account">
						<label class="custom-field two">
							<input
								type="email"
								name="email"
								ref={emailRef}
								value={student.email}
								placeholder="&nbsp;"
								onChange={handleChange}
							/>
							<span class="placeholder">Email</span>
						</label>{" "}
						<label class="custom-field two">
							<input
								type="password"
								name="password"
								ref={passwordRef}
								placeholder="&nbsp;"
								onChange={handleChange}
							/>
							<span class="placeholder">Password</span>
						</label>{" "}
					</div>
					<strong>Details</strong>
					<div className="details">
						<label class="custom-field two">
							<input
								type="text"
								name="fName"
								value={student.fName}
								placeholder="&nbsp;"
								onChange={handleChange}
							/>
							<span class="placeholder">First Name</span>
						</label>{" "}
						<label class="custom-field two">
							<input
								type="text"
								name="lName"
								value={student.lName}
								placeholder="&nbsp;"
								onChange={handleChange}
							/>
							<span class="placeholder">Last Name</span>
						</label>{" "}
						<label class="custom-field two">
							<input
								type="number"
								name="mobileNo"
								value={student.mobileNo}
								placeholder="&nbsp;"
								onChange={handleChange}
							/>
							<span class="placeholder">Mobile No</span>
						</label>{" "}
						<label class="custom-field two">
							<input
								type="number"
								name="age"
								value={student.age}
								placeholder="&nbsp;"
								onChange={handleChange}
							/>
							<span class="placeholder">Age</span>
						</label>{" "}
						<label class="custom-field two">
							<input
								type="text"
								name="course"
								value={student.course}
								placeholder="&nbsp;"
								onChange={handleChange}
							/>
							<span class="placeholder">Course</span>
						</label>{" "}
						<label class="custom-field two">
							<input
								type="number"
								name="yearOfJoin"
								value={student.yearOfJoin}
								placeholder="&nbsp;"
								onChange={handleChange}
							/>
							<span class="placeholder">Year of Join</span>
						</label>{" "}
						<label class="custom-field two">
							<input
								type="number"
								name="yearOfStudy"
								value={student.yearOfStudy}
								placeholder="&nbsp;"
								onChange={handleChange}
							/>
							<span class="placeholder">Year of Study</span>
						</label>{" "}
						<label class="custom-field two">
							<input
								type="text"
								name="role"
								value={student.role}
								placeholder="&nbsp;"
								onChange={handleChange}
							/>
							<span class="placeholder">Role</span>
						</label>{" "}
						<label class="custom-field two">
							<input
								type="number"
								name="regNo"
								value={student.regNo}
								placeholder="&nbsp;"
								onChange={handleChange}
							/>
							<span class="placeholder">Registration No</span>
						</label>{" "}
						<label class="custom-field two">
							<input
								type="date"
								name="dateOfBirth"
								value={student.dateOfBirth}
								placeholder="&nbsp;"
								onChange={handleChange}
							/>
							<span class="placeholder">Date Of Birth </span>
						</label>{" "}
					</div>
					<br />
					<strong> Attendance </strong>
					<div className="attend">
						<label class="custom-field two">
							<input
								type="number"
								name="year_1"
								// value={student.attendance.year_1}
								placeholder="&nbsp;"
								onChange={handleChangeAttendance}
							/>
							<span class="placeholder">Attendance year-1 </span>
						</label>{" "}
						<label class="custom-field two">
							<input
								type="number"
								name="year_2"
								// value={student.attendance.year_2}
								placeholder="&nbsp;"
								onChange={handleChangeAttendance}
							/>
							<span class="placeholder">Attendance year-2</span>
						</label>{" "}
						<label class="custom-field two">
							<input
								type="number"
								name="year_3"
								// value={student.attendance.year_3}
								placeholder="&nbsp;"
								onChange={handleChangeAttendance}
							/>
							<span class="placeholder">Attendance year-3</span>
						</label>{" "}
					</div>
					<br />
					<strong>Result</strong>
					<div className="result">
						<label class="custom-field two">
							<input
								type="number"
								name="cpnm"
								// value={student.cpnm}
								placeholder="&nbsp;"
								onChange={handleChangeResultYear_1}
							/>
							<span class="placeholder">Result year-1</span>
						</label>{" "}
						<label class="custom-field two">
							<input
								type="number"
								name="db"
								// value={student.db}
								placeholder="&nbsp;"
								onChange={handleChangeResultYear_1}
							/>
							<span class="placeholder">Result year-1</span>
						</label>{" "}
						<label class="custom-field two">
							<input
								type="number"
								name="maths"
								// value={student.maths}
								placeholder="&nbsp;"
								onChange={handleChangeResultYear_1}
							/>
							<span class="placeholder">Result year-1</span>
						</label>{" "}
						<label class="custom-field two">
							<input
								type="number"
								name="cpp"
								// value={student.cpp}
								placeholder="&nbsp;"
								onChange={handleChangeResultYear_2}
							/>
							<span class="placeholder">Result year-2</span>
						</label>{" "}
						<label class="custom-field two">
							<input
								type="number"
								name="maths"
								// value={student.maths}
								placeholder="&nbsp;"
								onChange={handleChangeResultYear_2}
							/>
							<span class="placeholder">Result year-2</span>
						</label>{" "}
						<label class="custom-field two">
							<input
								type="number"
								name="toc"
								// value={student.toc}
								placeholder="&nbsp;"
								onChange={handleChangeResultYear_2}
							/>
							<span class="placeholder">Result year-2</span>
						</label>{" "}
						<label class="custom-field two">
							<input
								type="number"
								name="cn"
								// value={student.cn}
								placeholder="&nbsp;"
								onChange={handleChangeResultYear_3}
							/>
							<span class="placeholder">Result year-3</span>
						</label>{" "}
						<label class="custom-field two">
							<input
								type="number"
								name="dsa"
								// value={student.dsa}
								placeholder="&nbsp;"
								onChange={handleChangeResultYear_3}
							/>
							<span class="placeholder">Result year-3</span>
						</label>{" "}
						<label class="custom-field two">
							<input
								type="number"
								name="maths"
								// value={student.maths}
								placeholder="&nbsp;"
								onChange={handleChangeResultYear_3}
							/>
							<span class="placeholder">Result year-3</span>
						</label>{" "}
					</div>
					<button className="btn" type="submit">
						{" "}
						Submit{" "}
					</button>
				</form>
			</div>
		</>
	);
}

export default UpdateForm;
