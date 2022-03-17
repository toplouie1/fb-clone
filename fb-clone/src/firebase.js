import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDy8u6E6RAtAkY936LQaOCJGd7g_EFQMYY",
	authDomain: "facebook-clone-b8261.firebaseapp.com",
	projectId: "facebook-clone-b8261",
	storageBucket: "facebook-clone-b8261.appspot.com",
	messagingSenderId: "620907791583",
	appId: "1:620907791583:web:fbf443f387f6016824556a",
	measurementId: "G-KY7DKE7BWN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// const [nameForEmail, setNameForEmail] = useState();
// import { useState } from "react";

export const signInWithGoogle = () => {
	signInWithPopup(auth, provider)
		.then((result) => {
			// const name = result.user.displayName;
			// localStorage.setItem("name", name);
			return result.user.displayName;
		})
		.catch((error) => {
			console.log(error);
		});
};

// export const nameForEmail = signInWithGoogle();
