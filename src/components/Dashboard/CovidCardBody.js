import React from 'react'
import { Card, CardBody, CardTitle, Col } from 'reactstrap';

import "./MainDashboard.css";
export const CovidCardBody = ({data: {confirmed, recovered, deaths}}) => {
    if(!confirmed) {
        return 'error';
    }

    return(
        <div className="card-container">
            <Col>
                <Card inverse color="primary">
                    <CardTitle><h2>Infected</h2></CardTitle>
                    <CardBody>{confirmed.value}</CardBody>
                </Card>
            </Col>
            <Col>
                <Card inverse color="success">
                    <CardTitle><h2>Recovered</h2></CardTitle>
                    <CardBody>{recovered.value}</CardBody>
                </Card>
            </Col>
            <Col>
                <Card inverse color="danger">
                    <CardTitle><h2>Deaths</h2></CardTitle>
                    <CardBody>{deaths.value}</CardBody>
                </Card>
            </Col>
        </div>
    )
}
