import React from 'react'
import DragonCard from './DragonCard'
import { getData } from '../hooks/hooks'

const Dragons = async () => {
    const { data, error } = await getData('https://api.spacexdata.com/v4/dragons')
    if (error) {
        return <div className='text-white w-full flex justify-center items-center text-2xl'>{error}</div>
    }
    return (
        <div className='flex justify-center items-center'>
            <div className='w-[1440px] grid grid-cols-2 justify-center gap-5'>
                {data ? data.map((dragon, index) => (
                    <DragonCard key={index} name={dragon.name} image={dragon.flickr_images[0]} description={dragon.description} />
                ))

                    : <span>Loading</span>
                }
            </div>

        </div>
    )
}

export default Dragons