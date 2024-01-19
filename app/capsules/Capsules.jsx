'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CapsuleCard from './CapsuleCard'
import { useFetch } from '../hooks/hooks'

const Capsules = () => {
    const { data } = useFetch('https://api.spacexdata.com/v4/capsules')
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