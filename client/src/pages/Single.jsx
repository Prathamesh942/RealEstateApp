import React from 'react'
import Slider from '../components/Slider'
import Map from '../components/Map'

const Single = ({data}) => {
  return (
    <div className=' flex  px-[6vw] py-10 gap-10'>
      <div className=' flex-[3] '>
        <Slider images={['https://images.pexels.com/photos/310435/pexels-photo-310435.jpeg?auto=compress&cs=tinysrgb&w=400','https://images.pexels.com/photos/54094/road-distance-landscape-horizon-54094.jpeg?auto=compress&cs=tinysrgb&w=400','https://images.pexels.com/photos/3762497/pexels-photo-3762497.jpeg?auto=compress&cs=tinysrgb&w=400','https://images.pexels.com/photos/3932930/pexels-photo-3932930.jpeg?auto=compress&cs=tinysrgb&w=400']}/>
        <div className=' flex justify-between items-center py-10'>
          <div className=' flex flex-col gap-4'>
            <h1 className=' text-2xl font-semibold'>Beautiful Apartment</h1>
            <span className=' flex'>
              <img className=' w-[20px]' src="./assets/pin.png" alt="" />
              <span>1234 Broadway nyc</span>
            </span>
            <span>
              $ 1200
            </span>
          </div>
          <div className=' p-4 justify-center items-center gap-2 flex flex-col bg-blue-100 rounded-xl'>
            <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className=' rounded-full w-[50px] h-[50px] object-cover' />
            <span>John doe</span>
          </div>
          
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum cumque magni molestias! Iusto earum quasi consequuntur at iure, illum obcaecati illo voluptatum aliquid perspiciatis eveniet fuga minus non laborum error fugit beatae, amet, vel ad.
        </p>
      </div>
      <div className='flex-[2] flex flex-col gap-10'>
        <div className='flex flex-col gap-4'>
    <h2 className=' font-semibold text-2xl'>General</h2>
    <div className='flex flex-col gap-5'>
      <div className='flex items-center gap-3'>
        <img className='w-6 h-6' src="./assets/utility.png" alt="" />
        <div className='flex flex-col'>
          <span className='font-semibold'>Utilities</span>
          <span>Renter is responsible</span>
        </div>
      </div>
      <div className='flex items-center gap-3'>
        <img className='w-6 h-6' src="./assets/pet.png" alt="" />
        <div className='flex flex-col'>
          <span className='font-semibold'>Pet policy</span>
          <span>Pets allowed</span>
        </div>
      </div>
      <div className='flex items-center gap-3'>
        <img className='w-6 h-6' src="./assets/fee.png" alt="" />
        <div className='flex flex-col'>
          <span className='font-semibold'>Property Fees</span>
          <span>Must have 3x the rent</span>
        </div>
      </div>
    </div>
        </div>
        <div className='flex flex-col gap-4'>
    <h2 className=' font-semibold text-2xl'>Sizes</h2>
    <div className='flex gap-5'>
      <div className='flex items-center gap-3'>
        <img className='w-6 h-6' src="./assets/size.png" alt="" />
        <span>80 sqft</span>
      </div>
      <div className='flex items-center gap-3'>
        <img className='w-6 h-6' src="./assets/bed.png" alt="" />
        <span>2 Beds</span>
      </div>
      <div className='flex items-center gap-3'>
        <img className='w-6 h-6' src="./assets/bath.png" alt="" />
        <span>1 Bathroom</span>
      </div>
    </div>
        </div>
        <div className='flex flex-col gap-4'>
          <h2 className=' font-semibold text-2xl'>Nearby Places</h2>
          <div className='flex gap-5'>
            <div className='flex items-center gap-3'>
              <img className='w-6 h-6' src="./assets/school.png" alt="" />
              <span>250 m</span>
            </div>
            <div className='flex items-center gap-3'>
              <img className='w-6 h-6' src="./assets/bus.png" alt="" />
              <span>100 m</span>
            </div>
            <div className='flex items-center gap-3'>
              <img className='w-6 h-6' src="./assets/restaurant.png" alt="" />
              <span>200 m</span>
            </div>
          </div>
        </div>
        {/* <Map items={data} /> */}
      </div>
    </div>
  )
}

export default Single