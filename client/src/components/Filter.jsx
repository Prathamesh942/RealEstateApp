import React from 'react'

const Filter = () => {
  return (
    <div className=' flex flex-col pr-10 gap-4'>
        <h1 className=' text-2xl'>Search result for </h1>
        <div>
            <div className=' flex flex-col'>
                <label htmlFor="city">Location</label>
                <input className=' p-2 flex border border-zinc-600' type="text" id='city' name='city' placeholder='City location' />
            </div>
        </div>
        <div className=' flex max-w-[60vw]'>
            <div className=' w-[15%] max-w-[15%] flex flex-col items-start gap-2'>
                <label htmlFor="type">Type</label>
                <select name="type" id="type">
                    <option value="buy">Buy</option>
                    <option value="rent">Rent</option>
                </select>
            </div>
            <div className=' w-[15%] max-w-[15%] flex flex-col items-start gap-2'>
                <label htmlFor="property">Property</label>
                <select name="property" id="property">
                    <option value="any">Any</option>
                    <option value="house">House</option>
                    <option value="condo">Condo</option>
                    <option value="Land">Land</option>
                </select>
            </div>
            <div className=' w-[15%] max-w-[15%] flex flex-col items-start gap-2'>
                <label htmlFor="type">Type</label>
                <select name="type" id="type">
                    <option value="any">Any</option>
                    <option value="buy">Buy</option>
                    <option value="rent">Rent</option>
                </select>
            </div>
            <div className=' w-[15%] max-w-[15%] flex flex-col items-start gap-2'>
                <label htmlFor="minPrice">Min Price</label>
                <input type="number" id='minPrice' name='minPrice' placeholder='Any' />
            </div>
            <div className=' w-[15%] max-w-[15%] flex flex-col items-start gap-2'>
                <label htmlFor="maxPrice">Max Price</label>
                <input type="number" id='maxPrice' name='maxPrice' placeholder='Any' />
            </div>
            <div className=' w-[15%] max-w-[15%] flex flex-col items-start gap-2'>
                <label htmlFor="bedroom">Bedroom</label>
                <input type="number" id='bedroom' name='bedroom' placeholder='Any' />
            </div>
            <button className=' bg-blue-400 p-2 rounded-md'>Search</button>
        </div>
    </div>
  )
}

export default Filter