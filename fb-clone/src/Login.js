import { Button } from "@mui/material";
import React from "react";
import "./Login.css";
import { signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";
import { provider } from "./firebase";
import LoginContext from "./AllState";
import { useContext } from "react";
import { useState } from "react";

function Login() {
	const context = useContext(LoginContext);
	const signInWithGoogle = () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				console.log(result.user.displayName);
				context.setUser(result.user.displayName);

				return result.user.displayName;
			})
			.catch((error) => {
				console.log(error);
			});
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
			<Button
				type="submit"
				onClick={() => {
					signInWithGoogle();
				}}
			>
				Sign In
			</Button>
		</div>
	);
}

export default Login;
