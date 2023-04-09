import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../Components/contexts/AuthContext";

function UpdateForm() {
	let { getData, setUserData } = useAuth();
	let navigate = useNavigate();
	let { state } = useLocation();
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
			year_1: {
				one: {
					m1: "",
					m2: "",
					chemistry: "",
					cpnm: "",
					essence: "",
					chemistry_lab: "",
					cpnm_lab: "",
				},
				two: {
					m3: "",
					physics: "",
					engineering_grahics: "",
					psqt: "",
					ethics_human_values: "",
					physics_lab: "",
					workshop: "",
				},
			},
			year_2: {
				one: {
					eee: "",
					ece: "",
					dsa: "",
					dld: "",
					oop: "",
					pem: "",
					ds_lab: "",
					oop_lab: "",
				},
				two: {
					dm: "",
					coa: "",
					dbms: "",
					daa: "",
					ob: "",
					es: "",
					dbms_lab: "",
					dld_lab: "",
				},
			},
			year_3: {
				one: {
					cn: "",
					os: "",
					flat: "",
					oose: "",
					or: "",
					e_1: "",
					os_lab: "",
					cn_lab: "",
					soft_skilss: "",
				},
				two: {
					cd: "",
					wt: "",
					e_2: "",
					e_3: "",
					dwdm: "",
					sn: "",
					e_2_lab: "",
					wt_lab: "",
				},
			},
			year_4: {
				one: {
					ml: "",
					gps: "",
					cloud_tech: "",
					cb: "",
					enterpreneurship: "",
					cns: "",
					ml_lab: "",
					cns_lab: "",
				},
			},
		},
	});
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

		setStudent({ ...student, [name]: value });
	}

	function handleChangeAttendance_1(e) {
		let { name, value } = e.target;
		setStudent({
			...student,
			attendance: {
				...student.attendance,
				year_1: {
					...student.attendance.year_1,
					[name]: value,
				},
			},
		});
	}
	function handleChangeAttendance_2(e) {
		let { name, value } = e.target;
		setStudent({
			...student,
			attendance: {
				...student.attendance,
				year_2: {
					...student.attendance.year_1,
					[name]: value,
				},
			},
		});
	}
	function handleChangeAttendance_3(e) {
		let { name, value } = e.target;
		setStudent({
			...student,
			attendance: {
				...student.attendance,
				year_3: {
					...student.attendance.year_1,
					[name]: value,
				},
			},
		});
	}
	function handleChangeAttendance_4(e) {
		let { name, value } = e.target;
		setStudent({
			...student,
			attendance: {
				...student.attendance,
				year_4: {
					...student.attendance.year_1,
					[name]: value,
				},
			},
		});
	}

	function handleChangeResult_1(e, sem) {
		let { name, value } = e.target;
		if (sem === "one") {
			setStudent({
				...student,
				result: {
					...student.result,
					year_1: {
						...student.result.year_1,
						one: {
							...student.result.year_1.one,
							[name]: value,
						},
					},
				},
			});
		} else {
			setStudent({
				...student,
				result: {
					...student.result,
					year_1: {
						...student.result.year_1,
						two: {
							...student.result.year_1.two,
							[name]: value,
						},
					},
				},
			});
		}
	}
	function handleChangeResult_2(e, sem) {
		let { name, value } = e.target;
		if (sem === "one") {
			setStudent({
				...student,
				result: {
					...student.result,
					year_2: {
						...student.result.year_2,
						one: {
							...student.result.year_2.one,
							[name]: value,
						},
					},
				},
			});
		} else {
			setStudent({
				...student,
				result: {
					...student.result,
					year_2: {
						...student.result.year_2,
						two: {
							...student.result.year_2.two,
							[name]: value,
						},
					},
				},
			});
		}
	}
	function handleChangeResult_3(e, sem) {
		let { name, value } = e.target;
		if (sem === "one") {
			setStudent({
				...student,
				result: {
					...student.result,
					year_3: {
						...student.result.year_3,
						one: {
							...student.result.year_3.one,
							[name]: value,
						},
					},
				},
			});
		} else {
			setStudent({
				...student,
				result: {
					...student.result,
					year_3: {
						...student.result.year_3,
						two: {
							...student.result.year_3.two,
							[name]: value,
						},
					},
				},
			});
		}
	}
	function handleChangeResult_4(e, sem) {
		let { name, value } = e.target;
		if (sem === "one") {
			setStudent({
				...student,
				result: {
					...student.result,
					year_4: {
						...student.result.year_4,
						one: {
							...student.result.year_4.one,
							[name]: value,
						},
					},
				},
			});
		} else {
			setStudent({
				...student,
				result: {
					...student.result,
					year_4: {
						...student.result.year_4,
						two: {
							...student.result.year_4.two,
							[name]: value,
						},
					},
				},
			});
		}
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
							{Object.entries(student.attendance).map(([key, value]) => {
								return (
									<>
										<br />
										{Object.entries(value).map(([k, v]) => {
											return (
												<label className="custom-field two">
													<input
														type="text"
														name={k}
														value={v}
														placeholder="&nbsp;"
														onChange={
															key === "year_1"
																? handleChangeAttendance_1
																: key === "year_2"
																? handleChangeAttendance_2
																: key === "year_3"
																? handleChangeAttendance_3
																: handleChangeAttendance_4
														}
													/>
													<span className="placeholder">
														Attendance {`${key} sem ${k}`}{" "}
													</span>
												</label>
											);
										})}
									</>
								);
							})}
						</div>
						<br />
						<strong>Result</strong>
						<div className="result">
							{Object.entries(student.result).map(([year, value]) => {
								return (
									<>
										<h5 style={{ textTransform: "capitalize" }}> {year} </h5>
										{Object.entries(value).map(([sem, subs]) => {
											return (
												<>
													<br />
													{Object.entries(subs).map(([k, v]) => {
														return (
															<label
																style={{ textTransform: "capitalize" }}
																className="custom-field two"
															>
																<input
																	type="text"
																	name={k}
																	value={v}
																	placeholder="&nbsp;"
																	onChange={(e) => {
																		if (year === "year_1") {
																			handleChangeResult_1(e, sem);
																		} else if (year === "year_2") {
																			handleChangeResult_2(e, sem);
																		} else if (year === "year_3") {
																			handleChangeResult_3(e, sem);
																		} else handleChangeResult_4(e, sem);
																	}}
																/>
																<span className="placeholder">
																	{" "}
																	{` ${k} `}{" "}
																</span>
															</label>
														);
													})}
												</>
											);
										})}
									</>
								);
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
