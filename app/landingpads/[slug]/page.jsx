import { getData } from '@/app/hooks/hooks';
import Image from 'next/image';
import Link from 'next/link'
import { FaLongArrowAltLeft } from "react-icons/fa";
const LandingPadDetail = async ({ params }) => {
    const { data, error } = await getData(`https://api.spacexdata.com/v4/landpads/${params.slug}`)
    if (error) {
        return <div className='text-white w-full flex justify-center items-center text-2xl'>{error}</div>
    }
    return (
        data ? (
            <section className=' flex justify-center'>
                <div className='w-[1440px] grid grid-cols-2 gap-7 text-white'>
                    <div>
                        <h1 className='pb-5 text-[80px]'>{data.full_name}</h1>
                        <span className='font-bold'>{data.name}</span>
                        <div className='flex justify-between py-5'>
                            <div className='flex flex-col'>
                                <span><span className='font-bold'>{data.launches.length}</span> launches</span>
                                <span><span className='font-bold'>{data.landing_successes}</span> Successful Landings</span>
                                <span className={`${data.status === 'active' ? 'text-green-500' : 'text-red-500'}`}>Status: {data.status}</span>
                            </div>
                            <div className='flex flex-col'>
                                <span>Location</span>
                                <span>Locality: {data.locality}</span>
                                <span>Region: {data.region}</span>
                            </div>
                        </div>
                        <div>
                            <p>
                                {data.details}
                            </p>
                        </div>
                        <div className='mt-5 flex gap-2 items-center'>
                            <Link className='border py-2 px-5 border-white hover:bg-white hover:text-black duration-200' target='blank' href={data.wikipedia}>Wiki</Link>
                            <Link href='/landingpads' className='flex items-center'><FaLongArrowAltLeft />Back</Link>
                        </div>
                    </div>
                    <div className='relative w-[700px]'>
                        <Image fill={true} quality={100} src={data.images.large[0]} />
                    </div>
                </div>
            </section>

        )
            :
            <div className='text-white'>loading</div>

    )

}

export default LandingPadDetail