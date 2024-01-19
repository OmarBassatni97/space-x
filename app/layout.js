'use client'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import './globals.css'
import { Tektur } from 'next/font/google'
import Loading from './components/Loading'

const tektur = Tektur({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'SpaceX',
  description: 'SpaceX information, dragons, launchpads, cores',
}

export default function RootLayout({ children }) {
  
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])
  return (
    <html lang="en">

      <body className={tektur.className}>
        {
          loading ?
            <Loading />
            :
            <>
              <Navbar />
              {children}
            </>
        }
      </body>


    </html>
  )
}
