'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CapsuleCard from './CapsuleCard'

const Capsules = () => {
    const [data, setData] = useState()
    useEffect(() => {
        const getData = async () => {
            const response = await axios.get('https://api.spacexdata.com/v4/capsules')
            const capsules = response.data
            setData(capsules)
        }
        getData()
    }, [])
    return (
        <div className='w-full flex items-center justify-center'>
            <div className='w-[1440px] grid grid-cols-4 items-center justify-center gap-5'>
                {data ?
                    data.map((capsule, index) => (
                        <CapsuleCard
                            key={index}
                            type={capsule.type}
                            serial={capsule.serial}
                            reused={capsule.reuse_count}
                            launches={capsule.launches.length}
                            waterLanding={capsule.water_landings}
                            status={capsule.status}
                            lastUpdate={capsule.last_update}
                        />
                    ))
                    : ''
                }
            </div>
        </div>
    )
}

export default Capsules