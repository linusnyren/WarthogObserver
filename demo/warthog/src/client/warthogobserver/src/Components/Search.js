import React, {useState} from 'react'
import {Container, Row, Col, Form} from 'react-bootstrap'
import axios from 'axios'
import { DatePickerInput } from 'rc-datepicker'
import 'rc-datepicker/lib/style.css';

export default function Search(props){
    const [search,setSearch] = useState({
        dateBefore: null,
        dateAfter: null,
        type: null,
        amountHigher: 0,
        amountLower: 0
    })

    const filter = () =>{
        axios.post("http://localhost:8080/rest/search", search)
        .then(res => props.setObservations(res.data))
    }
    const formatDate = (datum) => {
        let date = new Date(datum)
        let month = date.getMonth()+1;
        let day = date.getUTCDate()
        let year = date.getUTCFullYear()
        return year+"/"+month+"/"+day
      }
    return(
        <Form.Row>
        <Form.Group as={Col}>
        <Form.Label>Typ av Djur</Form.Label>
        <Form.Control as="select" onChange={e => {setSearch(search, search.type = e.target.value); filter()}}>
          <option>Välj</option>
          <option>Vildsvin</option>
          <option>Älg</option>
        </Form.Control>
      </Form.Group>
      <Form.Group as={Col}>
        <Form.Label>Mer</Form.Label>
        <Form.Control type="number" onChange={e => {setSearch(search, search.amountHigher = e.target.value); filter()}} />
      </Form.Group>
      <Form.Group as={Col}>
        <Form.Label>Mindre</Form.Label>
        <Form.Control type="number" onChange={e => {setSearch(search, search.amountLower = e.target.value); filter()}} />
      </Form.Group>
      <Form.Group as={Col}>
        <Form.Label>Datum före</Form.Label>
        <DatePickerInput
                  displayFormat='YYYY-MM-DD'
                  returnFormat='YYYY-MM-DD'
                  defaultValue={new Date()}
                  onChange={e => {setSearch(search, search.dateBefore = formatDate(e)); filter()}}
                  iconClassName='calendar icon'
                  showOnInputClick
        />
      </Form.Group>
      <Form.Group as={Col}>
        <Form.Label>Datum innan</Form.Label>
        <DatePickerInput
                  displayFormat='YYYY-MM-DD'
                  returnFormat='YYYY-MM-DD'
                  defaultValue={new Date()}
                  onChange={e => {setSearch(search, search.dateAfter = formatDate(e)); filter()}}
                  iconClassName='calendar icon'
                  showOnInputClick
        />
      </Form.Group>
      </Form.Row>
    )
}