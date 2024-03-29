import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUS from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import ErrorPage from "./Pages/ErrorPage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Dashboard from "./Pages/Dashboard";
import { AuthProvider } from "./Components/contexts/AuthContext";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import AuthRoute from "./Pages/AuthRoute";
import NewStudent from "./Pages/Forms/NewStudent";
import UpdateForm from "./Pages/Forms/UpdateForm";
import Messages from "./Pages/Admin/Messages";
import License from "./Pages/License";
import Terms from "./Pages/Terms";
import Privacy from "./Pages/Privacy";

function App() {
	return (
		<AuthProvider>
			<div className="App">
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/license" element={<License />} />
					<Route path="/privacy" element={<Privacy />} />
					<Route path="/terms" element={<Terms />} />
					<Route path="/about" element={<AboutUS />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/login" element={<Login />} />

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
