import React from "react";
import About from "../Components/About";
import akImg from "../Assets/akhil.png";
import satyaImg from "../Assets/satya.png";
import snigdhaImg from "../Assets/snigdha.png";
import maniImg from "../Assets/mani.png";
import pranathiImg from "../Assets/pranathi.png";
function AboutUs() {
	let students = [
		{
			name: "P Satya Surendra",
			description: `
			Hello everyone! My name is P. Satya Surendra, and I am a resident of Draksharama . I am currently studying at Andhra University College of Engineering to earn my Bachelor of Technology degree. My academic journey so far has taught me that taking on new experiences and opportunities is essential to develop valuable skills. I am excited to apply my skills to new projects and challenges.`,
			picture: satyaImg,
		},
		{
			name: "Patibandla Snigdha",
			description: `
			Hello Amigos, Myself Patibandla Snigdha pursuing final year B.Tech majors in Computer Science in Andhra University. Just like any other BTech student myself having many dreams and goals . In my 3rd year, I have been more passionate about becoming Web developer. I love building websites, being a creative person I choose Front end and developed many useful websites. This interest took me to build our final year project i.e Student Management System. Would like to hear about your interests,share your thoughts on our official website mentioned below.
			`,
			picture: snigdhaImg,
		},
		{
			name: " S.V.Mani Deepika",
			description: `
			Greetings! My name is S.V.Mani Deepika, and I come from Ongole, India. As a student pursuing a Bachelor of Technology degree at Andhra University College of Engineering, I have learned that taking on new experiences and opportunities is the key to develop new skills. With this mindset, I have been able to accomplish a lot, including completing my 10th grade at A.P.Model School and earning my Diploma from GPW Ethamukkala. I am confident that my knowledge and skills can contribute to the successful completion of any project.
`,
			picture: maniImg,
		},
		{
			name: "K.Pranathi",
			description: `
			Hey there, I am K. Pranathi, a 20-year-old student hailing from Guntur in India. I am currently enrolled at Andhra University College of Engineering to earn my Bachelor of Technology degree. Throughout my academic journey, I have taken on new experiences and opportunities to develop valuable skills. My communication skills and knowledge base ensure that I can efficiently complete any project that comes my way.
`,
			picture: pranathiImg,
		},
		{
			name: "Ch Akhil Kumar",
			description: `I am P. Akhil, and I am from Guntur. Currently, I am pursuing a Bachelor of Technology degree at Andhra University College of Engineering. My academic journey has taught me that taking on new experiences and opportunities is necessary to develop valuable skills. I have completed my 10th grade at Oxford English Medium High School and my Intermediate from Narayana Junior College, both of which I am proud of. I am confident that my skills and knowledge can be a valuable addition to any project I work on.

			`,
			picture: akImg,
		},
	];

	return (
		<div className="about ">
			{students.map((data) => {
				return <About data={data} />;
			})}
		</div>
	);
}

export default AboutUs;
