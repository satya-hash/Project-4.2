import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import ErrorPage from "./Pages/ErrorPage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Dashboard from "./Pages/Dashboard";
import { AuthProvider } from "./Components/contexts/AuthContext";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import AuthRoute from "./Pages/AuthRoute";
import SignUp from "./Pages/SignUp";
import NewStudent from "./Pages/Forms/NewStudent";
import UpdateForm from "./Pages/Forms/UpdateForm";
import Messages from "./Pages/Admin/Messages";

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

					<Route
						path="/dashboard"
						element={
							<AuthRoute>
								<Dashboard />
							</AuthRoute>
						}
					/>
					<Route
						path="/admin_dashboard"
						element={
							<AuthRoute>
								<AdminDashboard />
							</AuthRoute>
						}
					/>
					<Route
						path="/add_student"
						element={
							<AuthRoute>
								<NewStudent />
							</AuthRoute>
						}
					/>
					<Route
						path="/update_student"
						element={
							<AuthRoute>
								<UpdateForm />
							</AuthRoute>
						}
					/>
					<Route
						path="/message"
						element={
							<AuthRoute>
								<Messages />
							</AuthRoute>
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
