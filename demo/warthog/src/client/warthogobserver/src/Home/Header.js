import React from 'react'
import RegisterModal from './../Components/RegisterModal'
import Observation from './../Components/ObservationModal'
import {Container, Row, Col} from 'react-bootstrap'
export default function Header(){

    return(
        <Container>
            <Row>
                <Col>
                    <RegisterModal/>
                </Col>
                <Col>
                    <Observation />
                </Col>
            </Row>
        </Container>
    )
}