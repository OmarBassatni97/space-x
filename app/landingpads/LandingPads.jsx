import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LandingPad from './LandingPad'

const LandingPads = () => {
    const [data, setData] = useState()
    useEffect(() => {
        const getData = async () => {
            const response = await axios.get('https://api.spacexdata.com/v4/landpads')
            const landingPads = response.data
            setData(landingPads)
        }
        getData()
    }, [])
    return (
        <div className='flex justify-center items-center'>
            <div className='w-[1440px] grid grid-cols-3 justify-center gap-5'>
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