'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
const Navbar = () => {
    return (
        <nav className='h-[100px]  w-full flex justify-center text-white'>
            <div className='flex justify-between w-[1440px] h-full items-center'>
                <motion.span
                    initial=
                    {{
                        opacity: 0,
                        y: -200,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{ duration: 2 }}
                >
                    <Link href='/'><Image src='/assets/images/Symbol-SpaceX.svg' width={150} height={150} alt='spacex' /></Link>
                </motion.span>
                <motion.div
                    initial=
                    {{
                        opacity: 0,
                        y: -200,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{ duration: 2 }}
                >
                    <ul className='flex gap-3 uppercase'>
                        <Link href='/capsules' className='hover:text-gray-300 duration-300 cursor-pointer'>Capsules</Link>
                        <Link href='/cores' className='hover:text-gray-300 duration-300 cursor-pointer'>Cores</Link>
                        <li className='hover:text-gray-300 duration-300 cursor-pointer'>Dragons</li>
                        <li className='hover:text-gray-300 duration-300 cursor-pointer'>Landing Pads</li>
                        <li className='hover:text-gray-300 duration-300 cursor-pointer'>Launches</li>
                        <li className='hover:text-gray-300 duration-300 cursor-pointer'>Launch Pads</li>
                        <li className='hover:text-gray-300 duration-300 cursor-pointer'>Missions</li>
                        <li className='hover:text-gray-300 duration-300 cursor-pointer'>Rockets</li>
                    </ul>
                </motion.div>
            </div>


        </nav>
    )
}

export default Navbar