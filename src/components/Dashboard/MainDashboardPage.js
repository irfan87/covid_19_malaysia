import React, { useEffect, useState } from "react";
import {
	Col,
	Container,
	Row,
} from "reactstrap";
import { BallZigZagDeflect } from "react-pure-loaders";
import Moment from "moment";
import axios from "axios";

import "./MainDashboard.css";
import { CovidCardBody } from "./CovidCardBody";

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
	// fetch one current result of Covid-19
	const { data, loading } = useFetch(
		"https://api.apify.com/v2/key-value-stores/6t65lJVfs3d8s6aKc/records/LATEST?disableRedirect=true"
	);

	// fetch all current result of Covid-19, started from day 1 to this date
	const {allData, dataLoading} = useFetch("https://api.apify.com/v2/datasets/7Fdb90FMDLZir2ROo/items?format=json&clean=1");

	return (
		<>
			<h2>Result</h2>
			<button onClick={() => window.location.reload()}>Refresh</button>
			<br />
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
					Last fetched was {" "}
					{Moment(data["lastUpdatedAtApify"]).format("DD-MM-YYYY")} {" "} at {" "} {Moment(data['lastUpdatedAtApify']).startOf('minute').fromNow()}
					<div className='card-container'>
						<CovidCardBody 
							testedPositive={data['testedPositive']} 
							recovered={data['recovered']}
							inICU={data['inICU']}
							activeCases={data['activeCases']}
							deceased={data['deceased']}
						/>
					</div>
				</>
			)}
		</>
	);
};