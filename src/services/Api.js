import axios from "axios";

const url = 'https://covid19.mathdro.id/api'

export const covidData = async (country) => {
	let urlChanged = url;

	if(country) {
		urlChanged = `${url}/countries/${country}`;
	}

	try {
		const { data } = await axios.get(urlChanged);
		const modResponse = {
			confirmed: data.confirmed,
			recovered: data.recovered,
			deaths: data.deaths
		};

		return modResponse;
	} catch (err) {
		throw Error(err);
	}
}

export const fetchCountries = async () => {
	try {
		const {
			data: {countries},
		} = await axios.get(`${url}/countries`);

		return countries.map((country) => country.name);
	} catch (err) {
		throw Error(err);
	}
}

export const fetchDailyResult = async () => {
	let urlChanged = url;

	if(!urlChanged){
		urlChanged = url;
	} else {
		try {
			const { data } = await axios.get(`${urlChanged}/daily`);
	
			const modResponse = data.map((dailyDt => ({
				confirmed: dailyDt.confirmed.total,
				deaths: dailyDt.deaths.total,
				recovered: dailyDt.recovered.total,
				date: dailyDt.reportDate
			})));
	
			return modResponse;
		} catch (err) {
			throw Error(err);
		}
	}

	
}