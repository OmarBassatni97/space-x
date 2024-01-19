import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Launch = ({ image, details, id, name }) => {
    return (
        <div className='w-[300px] text-white'>
            <div className='w-[300px] h-[300px] relative'>
                <Image alt='badge' src={image} fill={true} quality={100} sizes='(max-width:300px)'/>
            </div>
            <div className='p-3'>
                <h1>{name}</h1>
                <p className='opacity-80 text-sm'>
                    {details ? `${details.slice(0,50)}...` : 'No details'}
                </p>
                <div className='mt-4'>
                    <Link className='py-2 px-3 border border-white hover:bg-white hover:text-black transition duration-300' href={`launches/${id}`}>Read more</Link>
                </div>
            </div>
        </div>
    )
}

export default Launch