import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LandingPad from './LandingPad'
import { useFetch } from '../hooks/hooks'

const LandingPads = () => {
    const { data } = useFetch('https://api.spacexdata.com/v4/landpads')
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