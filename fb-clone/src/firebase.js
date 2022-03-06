import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyDy8u6E6RAtAkY936LQaOCJGd7g_EFQMYY",
	authDomain: "facebook-clone-b8261.firebaseapp.com",
	projectId: "facebook-clone-b8261",
	storageBucket: "facebook-clone-b8261.appspot.com",
	messagingSenderId: "620907791583",
	appId: "1:620907791583:web:fbf443f387f6016824556a",
	measurementId: "G-KY7DKE7BWN",
};

const firebaseApp = firebase.initalizeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
