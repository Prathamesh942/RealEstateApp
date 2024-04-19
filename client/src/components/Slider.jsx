import React, { useState } from 'react'

const Slider = ({images}) => {
    const[click,setClick] = useState(false);
if(click){
    return <Carousel images={images} setClick={setClick}/>
}
  return (
    <div className=' flex aspect-video gap-4' onClick={()=>{setClick(true)}}>
        <div className=''>
            <img src={images[0]} alt="" className=' h-[100%] object-cover rounded-lg' />
        </div>
        <div className=' flex flex-col justify-between'>
            {images.slice(1,4).map((item)=>{
                return <div className=' h-[30%]'><img src={item} className=' rounded-lg h-[100%] object-cover w-[100%]' /></div>
            })}
        </div>
    </div>
  )
}

const Carousel = ({images, setClick}) => {
    const [index,setIndex] = useState(0);
    return(
        <div className=' absolute top-0 z-30 w-screen h-screen bg-[#000000cd] flex items-center justify-center right-0'>
            <button className=' absolute right-10 top-10 bg-white p-1 px-2 rounded-lg' onClick={()=>{setClick(false)}}>x</button>
            <button onClick={()=>{
                if(index==0){
                    return;
                }
                setIndex(index-1);
            }}>Left</button>
            <img className=' w-[80%] h-[80%] object-cover aspect-square' src={images[index]} alt="" />
            <button onClick={()=>{
                if(index==images.length-1){
                    return;
                }
                setIndex(index+1);
            }}>Right</button>
        </div>
    )
}

export default Slider