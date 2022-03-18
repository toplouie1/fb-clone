import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";
import { useState } from "react";
import { LoginProvider } from "./AllState";

function App() {
	const [user, setUser] = useState("");
	// setUser({localStorage.getItem("name")});
	// setUser(nameForEmail);
	// const login = () => {
	// 	setUser("Nima");
	// };
	return (
		<div className="app">
			<LoginProvider>
				{!user ? (
					<Login />
				) : (
					<>
						<Header />
						<div className="app__body">
							<Sidebar />
							<Feed />
							<Widgets />
						</div>
					</>
				)}
			</LoginProvider>
		</div>
	);
}

export default App;
