
import React from 'react'
import CapsuleCard from './CapsuleCard'
import { useFetch } from '../hooks/hooks'

const Capsules = async () => {
    const { data, error } = await useFetch('https://api.spacexdata.com/v4/capsules')
    if (error) {
        return <div className='text-white w-full flex justify-center items-center text-2xl'>{error}</div>
    }
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