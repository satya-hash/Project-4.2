import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../../Firebase";
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
} from "firebase/auth";
import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDoc,
	getDocs,
	setDoc,
} from "firebase/firestore";

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

	function sendMessage(data) {
		return addDoc(collection(db, "message"), data);
	}

	function getMessage() {
		return getDocs(collection(db, "message"));
	}

	function setUserData(id, userData) {
		return setDoc(doc(db, "students", id), userData);
	}

	function getData(id) {
		return getDoc(doc(db, "students", id));
	}

	function getAllStudents() {
		return getDocs(collection(db, "students"));
	}

	function deleteData(id) {
		return deleteDoc(doc(db, "students", id));
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
		getData,
		deleteData,
		getAllStudents,
		sendMessage,
		getMessage,
	};
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
