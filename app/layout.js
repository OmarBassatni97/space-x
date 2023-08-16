'use client'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import './globals.css'
import { Inter, Open_Sans } from 'next/font/google'
import Loading from './components/Loading'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'SpaceX',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])
  console.log(loading);
  return (
    <html lang="en">

      <body className={openSans.className}>
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
