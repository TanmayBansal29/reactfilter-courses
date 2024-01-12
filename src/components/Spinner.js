import React from 'react'
import './spinner.css'

function Spinner() {
    return (
        <div className='h-[75vh] flex flex-col justify-center items-center space-y-2'>
            <div className='spinner'></div>
            <p className='text-[#2c313c] text-lg font-semibold'>Loading....</p>
        </div>
    )
}


export default Spinner