import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LandingPad = ({ image, name, zone, desc, id }) => {
    return (
        <div className='w-[350px] h-[490px] bg-gray-300'>
            <div className='w-[350px] h-[200px] relative'>
                <Image src={image} fill={true} quality={100} />
            </div>
            <div className='p-5'>
                <div className='flex pb-2'>
                    {name}, <span className='font-semibold'>{zone}</span>
                </div>
                <div>
                    <p>{desc.slice(0, 200)}...</p>
                </div>
                <div className='mt-2'>
                <Link href={`/landingpads/${id}`} className='border p-2 border-black  hover:bg-black hover:text-white transition duration-300'>Read More</Link>
                </div>
            </div>

        </div>
    )
}

export default LandingPad