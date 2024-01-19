import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LaunchPad = ({ name, image, desc, id }) => {
    return (
        <div className='bg-gray-400'>
            <div className='w-full h-[300px] relative'>
                <Image src={image} fill quality={100} alt='launchpad' />
            </div>
            <div className='p-4 flex flex-col gap-4'>
                <h1 className='text-2xl'>{name}</h1>
                <p>{desc.slice(0,50)}...</p>
                <div>
                    <Link className='border border-white px-4 py-2' href={`https://api.spacexdata.com/v4/launchpads/${id}`} >Read more</Link>
                </div>
            </div>
        </div>
    )
}

export default LaunchPad