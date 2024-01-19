'use client'

import React from 'react'
import Launch from './Launch'
import { useFetch } from '../hooks/hooks'

const Launches = () => {
    const { data } = useFetch('https://api.spacexdata.com/v4/launches')
    return (
        <div className='flex justify-center'>
            <div className='w-[1440px] grid grid-cols-4 justify-center gap-5'>
                {data ? data.slice(0,100)?.map((launch, index) => (
                    <Launch key={index} image={launch.links.patch.large} details={launch.details} id={launch.id} name={launch.name}/>
                )) :
                    <div>Loading...</div>
                }
            </div>

        </div>
    )
}

export default Launches