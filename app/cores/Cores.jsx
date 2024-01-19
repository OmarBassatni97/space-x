'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CoreCard from './CoreCard'
import { useFetch } from '../hooks/hooks'

const Cores = () => {
    const { data } = useFetch('https://api.spacexdata.com/v4/cores')
    return (
        <div className='w-full flex items-center justify-center'>
            <div className='w-[1440px] grid grid-cols-4 items-center justify-center gap-5'>
                {data ?
                    data.map((core, index) => (
                        <CoreCard
                            key={index}
                            reused={core.reuse_count}
                            serial={core.serial}
                            rtls={core.rtls_landings}
                            asds={core.asds_landings}
                            status={core.status}
                            launches={core.launches.length}
                            lastUpdate={core.last_update}
                        />
                    ))
                    : <span className='text-white'>Loading</span>
                }
            </div>
        </div>
    )
}

export default Cores