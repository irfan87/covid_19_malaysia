import React, { useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import {
	Collapse,
	Container,
	Navbar,
	NavbarBrand,
	NavbarToggler,
	Nav,
	NavItem,
	NavLink,
} from "reactstrap";
import PropTypes from "prop-types";

import { MainAboutPage } from "./components/About/MainAboutPage";
import { MainDashboardPage } from "./components/Dashboard/MainDashboardPage";
import { PageNotFound } from "./components/NoPageFound/PageNotFound";

export const Routes = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<Container>
			<Router>
				<Navbar color="light" light expand="md">
					<NavbarBrand href="/">Covid-19 Live Result</NavbarBrand>
					<NavbarToggler onClick={toggle} />
					<Collapse navbar isOpen={isOpen}>
						<Nav navbar>
							<NavItem>
								<NavLink href="/">Home</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/about">About</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
				<Switch>
					<Route path="/" exact component={MainDashboardPage} />
					<Route path="/about" component={MainAboutPage} />
					<Route component={PageNotFound} status={404} />
				</Switch>
			</Router>
		</Container>
	);
};

Navbar.propTypes = {
	light: PropTypes.bool,
	dark: PropTypes.bool,
	fixed: PropTypes.string,
	color: PropTypes.string,
	role: PropTypes.string,
	expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	transition: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	// pass in custom element to use
};
