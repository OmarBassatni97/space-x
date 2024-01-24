import React from 'react'
import { getData } from '../hooks/hooks'
import LaunchPad from './LaunchPad'

const LaunchPads = async () => {
    const { data, error } = await getData('https://api.spacexdata.com/v4/launchpads')

    if (error) {
        return <div className='text-white w-full flex justify-center items-center text-2xl'>{error}</div>
    }
    return (
        <div className='flex justify-center'>
            <div className='w-[1440px] grid grid-cols-4 justify-center gap-5'>
                {data?.map((launch, index) => (
                    <LaunchPad key={index} image={launch.images.large[0]} desc={launch.details} id={launch.id} name={launch.name} />
                ))
                }
            </div>

        </div>
    )
}

export default LaunchPads