import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyBNsWFVt-bGPtKQvhQV-E_JWyfB4wbCnKM",
	authDomain: "login-e396c.firebaseapp.com",
	projectId: "login-e396c",
	storageBucket: "login-e396c.appspot.com",
	messagingSenderId: "1069458429557",
	appId: "1:1069458429557:web:591b960ae923c4e6f58a3c",
	measurementId: "G-C60L6KXR4M",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
