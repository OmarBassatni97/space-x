import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='h-[70px] w-full flex justify-center text-white'>
            <div className='flex justify-between w-[1440px] h-full items-center'>
                <span>
                    <Image src='/assets/images/Symbol-SpaceX.svg' width={150} height={150} />
                </span>
                <div>
                    <ul className='flex gap-3 uppercase'>
                        <li className='hover:text-gray-300 duration-300 cursor-pointer'>Capsules</li>
                        <li className='hover:text-gray-300 duration-300 cursor-pointer'>Cores</li>
                        <li className='hover:text-gray-300 duration-300 cursor-pointer'>Dragons</li>
                        <li className='hover:text-gray-300 duration-300 cursor-pointer'>Landing Pads</li>
                        <li className='hover:text-gray-300 duration-300 cursor-pointer'>Launches</li>
                        <li className='hover:text-gray-300 duration-300 cursor-pointer'>Launch Pads</li>
                        <li className='hover:text-gray-300 duration-300 cursor-pointer'>Missions</li>
                        <li className='hover:text-gray-300 duration-300 cursor-pointer'>Rockets</li>
                    </ul>
                </div>
            </div>

        </nav>
    )
}

export default Navbar