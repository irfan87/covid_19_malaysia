import React, { useEffect, useState } from "react";
import {
	Card,
	CardBody,
	CardTitle,
	Col,
	Container,
	Row,
	Table,
} from "reactstrap";
import { BallZigZagDeflect } from "react-pure-loaders";
import Moment from "moment";
import axios from "axios";

import "./MainDashboard.css";

const useFetch = (url) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	// use useEffect hook to call the api
	useEffect(() => {
		const fetchData = async () => {
			const response = await axios(url);

			setData(response.data);

			setLoading(false);
		};

		fetchData();
	});

	return { data, loading };
};

export const MainDashboardPage = () => {
	const { data, loading } = useFetch(
		"https://api.apify.com/v2/key-value-stores/6t65lJVfs3d8s6aKc/records/LATEST?disableRedirect=true"
	);

	return (
		<>
			<h2>Result</h2>
			{loading ? (
				<Container>
					<Row>
						<Col
							style={{
								display: "flex",
								justifyContent: "space-between",
								width: "2px",
								height: "2px",
							}}
							sm="12"
							md={{ size: 3, offset: 6 }}
						>
							<BallZigZagDeflect size={1} color={"grey"} loading />
						</Col>
					</Row>
				</Container>
			) : (
				// <div>Fetching the current COVID-19 Result....</div>
				<>
					Date:{" "}
					{Moment(data["lastUpdatedAtApify"]).format("MM-DD-YYYY hh:mm:ss a")}
					{/* <Row> */}
					<Container className="card-container">
						<Col md="3">
							<Card>
								<CardTitle>
									<h5>Positive</h5>
								</CardTitle>
								<CardBody>{data["testedPositive"]}</CardBody>
							</Card>
						</Col>
						<Col md="3">
							<Card>
								<CardTitle>Recovered</CardTitle>
								<CardBody>{data["recovered"]}</CardBody>
							</Card>
						</Col>
						<Col md="3">
							<Card>
								<CardTitle>In ICU</CardTitle>
								<CardBody>{data["inICU"]}</CardBody>
							</Card>
						</Col>
						<Col md="3">
							<Card>
								<CardTitle>Active Case</CardTitle>
								<CardBody>{data["activeCases"]}</CardBody>
							</Card>
						</Col>
						<Col md="3">
							<Card>
								<CardTitle>Deceased</CardTitle>
								<CardBody>{data["deceased"]}</CardBody>
							</Card>
						</Col>
					</Container>
					{/* </Row> */}
				</>
			)}
		</>
	);
};
