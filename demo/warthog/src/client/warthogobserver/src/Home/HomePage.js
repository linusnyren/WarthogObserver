import React,{useState, useEffect} from 'react'
import axios from 'axios'
import ObservationMap from '../Map/ObservationMap'
export default function HomePage(){
    const [observations, setObservations] = useState([])
    useEffect(() => {
       axios.get("http://localhost:8080/rest/observation")
       .then(res => {
           setObservations(res.data)
        })
    },[])

    return(
        <div style={{width:'100%', height:'1000px'}}>
        {observations.length > 0 ? <ObservationMap data={observations}/> : <h1>Loading</h1>}
        </div>
    )
}