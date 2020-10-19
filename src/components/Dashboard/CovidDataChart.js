import React, { useEffect, useState } from 'react'
import { Bar, Line } from 'react-chartjs-2';
import { fetchDailyResult } from '../../services/Api';

export const CovidDataChart = ({data: {confirmed, deaths, recovered}, country='Global'}) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setDailyData(await fetchDailyResult());
        }

        fetchData();
    }, []);

    const lineChart = dailyData.length ? (
        <Line 
            data={{
                labels: dailyData.map(({ date }) => date),
                datasets: [{
                    data: dailyData.map(({ confirmed }) => confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true
                }, {
                    data: dailyData.map(({ deaths }) => deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0,0, 0.5)',
                    fill: true,
                }]
            }}
        />
    ) : null;

    const barChart = confirmed ? (
        <Bar
            data={{
                labels: ['Infected', 'Recovered', 'Deaths'],
                datasets: [{
                    label: 'People',
                    backgroundColor: [
                        "rgba(0,0,255,0.5)",
                        "rgba(0,255, 0,0.5)",
                        "rgba(255,0,0,0.5)"
                    ],
                    data: [confirmed.value, recovered.value, deaths.value],
                }]
            }}
            options = {{
                legend: {display: false},
                title: {display: true, text: `Covid-19 Result for ${country}`}
            }}
        />
    ) : null;

    return (
        <div>
            <h2>CovidDataChart</h2>
            {country ? barChart : lineChart}
        </div>
    )
}
