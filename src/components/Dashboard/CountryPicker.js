import React, { useEffect, useState } from 'react'
import { fetchCountries } from '../../services/Api';

import "./MainDashboard.css";

export const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountries, setFetchedCountries] = useState([])

    useEffect(() => {
        const fetchCountry = async () => {
            setFetchedCountries(await fetchCountries());
        };

        fetchCountry();
    }, [setFetchedCountries]);

    return (
        <div className="country-picker">
            <form>
                <select defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                    <option>Global</option>
                    {fetchedCountries.map((country, i) => (
                        <option key={i} value={country}>
                            {country}
                        </option>
                        ))}
                </select>
            </form>
        </div>
    )
}
