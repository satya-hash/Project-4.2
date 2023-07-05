import React from "react";

function Attendance({ attendance }) {
	return (
		<div>
			<div>
				<h3>Attendance :</h3>
				{/* <table>
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
									width: .attendance.year_1 + "%",
									background: "#2563EB",
									color: "#fff",
									borderRadius: "0rem 0.2rem 0.2rem 0rem",
								}}
							>
								{.attendance.year_1}
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
									width: .attendance.year_2 + "%",
									background: "#2563EB",
									color: "#fff",
									borderRadius: "0rem 0.2rem 0.2rem 0rem",
								}}
							>
								{.attendance.year_2}
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
									width: .attendance.year_3 + "%",
									background: "#2563EB",
									color: "#fff",
									borderRadius: "0rem 0.2rem 0.2rem 0rem",
								}}
							>
								{.attendance.year_3}
							</p>
						</td>
					</tr>
				</table> */}
				<table>
					<thead>
						<tr>
							<th> Year </th>
							<th> sem-1 </th>
							<th> sem-2 </th>
						</tr>
					</thead>
					{Object.entries(attendance)
						.sort()
						.map(([year, val]) => {
							console.log(val, year);
							return (
								<tr>
									<td> {year} </td>
									{Object.entries(val)
										.sort()
										.map(([sem, v]) => {
											return (
												<td style={{ width: "20rem" }}>
													<p
														style={{
															width: v + "%",
															background: "#2563EB",
															color: "#fff",
															borderRadius: "0rem 0.2rem 0.2rem 0rem",
														}}
													>
														{v}%
													</p>
												</td>
											);
										})}
								</tr>
							);
						})}
				</table>
			</div>
		</div>
	);
}

export default Attendance;
