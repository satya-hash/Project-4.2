import React from "react";
import Loading from "./Loading";

function Card({ data }) {
	return (
		<>
			{!data ? (
				<Loading />
			) : (
				<div className="card-category-1">
					<div className={`basic-card basic-card-aqua`}>
						<div className="card-content">
							<span className="card-title">{data.name}</span>
							<p className="card-text">{data.message}</p>
						</div>

						<div className="card-link">
							<a href={`mailto:${data.email}`}>
								<span>{data.email}</span>
							</a>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default Card;
