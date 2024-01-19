'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DragonCard from './DragonCard'
import { useFetch } from '../hooks/hooks'

const Dragons = () => {
    const { data } = useFetch('https://api.spacexdata.com/v4/dragons')
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