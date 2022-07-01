import React from "react";
import Nav from "./Nav";
import Container from "./Container";
import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<Container data={hogs}/>
		</div>
	);
}

export default App;
