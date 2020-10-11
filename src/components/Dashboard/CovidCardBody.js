import React from 'react'
import {
	Card,
	CardBody,
	CardTitle,
	Col,
} from "reactstrap";

export const CovidCardBody = ({testedPositive, recovered, inICU, activeCases, deceased}) => {
    return (
        <>
            <Col>
                <Card inverse color='primary'>
                    <CardTitle>
                        <h5>Positive</h5>
                    </CardTitle>
                    <CardBody>{testedPositive}</CardBody>
                </Card>
            </Col>
            <Col>
                <Card inverse color='success'>
                    <CardTitle>
                        <h5>Recovered</h5>
                    </CardTitle>
                    <CardBody>{recovered}</CardBody>
                </Card>
            </Col>
            <Col>
                <Card inverse color='info'>
                    <CardTitle>
                        <h5>In ICU</h5>
                    </CardTitle>
                    <CardBody>{inICU}</CardBody>
                </Card>
            </Col>
            <Col>
                <Card inverse color='warning'>
                    <CardTitle>
                        <h5>Active Case</h5>
                    </CardTitle>
                    <CardBody>{activeCases}</CardBody>
                </Card>
            </Col>
            <Col>
                <Card inverse color='danger'>
                    <CardTitle>
                        <h5>Deceased</h5>
                    </CardTitle>
                    <CardBody>{deceased}</CardBody>
                </Card>
            </Col>
        </>
    )
}
