import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Circular from "./Pages/Circular";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import ErrorPage from "./Pages/SignUp";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/circular" element={<Circular />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
