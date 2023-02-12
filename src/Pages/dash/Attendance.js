import React from "react";

function Attendance({ user }) {
	return (
		<div>
			<div>
				<h3>Attendance :</h3>
				<table>
					<tr>
						<td>
							<p>
								{" "}
								1<sup>st</sup> year
							</p>{" "}
						</td>
						<td>
							<p
								style={{
									width: user.attendance.year_1 + "%",
									background: "#2563EB",
									color: "#fff",
									borderRadius: "0rem 0.2rem 0.2rem 0rem",
								}}
							>
								{user.attendance.year_1}
							</p>
						</td>
					</tr>
					<tr>
						<td>
							<p>
								{" "}
								2<sup>st</sup> year
							</p>{" "}
						</td>
						<td>
							<p
								style={{
									width: user.attendance.year_2 + "%",
									background: "#2563EB",
									color: "#fff",
									borderRadius: "0rem 0.2rem 0.2rem 0rem",
								}}
							>
								{user.attendance.year_2}
							</p>
						</td>
					</tr>
					<tr>
						<td>
							<p>
								{" "}
								3<sup>st</sup> year
							</p>{" "}
						</td>
						<td>
							<p
								style={{
									width: user.attendance.year_3 + "%",
									background: "#2563EB",
									color: "#fff",
									borderRadius: "0rem 0.2rem 0.2rem 0rem",
								}}
							>
								{user.attendance.year_3}
							</p>
						</td>
					</tr>
				</table>
			</div>
		</div>
	);
}

export default Attendance;
