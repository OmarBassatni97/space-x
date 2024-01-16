'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

const StarLinkMission = () => {
    const { ref, inView } = useInView()

    return (
        <div ref={ref} className='h-screen flex justify-center'>
            <div
                className='flex w-[1440px] justify-center items-center text-white'>
                <motion.div
                    
                    initial=
                    {{
                        opacity: 0,
                        x: -500
                    }}
                    animate={{
                        opacity: 1,
                        x: inView ? 0 : -500
                    }}
                    transition={{ duration: 2 }}
                    className='flex flex-col gap-6 w-[40%]'>
                    <h1 className='uppercase font-semibold text-2xl'>Starlink mission</h1>
                    <p className='leading-10 opacity-90 text-xl'>On Friday, March 24 at 11:33 a.m. ET. Falcon 9 launched 56 Starlink satellites to low-Earth orbit from Space Launch Complex 40 at Cape Canaveral Space Force Station, Florida</p>
                </motion.div>
                <div>
                    <Image src='/assets/images/Orbital.png' height={1200} width={1200} alt='orbital' />
                </div>
                <motion.div
                   
                    initial=
                    {{
                        opacity: 0,
                        x: 500
                    }}
                    animate={{
                        opacity: 1,
                        x: inView ? 0 : 500
                    }}
                    transition={{ duration: 2 }}
                    className='w-[40%]'>
                    <p className='leading-10 opacity-90 text-xl'>This was the tenth launch and landing for this Falcon 9 first stage booster. Which previously launched CRS-22. Crew-3. Turksat 58, Crew-4, CRS-25. Eutelsat HOTBIRD 13G, mPOWER-a and now three Starlink missions</p>
                </motion.div>
            </div>
        </div >

    )
}

export default StarLinkMission