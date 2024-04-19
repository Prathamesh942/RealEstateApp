import React from 'react'
import {Link} from "react-router-dom"

const Card = ({item}) => {
  return (
    <div className=' flex gap-6 py-10'>
        <div className=' flex-1'>
        <Link to={`/${item.id}`}>
            <img className=' object-cover h-[100%] rounded-xl' src={item.img} alt="" />
        </Link></div>
        <div className=' flex flex-[2] flex-col gap-6 justify-between items-start'>
            <h2 className=' text-lg font-semibold'>
                <Link to={`/${item.id}`}>{item.title}</Link>
            </h2>
            <p className=' flex  items-center'>
                <img className=' w-6 h-6 object-cover' src="./assets/pin.png" alt="" />
                <span>{item.address}</span>
            </p>
            <p className=' bg-blue-200 p-1 rounded-lg'>
                ${item.price}
            </p>
            <div className=' flex gap-10'>
                <div className=' flex gap-4'>
                    <div className=' flex  items-center gap-2'>
                        <img className=' w-6 h-6 object-cover' src="./assets/bed.png" alt="" />
                        <span>{item.bedroom} bedroom</span>
                    </div>
                    <div className=' flex  items-center gap-2'>
                        <img className=' w-6 h-6 object-cover' src="./assets/bath.png" alt="" />
                        <span>{item.bathroom} bathroom</span>
                    </div>
                </div>
                <div className=' flex gap-4'>
                    <div>
                        <img className=' w-6 h-6 object-cover'  src="./assets/save.png" alt="" />
                    </div>
                    <div>
                        <img className=' w-6 h-6 object-cover'  src="./assets/chat.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card