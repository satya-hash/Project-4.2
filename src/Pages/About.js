import React from "react";
import AboutUs from "../Components/AboutUs";

function About() {
	let students = [
		{
			name: "P Satya Surendra",
			description: `
			My name is P.Satya Surendra and I am from Draksharama. 
			Currently I am  pursuing  B.tech at Andhra university college of engineering.
			
			I consistently challenged myself to take new experiences and opportunities that helpes me develop valuable skills.
			My knowledge and communication skills ensure that get work done.I believe my knowledge and skills can help in successful Completion of the project.
			Thank you.`,
			image: {},
		},
		{
			name: "Patibandla Snigdha",
			description: `Introduction 
			Myself Patibandla Snigdha pursuing final year B.Tech majors in Computer Science in Andhra University. Just like any other BTech student I too have my dreams and goals . In my 3rd year,I become more passionate about becoming Web developer. I love building websites, being a creative person I choose Front end and developed many useful websites. This interest took me to build our final year project i.e Student Management System. That’s all about me and my interests.Would like to hear about your interests,share your thoughts on our official website mentioned below.`,
			image: {},
		},
		{
			name: " S.V.Mani Deepika",
			description: `
			My name is S.V.Mani Deepika and I am from Ongole.
Iam studying B.Tech in CSE final year from Andhra University. 
I have completed my schooling from A.P. Moodel school, and my diploma from G.P.W.
I have knowledge of coding languages and great coding skills. 
Apart from coding, I am also a great team player. My strong communication skills also ensure that I am in sync with the team and can effectively get the job done.
I am keen on constantly updating my knowledge of the software development field and the latest technologies,and I am looking forward to keeping up with the latest trends in the industry.I believe my knowledge and enthusiasm can help in the successful completion of projects. Thank You.`,
			image: {},
		},
		{
			name: "K.Pranathi",
			description: `
			My name is K.Pranathi and I from Guntur. 
			Currently i am  pursuing  B.tech at Andhra university college of engineering.
			I have completed my 10th from ZP High School and Diploma from Gpw Ethamukkala.
			I consistently challenged myself to take new experiences and opportunities that helpes me develop valuable skills.
			My knowledge and communication skills ensure that get work done.I believe my knowledge and skills can help in successful Completion of the project.
			Thank you.`,
			image: {},
		},
		{
			name: "Ch Akhil Kumar",
			description: `
			`,
			image: {},
		},
	];

	return (
		<div className="about ">
			{students.map(({ name, description }) => {
				let data = { name: name, description: description };
				return <AboutUs data={data} />;
			})}
		</div>
	);
}

export default About;
