import React from 'react'

const SearchBar = () => {
  return (
    <div className='flex flex-col'>
        <div className=' flex'>
            <button className=' border border-zinc-500 p-2 px-5 bg-black text-white'>Buy</button>
            <button className=' border border-zinc-500 p-2 px-5'>Rent</button>
        </div>
        <form action="" className=' border border-zinc-500 flex w-[40vw] justify-between p-4'>
            <input type="text" name='location' placeholder='City Location' className=' max-w-[30%]' />
            <input type="text" name='minPrice' min={0} max={10000000} placeholder='Min Price' className=' max-w-[30%]' />
            <input type="text" name='maxPrice' min={0} max={10000000} placeholder='Max Price' className=' max-w-[30%]' />
            <button className=' bg-blue-300 p-1 rounded-lg'>
                <img src="./assets/search.png" alt="" />
            </button>
        </form>
    </div>
  )
}

export default SearchBar