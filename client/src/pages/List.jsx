import React from 'react'
import Filter from '../components/Filter'
import Card from '../components/Card'
import Map from '../components/Map'

const data = [
  {
    id:1,
    title: "A great apartment live here please",
    img:"https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600",
    bedroom:2,
    bathroom:1,
    price: 1000,
    address: "456 Park Avenue, London",
    latitude: 51.5074,
    longitude: -0.1278,
  },
  {
    id:1,
    title: "A great apartment live here please",
    img:"https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600",
    bedroom:2,
    bathroom:1,
    price: 1000,
    address: "456 Park Avenue, London",
    latitude: 51.6074,
    longitude: -0.1278,
  }
  ,
  {
    id:1,
    title: "A great apartment live here please",
    img:"https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600",
    bedroom:2,
    bathroom:1,
    price: 1000,
    address: "456 Park Avenue, London",
    latitude: 51.5074,
    longitude: -0.1278,
  }
]

const List = () => {
  return (
    <div className=' flex px-[6vw]'>
      <div className=' flex-[3]'>
        <div>
          <Filter/>
          {
            data.map((item)=>{
              return <Card key={item.id} item={item}/>
            })
          }
        </div>
      </div>
      <div className='flex-[2]'>
        <div className='sticky top-20 h-screen'> {/* Adjust the height as needed */}
          <Map items={data} />
        </div>
      </div>
    </div>
  )
}

export default List