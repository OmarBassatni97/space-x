'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { useTypewriter } from 'react-simple-typewriter'
const Mission = () => {
    const [text] = useTypewriter({
        words: [' taking humans to space'],
        loop: 1,
        typeSpeed: 150
    })
    return (
        <div className='flex justify-center h-screen'>
            <div className='flex justify-between w-[1440px] gap-5 items-center'>
                <motion.div
                    initial=
                    {{
                        opacity: 0,

                    }}
                    animate={{
                        opacity: 1,
                        x: 0
                    }}
                    transition={{ duration: 2, delay: 1.5 }}
                    className='text-white w-[50%] flex flex-col gap-3'>
                    <h1 className='uppercase font-semibold text-4xl tracking-wide'> {text}</h1>
                    <p>
                        In 20220, SpaceX returned America&apos;s ability to fly NASA astronauts to and from the International Space Station on American vehicles for the first time since 2011. In addition to flying astronauts to space for NASA, SpaceX&apos;s Dragon spacecraft can also carry commercial astronauts to Earth orbit, the ISS or beyond.
                    </p>
                </motion.div>
                <motion.div
                    initial=
                    {{
                        opacity: 0,

                    }}
                    animate={{
                        opacity: 1,
                        x: 0
                    }}
                    transition={{ duration: 2, delay: 1.5, }}
                >
                    <Image src='/assets/images/astronaut.webp' height={800} width={800} alt='astronaut'/>
                </motion.div>
            </div>
        </div >
    )
}

export default Mission