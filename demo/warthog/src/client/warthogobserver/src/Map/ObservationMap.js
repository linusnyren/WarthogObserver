import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'
export default function ObservationMap(props){
  console.log(props.data)
  const iconWarthog = new L.Icon({
    iconUrl: require('../images/pumba.png'),
    iconRetinaUrl: require('../images/pumba.png'),
    iconSize: new L.Point(50, 62),
    className: 'leaflet-div-icon'
});
    return (
      <LeafletMap
        center={[57.602, 12.11766]}
        zoom={13}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
        style={{height:'100%', width:'100%'}}
      >
        <h1>Hej</h1>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        {props.data.map(pos => 
        <Marker position={[pos.lat, pos.lng]} key={pos.id} icon={iconWarthog}>
          <Popup>
            {pos.animals.map(animal => 
              <h3 key={animal.id}>{animal.type} {animal.age}år</h3>
               )}
               <h4>Rapportör: {pos.user.firstName} {pos.user.surName}</h4>
               <h4>Datum: {pos.date}</h4>
          </Popup>
        </Marker>
        )}
      </LeafletMap>
    );
  }