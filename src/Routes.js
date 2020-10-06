import React from "react";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { Container } from "reactstrap";
import { MainAboutPage } from "./components/About/MainAboutPage";
import { MainDashboardPage } from "./components/Dashboard/MainDashboardPage";
import { PageNotFound } from "./components/NoPageFound/PageNotFound";

export const Routes = () => {
	return (
		<Container>
			<Router>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
				</ul>
				<Switch>
					<Route path="/" exact component={MainDashboardPage} />
					<Route path="/about" component={MainAboutPage} />
					<Route component={PageNotFound} />
				</Switch>
			</Router>
		</Container>
	);
};
