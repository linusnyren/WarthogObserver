import React from 'react'
import RegisterModal from './../Components/RegisterModal'
import {Container, Row, Col} from 'react-bootstrap'
import Search from '../Components/Search'
export default function Header(props){

    return(
        <Container>
            <Row>
                <Col>
                    <RegisterModal/>
                </Col>
                <Col>
                    <Search setObservations={props.setObservations.bind(this)}/>
                </Col>
            </Row>
        </Container>
    )
}