import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";
// import { nameForEmail } from "./firebase";
import { useState } from "react";

function App() {
	const [user, setUser] = useState("");
	// setUser({localStorage.getItem("name")});
	// setUser(nameForEmail);
	const login = () => {
		setUser("Nima");
	};
	return (
		<div className="app">
			{!user ? (
				<Login login={login} />
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
		</div>
	);
}

export default App;
