import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import axios from "axios";

const useFetch = (url) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	// use useEffect hook to call the api
	useEffect(() => {
		const fetchData = async () => {
			// const response = await axios(
			// 	"https://api.apify.com/v2/datasets/7Fdb90FMDLZir2ROo/items?format=json&clean=1"
			// );

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
				<div>Fetching the current COVID-19 Result....</div>
			) : (
				data.map((result) => (
					<div key={result["lastUpdatedAtApify"]}>{result["inICU"]}</div>
				))
			)}
		</Container>
	);
};
