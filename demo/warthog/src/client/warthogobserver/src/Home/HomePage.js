import React,{useState, useEffect} from 'react'
import axios from 'axios'
import ObservationMap from '../Map/ObservationMap'
import Header from './Header'
export default function HomePage(){
    const [observations, setObservations] = useState([])
    useEffect(() => {
       axios.get("http://localhost:8080/rest/observation")
       .then(res => {
           setObservations(res.data)
        })
    },[])

    return(
        <div>
        <div style={{padding: 5}}>
            <Header/>
        </div>
        <div style={{width:'100%', height:'800px'}}>
            <ObservationMap data={observations}/>
        </div>
        </div>
    )
}