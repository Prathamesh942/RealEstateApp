import React from 'react'
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import { Link } from 'react-router-dom'

const Pin = ({item}) => {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div>
            <img src={item.img} alt="" />
            <div className=' flex flex-col'>
                <Link to={`/${item.id}`}>{item.title}</Link>
                <div className=' flex justify-between'>
                    <span>{item.bedroom} bedroom</span>
                    <b>${item.price}</b>
                </div>
            </div>
        </div>
      </Popup>
    </Marker>
  )
}

export default Pin