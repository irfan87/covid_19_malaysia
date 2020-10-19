import React, { Component } from 'react'
import { covidData } from '../../services/Api';
import { CountryPicker } from './CountryPicker';
import {CovidCardBody} from './CovidCardBody';
import { CovidDataChart } from './CovidDataChart';

export default class MainDashboardPage extends Component {
	state = {
		data: [],
		country: ""
	};

	async componentDidMount() {
		const fetchData = await covidData();

		this.setState({
			data: fetchData
		});
	}

	handleCountryChange = async (country) => {
		const fetchedCountries = await covidData(country);
		this.setState({
			data: fetchedCountries, 
			country: country
		});
	}


	render() {
		const {data, country} = this.state;
		return (
			<div>
				<CovidCardBody data={data} />
				<CountryPicker handleCountryChange={this.handleCountryChange} />
				<CovidDataChart data={data} country={country} />
			</div>
		)
	}
}
