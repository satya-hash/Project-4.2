import React, { useState } from "react";
import { UilMapMarker, UilPhone, UilEnvelope } from "@iconscout/react-unicons";
import { useAuth } from "../Components/contexts/AuthContext";

function Contact() {
	let { sendMessage } = useAuth();
	const [message, setMessage] = useState({
		name: "",
		email: "",
		message: "",
	});
	async function handleSubmit(e) {
		e.preventDefault();
		try {
			await sendMessage(message);
			alert("Your message is send");
		} catch (err) {
			console.log(err.message);
			console.log(err.code);
		}
	}

	function handleChange(e) {
		e.preventDefault();
		let name = e.target.name;
		let value = e.target.value;
		setMessage({
			...message,
			[name]: value,
		});
	}

	return (
		<div className="contact">
			<h1>get in touch</h1>

			<div className="contact-box ">
				<div className="left">
					<form onSubmit={handleSubmit} onChange={handleChange}>
						<h4>Send a message</h4>
						{/* <label htmlFor="firstName">First Name</label> */}
						<input
							type="text"
							name="name"
							value={message.value}
							id="Name"
							placeholder="Name"
							required
							// className=" px-3 py-2 border-2  outline-none focus:drop-shadow-lg "
						/>{" "}
						{/* <label htmlFor="email">Email</label> */}
						<input
							type="email"
							name="email"
							id="email"
							value={message.email}
							placeholder="Email"
							required
							// className=" px-3 py-2 border-2  outline-none focus:drop-shadow-lg "
						/>{" "}
						{/* <label htmlFor="message">Message</label> */}
						<textarea
							placeholder="Message..."
							name="message"
							value={message.message}
							id="message"
							cols="30"
							rows="3"
							required
							// className=" px-3 py-2 border-2  outline-none focus:drop-shadow-lg "
						></textarea>
						<button className="btn">Send</button>
					</form>
				</div>
				<div className="right">
					<div className="top ">
						<h4>Contact Info </h4>
						<table className="">
							<a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7600.708506187485!2d83.319516624316!3d17.727939751501278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39434499eb3e63%3A0xfef86702906c01e!2sAndhra%20University%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530003!5e0!3m2!1sen!2sin!4v1674705053404!5m2!1sen!2sin">
								<tr>
									<td>
										<UilMapMarker size="28" />
									</td>
									<td>
										<p>Andhra University, Visakhapatnam-530003.</p>
									</td>
								</tr>
							</a>
							<a href="mailto:sathyagangadhara@gmail.com">
								<tr>
									<td>
										<UilEnvelope size="28" />
									</td>
									<td>
										<p>sathyagangadhara@gmail.com</p>
									</td>
								</tr>
							</a>
							<a href="tel:9550973113">
								<tr>
									<td>
										<UilPhone size="28" />
									</td>
									<td>
										<p>8341353034 </p>
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
							referrerPolicy="no-referrer-when-downgrade"></iframe>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
