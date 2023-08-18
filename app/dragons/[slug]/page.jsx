'use client'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { space } from 'postcss/lib/list'
import React, { useEffect, useState } from 'react'


const DragonDetail = ({ params }) => {
  const [data, setData] = useState()
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`https://api.spacexdata.com/v3/dragons/${params.slug}`)
      setData(response.data)
    }
    getData()
  }, [])
  return (
    <div className='text-white flex justify-center'>
      {data ?
        <div className='w-[1440px] justify-between flex '>
          <div className='w-[50%]'>
            <h1 className='text-6xl font-bold mb-2'>{data.name}</h1>
            <h3 className='font-semibold text-xl mb-4'>First Flight Date: {data.first_flight}</h3>
            <div className='flex mt-2 justify-between w-full'>
              <div className='flex flex-col gap-2'>
                <span>Type: {data.type}</span>
                <span>Crew: {data.crew_capacity}</span>
                <span>Dry MAss: {data.dry_mass_kg}kg</span>
                <span className={`${data.active ? 'text-green-400' : 'text-red-400'}`}>Status: {data.active ? 'Active' : 'Not Active'}</span>
                <Link target='_blank' href={data.wikipedia} className='border p-2 text-center hover:bg-gray-300 hover:text-black duration-300'>Wiki</Link>
              </div>
              <div className='bg-gray-300 flex flex-col gap-2 text-black p-4'>
                <h1 className='uppercase text-xl font-bold'>heat shield details</h1>
                <span>Material: {data.heat_shield.material}</span>
                <span>Size: {data.heat_shield.size_meters} m</span>
                <span>Temperature: {data.heat_shield.temp_degrees} degrees</span>
                <span>Dev Partner: {data.heat_shield.dev_partner}</span>
              </div>
            </div>
            <p className='mt-9'>
              {data.description}
            </p>
            <div className='flex justify-between mt-9'>
              <div className='flex flex-col gap-2'>
                <span>Launch Payload Mass: {data.launch_payload_mass.kg}kg</span>
                <span>Return Payload Mass: {data.return_payload_mass.kg}kg</span>
                <span>Pressurized Capsule Payload Volume: {data.pressurized_capsule.payload_volume.cubic_meters}m</span>
                <span>Height With Trunk: {data.height_w_trunk.meters}m</span>
              </div>
              <div></div>
            </div>
          </div>
          <div>
            <Image src={data.flickr_images[0]} width={700} height={700} alt='dragon image' />
          </div>

        </div>
        :
        <span>Loading</span>
      }
    </div>
  )
}

export default DragonDetail