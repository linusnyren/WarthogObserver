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
    console.log(window.innerWidth)
    return(
        <div>
        <div style={{padding: 5}}>
            <Header setObservations={setObservations.bind(this)}/>
        </div>
        <div style={{width: (window.innerWidth)+"px", height:(window.innerHeight-50)+"px"}}>
            <ObservationMap data={observations} setObservations={setObservations.bind(this)}/>
        </div>
        </div>
    )
}