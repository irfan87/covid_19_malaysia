import React from "react";
import { Container } from "reactstrap";
import "./App.css";
import { Routes } from "./Routes";

function App() {
	return (
		<Container>
			<h1>Covid-19 Live Result</h1>
			<Routes />
		</Container>
	);
}

export default App;
