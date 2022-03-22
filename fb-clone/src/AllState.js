import { createContext, useState } from "react";
import { signInWithGoogle } from "./Login";

const LoginContext = createContext();

// export const LoginProvider = ({ children }) => {
// 	const [user, setUser] = useState("Nima");

// 	return (
// 		<LoginContext.Provider value={{ user }}>{children}</LoginContext.Provider>
// 	);
// };

export default LoginContext;
