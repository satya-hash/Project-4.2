import { Navigate } from "react-router-dom";
import { useAuth } from "../Components/contexts/AuthContext";

export default function AuthRoute({ children }) {
	const { currentUser } = useAuth();

	if (currentUser) {
		return children;
	} else {
		return <Navigate to="/login" replace />;
	}
}
