import React,{useState} from 'react'
import {Button, Form, Col} from 'react-bootstrap'
import axios from 'axios'
import { DatePickerInput } from 'rc-datepicker'
import 'rc-datepicker/lib/style.css';
export default function Observation(props){
    const [phone, setPhone] = useState()
    const [observation, setObservation] = useState({
        animal:{
          type: null,
          amount: null
        },
        date: null,
        lat: props.gps.lat,
        lng: props.gps.lng 
    })

    const addObservation = () => {
      axios.post("http://localhost:8080/rest/observation/"+phone, observation)
      .then(res => {
        props.setObservations(props.observations, [...props.observations, res.data])
        alert('Tack för ditt bidrag! \n uppdatera sidan...')
      })
    }
    const formatDate = (datum) => {
      let date = new Date(datum)
      let month = date.getMonth()+1;
      let day = date.getUTCDate()
      let year = date.getUTCFullYear()
      return year+"/"+month+"/"+day
    }
    return (
      <div >
          <Form.Row>
              <Form.Group >
                <Form.Label>Typ av Djur</Form.Label>
                <Form.Control as="select" onChange={e => setObservation(observation, observation.animal.type = e.target.value)}>
                  <option>Välj</option>
                  <option>Vildsvin</option>
                  <option>Älg</option>
                </Form.Control>
              </Form.Group>
              <Form.Group >
                <Form.Label>Antal</Form.Label>
                <Form.Control type="number" onChange={e => setObservation(observation, observation.animal.amount = e.target.value)} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Datum</Form.Label>
                <DatePickerInput
                          displayFormat='YYYY-MM-DD'
                          returnFormat='YYYY-MM-DD'
                          defaultValue={new Date()}
                          onChange={e => setObservation(observation, observation.date = formatDate(e))}
                          iconClassName='calendar icon'
                          showOnInputClick
                />
              </Form.Group>
              <Form.Group >
                <Form.Label>Ert Telefonnummer</Form.Label>
                <Form.Control type="text" onChange={e => setPhone(e.target.value)}/>
              </Form.Group>
              <Form.Group as={Col}>
              <br></br>
              <Button variant="secondary" 
              onClick={() => addObservation()}>
              Rapportera
              </Button>
              </Form.Group>
              </Form.Row>
      </div>
    );
}