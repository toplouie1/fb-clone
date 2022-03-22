import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";
import { useState, createContext } from "react";
import { signInWithGoogle } from "./Login";
import LoginContext from "./AllState";

function App() {
	const [user, setUser] = useState(false);
	return (
		<div className="app">
			<LoginContext.Provider value={{ user, setUser }}>
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
			</LoginContext.Provider>
		</div>
	);
}

export default App;
