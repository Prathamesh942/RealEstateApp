import React from 'react'
import SearchBar from '../components/SearchBar'

const Home = () => {
  return (
    <div className=' flex px-[6vw]'>
        <div className=' flex-[5] flex flex-col justify-center gap-10 pr-20'>
            <span className=' text-5xl font-semibold'>Find Real Estate & Get Your Dream Place</span>
            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam sunt eveniet architecto et, adipisci iste delectus rem eligendi nostrum ipsa.</span>
            <SearchBar/>
            <div className=' flex justify-between w-[80%]'>
                <div className=' flex flex-col'>
                    <span className=' text-xl font-bold'>16+</span>
                    <span className=''>Years of Experience</span>
                </div>
                <div className=' flex flex-col'>
                    <span className=' text-xl font-bold'>200</span>
                    <span className=''>Awards gained</span>
                </div>
                <div className=' flex flex-col'>
                    <span className=' text-xl font-bold'>2000+</span>
                    <span className=''>Properties</span>
                </div>
            </div>
        </div>
        <div className=' flex-[3]'>
            <img src="./assets/bg.png" alt="" />
        </div>
    </div>
  )
}

export default Home