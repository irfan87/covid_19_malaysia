import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "reactstrap";
import { BallZigZagDeflect } from "react-pure-loaders";
import Moment from "moment";
import axios from "axios";

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
		"https://api.apify.com/v2/datasets/7Fdb90FMDLZir2ROo/items?format=json&clean=1"
	);

	return (
		<Container>
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
				<Table>
					<thead>
						<th>Date / Time</th>
						<th>Positive</th>
						<th>Negative</th>
						<th>Pending</th>
						<th>Recovered</th>
					</thead>
					<tbody>
						{data.map((result) => (
							<tr key={result["lastUpdatedAtApify"]}>
								<td>
									{Moment(result["lastUpdatedAtApify"]).format(
										"MM-DD-YYYY hh:mm:ss a"
									)}
								</td>
								<td>{result["testedPositive"]}</td>
								<td>{result["testedNegative"]}</td>
								<td>{result["testedPending"]}</td>
								<td>{result["testedTotal"]}</td>
							</tr>
						))}
					</tbody>
				</Table>
			)}
		</Container>
	);
};
