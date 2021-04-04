
import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import CardLocation from './CardLocation'


const MapComponent = () => {
    const position = [18.93898311512859, -99.2228825012256]
    return (
        <MapContainer style={{width:"100%",height: '60vh'}} center={position} zoom={15} scrollWheelZoom={false}>
            <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        <CardLocation/>
      </Popup>
    </Marker>
        </MapContainer>
    )
}

export default MapComponent
