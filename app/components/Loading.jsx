'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
const Loading = () => {
    return (
        <div className='flex justify-center items-center w-screen h-screen loading'>
            <motion.div
                initial=
                {{
                    opacity: 1,
                    y: 0
                }}
                animate={{
                    opacity: 0,
                    y: -500
                }}
                transition={{ duration: 2 }}
            >
                <Image className='animate-pulse' src='/assets/images/Symbol-SpaceX.svg' width={600} height={600} alt='space-x-logo' />
            </motion.div>
        </div>
    )
}

export default Loading