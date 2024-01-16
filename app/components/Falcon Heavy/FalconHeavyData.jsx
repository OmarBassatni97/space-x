import Image from 'next/image'
import React from 'react'
import VerticalBorder from '../VerticalBorder'

const FalconHeavyData = () => {
    return (
        <div className=' flex flex-col items-center '>
            <div className='flex flex-col w-[1440px] justify-center gap-6 pt-11 text-white'>
                <div className='flex flex-col gap-6 items-center'>
                    <span className='text-8xl font-semibold'>5</span>
                    <span className='uppercase '>total launches</span>
                    <VerticalBorder />
                </div>
                <div className='flex flex-col gap-6 items-center'>
                    <span className='text-8xl font-semibold'>11</span>
                    <span className='uppercase '>total landings</span>
                    <VerticalBorder />
                </div>
                
                <div className='flex flex-col gap-6 items-center'>
                    <span className='text-8xl font-semibold'>6</span>
                    <span className='uppercase '>total reflights</span>
                </div>
            </div>
            <div className='text-white flex flex-col w-[440px] text-center justify-center items-center pt-10'>
                <Image src='/assets/images/Falcon-heavy-icon.png' width={100} height={100} alt='falcon-heavy' />
                <p>Falcon Heavy is composed of three reusable Falcon 9 nine-engine cores whose 27 Merlin engines together generate more than 5 million pounds of thrust at liftoff, equal to approximately eighteen 747 aircraft. As one if the world&apos;s most powerful operational rockets, Falcon Heavy can lift nearly 64 metric tons (141,000 lvs) to orbit</p>
            </div>
        </div>

    )
}

export default FalconHeavyData