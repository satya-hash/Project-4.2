import React, { useState } from "react";
import { useAuth } from "../Components/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function ProfileForm() {
	let { setUserData, setProfile } = useAuth();
	let navigate = useNavigate();

	// console.log(currentUser.uid);

	let [user, setUser] = useState({
		fName: "",
		lName: "",
		course: "",
		yearOfStudy: "",
		yearOfJoin: "",
		phNo: "",
		// DOB: "",
	});

	function handleChange(e) {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	}

	async function handleSubmit(e) {
		e.preventDefault();

		// await setDoc(doc(db, "users", currentUser.uid), user);

		await setUserData(user);
		await setProfile(user.fName + user.lName);

		// console.log(user);
		navigate("/Dashboard");
	}

	return (
		<div className="profile-form ">
			<form onSubmit={handleSubmit} onChange={handleChange} method="post">
				<div className="details">
					<label class="custom-field two">
						<input
							type="text"
							name="fName"
							value={user.fName}
							placeholder="&nbsp;"
						/>
						<span class="placeholder">First Name</span>
					</label>
					<label class="custom-field two">
						<input
							type="text"
							name="lName"
							value={user.lName}
							placeholder="&nbsp;"
						/>
						<span class="placeholder">Last Name</span>
					</label>
					<label class="custom-field two">
						<input
							type="text"
							name="course"
							value={user.course}
							placeholder="&nbsp;"
						/>
						<span class="placeholder">Course</span>
					</label>
					<label class="custom-field two">
						<input
							type="number"
							name="phNo"
							value={user.phNo}
							placeholder="&nbsp;"
						/>
						<span class="placeholder">Mobile No</span>
					</label>
					<label class="custom-field two">
						<input
							type="number"
							name="yearOfJoin"
							value={user.yearOfJoin}
							placeholder="&nbsp;"
						/>
						<span class="placeholder">Year of Joining</span>
					</label>
					<label class="custom-field two">
						<input
							type="number"
							name="yearOfStudy"
							value={user.yearOfStudy}
							placeholder="&nbsp;"
						/>
						<span class="placeholder">Year of Study</span>
					</label>
					{/* <label class="custom-field two">
						<input
							type="date"
							name="DOB"
							value={user.DOB}
							placeholder="&nbsp;"
						/>
						<span class="placeholder">Date of Birth</span>
					</label> */}
				</div>

				{/* <input type="text" name="name" id="name" />
				<input type="number" name="number" id="number" />
				<input type="email" name="email" id="email" />
				<input type="tel" name="phno" id="phno " />
				<input type="file" name="profile" id="profile" />
				<input type="number" name="year" id="year" /> */}
				<button type="submit" className="btn ">
					Continue
				</button>
			</form>
		</div>
	);
}

export default ProfileForm;
