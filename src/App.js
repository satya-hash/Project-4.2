import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import ErrorPage from "./Pages/ErrorPage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Dashboard from "./Pages/Dashboard";
import { AuthProvider } from "./Components/contexts/AuthContext";
import PrivateRoute from "./Pages/PrivateRoute";
import ProfileForm from "./Pages/ProfileForm";

function App() {
	return (
		<AuthProvider>
			<div className="App">
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/profile" element={<ProfileForm />} />
					{/* <Route
						path="/profile"
						element={
							<PrivateRoute>
								<ProfileForm />
							</PrivateRoute>
						}
					/> */}
					<Route
						path="/dashboard"
						element={
							<PrivateRoute>
								<Dashboard />
							</PrivateRoute>
						}
					/>
					<Route path="*" element={<ErrorPage />} />
				</Routes>
				<Footer />
			</div>
		</AuthProvider>
	);
}

export default App;
