import React,{useState} from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'
import ObservationModal from '../Components/Observation';
export default function ObservationMap(props){
  
  const iconWarthog = new L.Icon({
    iconUrl: require('../images/pumba.png'),
    iconRetinaUrl: require('../images/pumba.png'),
    iconSize: new L.Point(35, 48),
    className: 'leaflet-div-icon'
  });
  const iconMoose = new L.Icon({
    iconUrl: require('../images/alg.png'),
    iconRetinaUrl: require('../images/alg.png'),
    iconSize: new L.Point(35, 48),
    className: 'leaflet-div-icon'
  });
    const [marker, setMarker] = useState({
      lat: null,
      lng: null
    })

    const placeMarker=(pos)=>{
      setMarker({
        lat: pos.lat,
        lng: pos.lng
      })
    }
    const whatAnimal = (animal) =>{
      if(animal.toLowerCase() === "vildsvin"){
        return iconWarthog
      }
      if(animal.toLowerCase() === "älg"){
        return iconMoose
      }
    }
    const pluralCheck = (type, amount) =>{
      if(amount > 1 && type.toLowerCase() === "älg"){
        return "Älgar"
      }
      else{
        return type;
      }
    }
    return (
      <LeafletMap
        center={[57.602, 12.11766]}//Denna skall bli webbläsarens gps på sikt
        zoom={13}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
        style={{height:'100%', width:'100%'}}
        onClick={e => placeMarker(e.latlng)}
      >
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        {props.data.map(obj => 
        <Marker position={[obj.lat, obj.lng]} key={obj.id} icon={ whatAnimal(obj.animal.type)}>
          <Popup>
            
              <h3> {obj.animal.amount}st {pluralCheck(obj.animal.type, obj.animal.amount)}</h3>
               <h4>Rapportör: {obj.user.firstName} {obj.user.surName}</h4>
               <h4>Datum: {obj.date}</h4>
          </Popup>
        </Marker>
        )}
        {marker.lat ? 
        <Marker position={[marker.lat, marker.lng]}>
          <Popup >
            <ObservationModal  gps={marker} setObservations={props.setObservations.bind(this)} observations={props.data}/>
          </Popup>
          </Marker> 
          : ""}
      </LeafletMap>
    );
  }