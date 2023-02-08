import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../../Firebase";
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

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

	function setProfile(userName) {
		return updateProfile(currentUser, {
			displayName: userName,
		});
	}

	function setUserData(userData) {
		return setDoc(doc(db, "users", currentUser.uid), userData);
	}

	function showResult() {
		return getDoc(doc(db, "users", currentUser.uid));
	}

	useEffect(() => {
		let unsubscribe = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user);
		});

		return unsubscribe;
	}, []);

	let value = {
		currentUser,
		signUp,
		logIn,
		logOut,
		setProfile,
		setUserData,
		showResult,
	};
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
