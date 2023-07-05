import React, { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Components/contexts/AuthContext";

function NewStudent() {
	let { signUp, currentUser, setUserData, setProfile, logIn } = useAuth();
	let navigate = useNavigate();
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
			year_1: { one: "", two: "" },
			year_2: { one: "", two: "" },
			year_3: { one: "", two: "" },
			year_4: { one: "", two: "" },
		},
		result: {
			year_1: [
				{
					maths: "",
					physics: "",
					engineering_grahics: "",
					probabiligy_statistics: "",
					ethics_moral_values: "",
					physics_lab: "",
					workshop: "",
				},
			],
			year_2: [
				{
					eee: "",
					dsa: "",
					dld: "",
					oop: "",
					managerial_economics: "",
					ds_lab: "",
					oop_lab: "",
				},
				{
					dm: "",
					coa: "",
					dbms: "",
					daa: "",
					organizational_behaviour: "",
					es: "",
					dbms_lab: "",
					dld_lab: "",
				},
			],
			year_3: [
				{
					cn: "",
					os: "",
					flat: "",
					oose: "",
					dc_cn: "",
					os_lab: "",
					soft_skills_lab: "",
				},
				{
					cd: "",
					wt: "",
					dwdm: "",
					sn: "",
					ai: "",
					es: "",
					wt_lab: "",
					es_lab: "",
				},
			],
			year_4: [
				{ ml: "", ml_lab: "", gps: "", cb: "", enterpreneurship: "", cns: "" },
			],
		},
	});
	const emailRef = useRef();
	const passwordRef = useRef();

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			let newStudent = await signUp(
				emailRef.current.value,
				passwordRef.current.value
			);
			console.log("accout created");

			await setUserData(newStudent.user.uid, student);

			await setProfile(student.fName + student.lName);

			await logIn(currentUser.email, currentUser.password);
		} catch (err) {
			console.log(err.message);
			console.log(err.code);
		}

		navigate("/admin_dashboard");
	}
	function handleChange(event) {
		const { name, value } = event.target;

		if (
			name === "year_1" ||
			name === "year_2" ||
			name === "year_3" ||
			name === "year_4"
		) {
			setStudent({
				...student,
				attendance: {
					...student.attendance,
					[name]: value,
				},
			});
		} else {
			setStudent({ ...student, [name]: value });
		}
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
						<label className="custom-field two">
							<input
								type="email"
								name="email"
								ref={emailRef}
								value={student.email}
								placeholder="&nbsp;"
								onChange={handleChange}
							/>
							<span className="placeholder">Email</span>
						</label>{" "}
						<label className="custom-field two">
							<input
								type="password"
								name="password"
								ref={passwordRef}
								placeholder="&nbsp;"
								onChange={handleChange}
							/>
							<span className="placeholder">Password</span>
						</label>{" "}
					</div>
					<strong>Details</strong>
					<div className="details">
						<label className="custom-field two">
							<input
								type="text"
								name="fName"
								value={student.fName}
								placeholder="&nbsp;"
								onChange={handleChange}
							/>
							<span className="placeholder">First Name</span>
						</label>{" "}
						<label className="custom-field two">
							<input
								type="text"
								name="lName"
								value={student.lName}
								placeholder="&nbsp;"
								onChange={handleChange}
							/>
							<span className="placeholder">Last Name</span>
						</label>{" "}
						<label className="custom-field two">
							<input
								type="number"
								name="mobileNo"
								value={student.mobileNo}
								placeholder="&nbsp;"
								onChange={handleChange}
							/>
							<span className="placeholder">Mobile No</span>
						</label>{" "}
						<label className="custom-field two">
							<input
								type="number"
								name="age"
								value={student.age}
								placeholder="&nbsp;"
								onChange={handleChange}
							/>
							<span className="placeholder">Age</span>
						</label>{" "}
						<label className="custom-field two">
							<input
								type="text"
								name="course"
								value={student.course}
								placeholder="&nbsp;"
								onChange={handleChange}
							/>
							<span className="placeholder">Course</span>
						</label>{" "}
						<label className="custom-field two">
							<input
								type="number"
								name="yearOfJoin"
								value={student.yearOfJoin}
								placeholder="&nbsp;"
								onChange={handleChange}
							/>
							<span className="placeholder">Year of Join</span>
						</label>{" "}
						<label className="custom-field two">
							<input
								type="number"
								name="yearOfStudy"
								value={student.yearOfStudy}
								placeholder="&nbsp;"
								onChange={handleChange}
							/>
							<span className="placeholder">Year of Study</span>
						</label>{" "}
						<label className="custom-field two">
							<input
								type="text"
								name="role"
								value={student.role}
								placeholder="&nbsp;"
								onChange={handleChange}
							/>
							<span className="placeholder">Role</span>
						</label>{" "}
						<label className="custom-field two">
							<input
								type="number"
								name="regNo"
								value={student.regNo}
								placeholder="&nbsp;"
								onChange={handleChange}
							/>
							<span className="placeholder">Registration No</span>
						</label>{" "}
						<label className="custom-field two">
							<input
								type="date"
								name="dateOfBirth"
								value={student.dateOfBirth}
								placeholder="&nbsp;"
								onChange={handleChange}
							/>
							<span className="placeholder">Date Of Birth </span>
						</label>{" "}
					</div>
					<br />
					<strong> Attendance </strong>
					<div className="attend">
						{Object.entries(student.attendance)
							.sort()
							.forEach(([key, value]) => {
								Object.entries(value).map(([k, v]) => {
									return (
										<label className="custom-field two">
											<input
												type="text"
												// name={key}
												// value={student.attendance[key]}
												placeholder="&nbsp;"
												// onChange={handleChange}
											/>
											<span className="placeholder">Attendance {key} </span>
										</label>
									);
								});
							})}
					</div>
					<br />
					<strong>Result</strong>
					<div className="result">
						{Object.entries(student.result)
							.sort()
							.map(([year, subs]) => {
								return Object.entries(subs).map(([subName, subMarks]) => {
									return (
										<>
											<label className="custom-field two">
												<input
													type="text"
													name={subName}
													value={subMarks}
													placeholder="&nbsp;"
													onChange={
														year === "year_1"
															? handleChangeResultYear_1
															: year === "year_2"
															? handleChangeResultYear_2
															: handleChangeResultYear_3
													}
												/>
												<span
													style={{
														textTransform: "capitalize",
													}}
													className="placeholder"
												>
													{" "}
													{subName}{" "}
												</span>
											</label>
										</>
									);
								});
							})}
					</div>
					<button
						className="btn"
						type="submit"
						style={{ margin: " 1rem auto" }}
					>
						{" "}
						Submit{" "}
					</button>
				</form>
			</div>
		</>
	);
}

export default NewStudent;
