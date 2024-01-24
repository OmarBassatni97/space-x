import { getData } from '@/app/hooks/hooks'
import dayjs from 'dayjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaLongArrowAltLeft } from 'react-icons/fa'

const LaunchDetailPage = async ({ params }) => {
    const { data, error } = await getData(`https://api.spacexdata.com/v4/launches/${params.slug}`)

    if (error) {
        return <div className='text-white w-full flex justify-center items-center text-2xl'>{error}</div>
    }


    return (
        <section className='flex justify-center'>
            <div className='grid grid-cols-2 justify-between w-[1440px] '>
                <div className='w-[700px] h-[700px] relative'>
                    <Image src={data.links?.patch?.large} fill quality={100} alt='badge' />
                </div>
                <div className='text-white flex flex-col gap-5'>
                    <h1 className='text-[80px]'>{data.name}</h1>
                    <span>Launch Date: {dayjs(data.date_local).format('DD-MMMM-YYYY')}, {data.success === "true" ? <span className='text-green-600'>Success</span> : <span className='text-red-600'>Failed</span>}</span>
                    <div className='flex flex-col'>
                        <span className='font-semibold'>Launch Details:</span>
                        <p>{data.details}</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span>
                            Fairing: {data.fairings.reused ? 'Reused' : "Not reused"}
                        </span>
                        <span>
                            Recovered: {data.fairings.recovered ? 'Fairing Recovered' : 'Fairing not recovered'}
                        </span>
                    </div>
                    <div className='flex gap-4'>
                        <Link className='border border-white px-4 py-2 hover:bg-white hover:text-black duration-300 transition' target='blank' href={data.links.article ? data.links.article : '/' }>Read Article</Link>
                        <Link className='border border-white px-4 py-2 hover:bg-white hover:text-black duration-300 transition' target='blank' href={data.links.presskit ? data.links.presskit : '/'}>Presskit</Link>
                    </div>
                    <div>
                        <Link className='border border-white px-4 py-2 hover:bg-white hover:text-black duration-300 transition' target='blank' href={data.links.webcast ? data.links.webcast : '/'}>Watch Launch on Youtube</Link>
                    </div>
                    <div>
                        <Link href='/launches' className='flex items-center'><FaLongArrowAltLeft />Back</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LaunchDetailPage
