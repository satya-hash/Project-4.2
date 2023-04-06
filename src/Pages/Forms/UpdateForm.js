import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../Components/contexts/AuthContext";

function UpdateForm() {
	let { getData, setUserData } = useAuth();
	let navigate = useNavigate();
	let { state } = useLocation();
	const [student, setStudent] = useState();

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			await setUserData(state, student);
			console.log("data updated");
		} catch (err) {
			console.log(err.message);
			console.log(err.code);
		}

		navigate("/admin_dashboard");
	}
	function handleChange(event) {
		const { name, value } = event.target;

		if (name === "year_1" || name === "year_2" || name === "year_3") {
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
	// function handleChangeAttendance(e) {

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

	async function giveData(id) {
		let data = await getData(id);
		setStudent(data.data());
	}
	useEffect(() => {
		giveData(state);
	}, []);
	return (
		<>
			{student && (
				<div className="update-form">
					<h4> Form </h4>
					<form onSubmit={handleSubmit}>
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
							{Object.keys(student.attendance)
								.sort()
								.map((year) => (
									<label className="custom-field two">
										<input
											type="text"
											name={year}
											value={student.attendance[year]}
											placeholder="&nbsp;"
											onChange={handleChange}
										/>
										<span className="placeholder">Attendance {year} </span>
									</label>
								))}
						</div>
						<br />
						<strong>Result</strong>
						<div className="result">
							{Object.entries(student.result)
								.sort()
								.map(([year, subs]) => {
									console.log(year, subs);
									return Object.entries(subs).map(([subName, subMarks]) => {
										console.log(subName, subMarks);
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
			)}
		</>
	);
}

export default UpdateForm;
