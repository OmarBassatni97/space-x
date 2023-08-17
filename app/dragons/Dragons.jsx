'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DragonCard from './DragonCard'

const Dragons = () => {
    const [data, setData] = useState()

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get('https://api.spacexdata.com/v4/dragons')
            const dragons = response.data
            setData(dragons)
        }
        getData()
    }, [])
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