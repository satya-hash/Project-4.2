import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Components/contexts/AuthContext";
import Dashboard from "./Dashboard";

function PrivateRoute() {
	let { currentUser } = useAuth();

	return currentUser ? <Dashboard /> : <Navigate to="/login" />;
}

export default PrivateRoute;
