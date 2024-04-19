import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import Pin from './Pin'


const Map = ({items}) => {
  return (
    <MapContainer center={[52.4797, -1.90269]} zoom={7} scrollWheelZoom={true} className=' w-[100%] h-screen rounded-3xl'>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {items.map(item=>(<Pin item={item} key={item.id}></Pin>))}
  </MapContainer>
  )
}

export default Map