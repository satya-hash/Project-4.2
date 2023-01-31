import React, { useContext, useEffect, useState } from "react";
import { auth } from "../../Firebase";

const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [currentUser, setcurrentUser] = useState();

	function signUp(email, password) {
		return auth.createUserWithEmailAndPassword(email, password);
	}

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setcurrentUser(user);
		});
		return unsubscribe;
	}, []);

	const value = { currentUser, signUp };

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
