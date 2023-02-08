import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Components/contexts/AuthContext";
import Dashboard from "./Dashboard";
import ProfileForm from "./ProfileForm";

function PrivateRoute({ children }) {
	let { currentUser } = useAuth();
	let location = useLocation();

	return currentUser ? (
		<Dashboard />
	) : (
		// <Dashboard />
		<Navigate to="/login" />
	);
}

export default PrivateRoute;
