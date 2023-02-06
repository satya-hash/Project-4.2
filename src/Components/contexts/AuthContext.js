import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../Firebase";
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";

let AuthContext = createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	let [currentUser, setCurrentUser] = useState();

	function signUp(email, password) {
		return createUserWithEmailAndPassword(auth, email, password);
	}
	function logIn(email, password) {
		return signInWithEmailAndPassword(auth, email, password);
	}

	function logOut() {
		return signOut(auth);
	}

	useEffect(() => {
		let unsubscribe = onAuthStateChanged(auth, (user) => {
			console.log(user);
			setCurrentUser(user);
		});

		return unsubscribe;
	}, []);

	let value = {
		currentUser,
		signUp,
		logIn,
		logOut,
	};
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
