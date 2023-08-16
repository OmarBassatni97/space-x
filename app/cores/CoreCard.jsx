import React from 'react'

const CoreCard = ({ serial, rtls, asds, launches, reused, status, lastUpdate }) => {
    return (
        <div className='text-white border border-gray-200 h-[400px]'>
            <div className=' flex flex-col gap-2 p-4'>
                <h1 className='pb-4 text-2xl font-semibold'>{serial}</h1>
                <span>Reused {reused} times</span>
                <span>{launches} Launches</span>
                <span>{rtls} RTLS landings</span>
                <span>{asds} ASDS landings</span>
                <span className={`${status === 'active' ? 'text-green-600' : 'text-red-500'}`}>Status: {status}</span>
                <span>{lastUpdate}</span>
            </div>
        </div>
    )
}

export default CoreCard