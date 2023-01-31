import React from "react";
import { UilMapMarker, UilPhone, UilEnvelope } from "@iconscout/react-unicons";

function Contact() {
	return (
		<div className="contact mt-32 px-32 ">
			<h1 className="capitalize">get in touch</h1>

			<div className="flex justify-between gap-3 contact-box mx-auto">
				<div className="left py-5">
					<form className=" flex flex-col px-24 gap-5">
						<h4>Send a message</h4>
						{/* <label htmlFor="firstName">First Name</label> */}
						<input
							type="text"
							name="name"
							id="Name"
							placeholder="Name"
							required
							className=" px-3 py-2 border-2  outline-none focus:drop-shadow-lg "
						/>{" "}
						{/* <label htmlFor="email">Email</label> */}
						<input
							type="email"
							name="email"
							id="email"
							placeholder="Email"
							required
							className=" px-3 py-2 border-2  outline-none focus:drop-shadow-lg "
						/>{" "}
						{/* <label htmlFor="message">Message</label> */}
						<textarea
							placeholder="Message..."
							name="message"
							id="message"
							cols="30"
							rows="3"
							required
							className=" px-3 py-2 border-2  outline-none focus:drop-shadow-lg "
						></textarea>
						<button className="btn px-5 py-3 w-28 bg-blue-600 border-2 border-blue-600  hover:bg-white hover:text-blue-600   text-white">
							Send
						</button>
					</form>
				</div>
				<div className="right  flex flex-col gap-3">
					<div className="top bg-white h-1/2">
						<h4>Contact Info </h4>
						<table className="">
							<tr className="flex gap-3 justify-between items-center">
								<td>
									<UilMapMarker size="28" />
								</td>
								<td>
									<p>Andhra University, Visakhapatnam-530003.</p>
								</td>
							</tr>
							<a href="mailto:sathyagangadhar@gmail.com">
								<tr className="flex gap-3  items-center">
									<td>
										<UilEnvelope size="28" />
									</td>
									<td>
										<p>319106410046@andhrauniversity.edu.in</p>
									</td>
								</tr>
							</a>
							<a href="tel:9550973113">
								<tr className="flex gap-3  items-center">
									<td>
										<UilPhone size="28" />
									</td>
									<td>
										<p>9550973113 </p>
									</td>
								</tr>
							</a>
						</table>
					</div>
					<div className="bottom ">
						<iframe
							title="maps"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7600.708506187485!2d83.319516624316!3d17.727939751501278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39434499eb3e63%3A0xfef86702906c01e!2sAndhra%20University%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530003!5e0!3m2!1sen!2sin!4v1674705053404!5m2!1sen!2sin"
							width="500"
							height="250"
							style={{ border: 0 }}
							allowFullScreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
