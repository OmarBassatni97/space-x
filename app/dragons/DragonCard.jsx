import Image from 'next/image'
import React from 'react'

const DragonCard = ({ image, name, description }) => {
    return (
        <div className='border border-gray-200 '>
            <Image src={image} width={750} height={100} alt='dragon-img' className='h-[500px]' />
            <div className='text-white p-4'>
                <h1 className='text-2xl font-bold mb-2'>{name}</h1>
                <p>{description.slice(0, 200)} ...</p>
                <button className='border p-2 mt-2 hover:bg-gray-300 hover:text-black duration-300'>Read more</button>
            </div>

        </div>
    )
}

export default DragonCard