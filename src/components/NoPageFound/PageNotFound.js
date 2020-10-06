import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Row } from "reactstrap";

export const PageNotFound = () => {
	let location = useLocation();

	return (
		<Container>
			<Row>
				<h2>{location.pathname} is not found!</h2>
			</Row>
		</Container>
	);
};
