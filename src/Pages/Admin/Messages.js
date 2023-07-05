import React, { useEffect, useState } from "react";
import Card from "../../Components/Card";
import { useAuth } from "../../Components/contexts/AuthContext";

function Messages() {
	let { getMessage } = useAuth();
	const [messages, setMessages] = useState();

	async function getData() {
		let mess = [];
		try {
			let res = await getMessage();
			res.forEach((doc) => {
				mess.push({ data: doc.data(), id: doc.id });
			});
			setMessages(mess);
		} catch (error) {
			console.log(error.message);
			console.log(error.code);
		}
	}
	if (messages) {
		console.log(messages[0].data);
	}
	useEffect(() => {
		getData();
	}, []);
	return (
		<div className="message">
			{messages && messages.map(({ id, data }) => <Card data={data} />)}
		</div>
	);
}

export default Messages;
