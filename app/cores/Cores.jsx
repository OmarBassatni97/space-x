import React from 'react'
import CoreCard from './CoreCard'
import { getData } from '../hooks/hooks'

const Cores = async () => {
    const { data, error } = await getData('https://api.spacexdata.com/v4/cores')
    if (error) {
        return <div className='text-white w-full flex justify-center items-center text-2xl'>{error}</div>
    }
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