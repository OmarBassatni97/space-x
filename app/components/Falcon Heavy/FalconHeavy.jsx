'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTypewriter } from 'react-simple-typewriter'

const FalconHeavy = () => {
    const { ref, inView } = useInView();
    const [title] = useTypewriter({
        words: ['falcon heavy'],
        loop: 1,
        typeSpeed: 150
    })
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className='flex justify-center w-[1440px] gap-8'>
                <motion.div className='flex flex-col gap-8 text-white w-[50%] '>
                    <motion.h1
                        ref={ref}
                        initial=
                        {{
                            opacity: 0,

                        }}
                        animate={{
                            opacity: inView ? 1 : 0,
                        }}
                        transition={{ duration: 5 }}
                        className='uppercase font-semibold text-6xl'>{title}</motion.h1>
                    <h2 className='uppercase text-2xl'>Over 5 million lbs of thrust</h2>
                    <motion.p
                        ref={ref}
                        initial=
                        {{
                            opacity: 0,

                        }}
                        animate={{
                            opacity: inView ? 1 : 0,
                        }}
                        transition={{ duration: 5 }}

                        className='leading-10 text-lg opacity-80'
                    >
                        With more than 5 million pounds of thrust at liftoff, Falcon Heavy is one if the most capable rockets flying. By comparison, the liftoff thrust of the Falcon Heavy equals approximately eighteen 747 aircraft at full power. Falcon Heavy can lift the equivalent of a fully loaded 737 jetliner-complete with passengers, luggage and fuel-to orbit.
                    </motion.p>
                </motion.div>
                <motion.div
                    ref={ref}
                    initial=
                    {{
                        opacity: 0,

                    }}
                    animate={{
                        opacity: inView ? 1 : 0,
                        x: 0
                    }}
                    transition={{ duration: 5 }}
                >
                    <Image src='/assets/images/falcon-heavy.jpg' width={1000} height={1000} alt='rocket launch pad' />
                </motion.div>
            </div>
        </div>
    )
}

export default FalconHeavy