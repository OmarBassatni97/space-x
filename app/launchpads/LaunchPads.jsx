'use client'
import React from 'react'
import { useFetch } from '../hooks/hooks'
import LaunchPad from './LaunchPad'

const LaunchPads = () => {
    const { data, error, loading } = useFetch('https://api.spacexdata.com/v4/launchpads')
    console.log(data);
    if (!data) {
        return <h1>No Data</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    if (loading) {
        return <h1>Loading</h1>
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