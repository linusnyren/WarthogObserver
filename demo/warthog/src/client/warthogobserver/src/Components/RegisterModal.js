import React,{useState} from 'react'
import {Modal, Button, Form, Col} from 'react-bootstrap'
import Axios from 'axios';

export default function RegisterModal(){
    const [show, setShow] = useState(false);
    //String surName, firstName, phone, mail;
    const [user, setUser] = useState({
        surName: null,
        firstName: null,
        phone: null,
        mail: null
    })
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const signup = () =>{
        Axios.post("http://localhost:8080/rest/user")
        .then(res => alert(res.data.firstname))
    }
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Registrering
        </Button>
  
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Registrering</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>Förnamn</Form.Label>
                <Form.Control required type="text" onChange={e => setUser(user, user.firstName = e.target.value)} />
                <Form.Control.Feedback type="invalid">
                  Skriv in ett giltigt förnamn
                      </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>Efternamn</Form.Label>
                <Form.Control required type="text" onChange={e => setUser(user, user.surName = e.target.value)} />
                <Form.Control.Feedback type="invalid">
                  Skriv in ett giltigt förnamn
                      </Form.Control.Feedback>
              </Form.Group>
              </Form.Row>
              <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>Telefon</Form.Label>
                <Form.Control required type="text" onChange={e => setUser(user, user.phone = e.target.value)} />
                <Form.Control.Feedback type="invalid">
                  Skriv in ett giltigt förnamn
                      </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>Mail</Form.Label>
                <Form.Control required type="text" onChange={e => setUser(user, user.mail = e.target.value)} />
                <Form.Control.Feedback type="invalid">
                  Skriv in ett giltigt förnamn
                      </Form.Control.Feedback>
              </Form.Group>
              </Form.Row>
        </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Stäng
            </Button>
            <Button variant="primary" onClick={signup()}>
              Spara
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}