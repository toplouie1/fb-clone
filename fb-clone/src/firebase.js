import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

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
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
