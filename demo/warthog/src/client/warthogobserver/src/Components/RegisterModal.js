import React,{useState} from 'react'
import {Modal, Button, Form, Col} from 'react-bootstrap'
import axios from 'axios';

export default function RegisterModal(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);


    //String surName, firstName, phone, mail;
    const [user, setUser] = useState({
        surName: null,
        firstName: null,
        phone: null,
        mail: null
    })

  
    const signup = () =>{
        axios.post("http://localhost:8080/rest/user", user)
        .then(res => {
          localStorage.setItem('phone', res.data.phone)
          handleClose();
        })
    }
    return (
      <>
        <Button variant="primary" onClick={() => setShow(!show)}>
          Registrering
        </Button>
  
        <Modal show={show} onHide={() => setShow(!show)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Registrering</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>Förnamn</Form.Label>
                <Form.Control required type="text" 
                  onChange={e => setUser(user, user.firstName = e.target.value)} />
                <Form.Control.Feedback type="invalid">
                  Skriv in ett giltigt förnamn
                      </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>Efternamn</Form.Label>
                <Form.Control required type="text" 
                  onChange={e => setUser(user, user.surName = e.target.value)} />
                <Form.Control.Feedback type="invalid">
                  Skriv in ett giltigt förnamn
                      </Form.Control.Feedback>
              </Form.Group>
              </Form.Row>
              <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>Telefon</Form.Label>
                <Form.Control required type="text" 
                  onChange={e => setUser(user, user.phone = e.target.value)} />
                <Form.Control.Feedback type="invalid">
                  Skriv in ett giltigt förnamn
                      </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>Mail</Form.Label>
                <Form.Control required type="text" 
                  onChange={e => setUser(user, user.mail = e.target.value)} />
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
            <Button variant="primary" onClick={() => signup()}>
              Spara
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}