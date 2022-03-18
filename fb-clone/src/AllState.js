import { createContext, useState } from "react";

const LoginState = createContext();

export const LoginProvider = ({ children }) => {
	return (
		<LoginState.Provider value={{ displayName: "Nima sherpa" }}>
			{children}
		</LoginState.Provider>
	);
};

export default LoginState;
