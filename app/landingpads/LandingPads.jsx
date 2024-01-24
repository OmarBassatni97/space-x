import React from 'react'
import LandingPad from './LandingPad'
import { getData } from '../hooks/hooks'

const LandingPads = async () => {
    const { data, error } = await getData('https://api.spacexdata.com/v4/landpads')
    if (error) {
        return <div className='text-white w-full flex justify-center items-center text-2xl'>{error}</div>
    }
    return (
        <div className='flex justify-center items-center'>
            <div className='w-[1440px] grid grid-cols-4 justify-center gap-5'>
                {data ? data.map((landingPad, index) => (
                    <LandingPad key={index} name={landingPad.type} zone={landingPad.full_name} image={landingPad.images.large[0]} desc={landingPad.details} id={landingPad.id}/>
                ))

                    : <span>Loading</span>
                }
            </div>

        </div>
    )
}

export default LandingPads