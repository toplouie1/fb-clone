import { Button } from "@mui/material";
import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";

function Login() {
	const signIn = () => {
		auth
			.signInWithPopup(provider)
			.then((result) => {
				console.log(result);
			})
			.catch((error) => alert(error.message));
	};
	return (
		<div className="login">
			<div className="login__logo">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png"
					alt="cool"
				/>
				<img
					src="https://www.freepnglogos.com/uploads/logo-facebook-png/logo-facebook-facebook-logo-png-transparent-svg-vector-bie-supply-13.png"
					alt="nnn"
				/>
			</div>
			<Button type="submit" onClick={signIn}>
				Sign In
			</Button>
		</div>
	);
}

export default Login;
