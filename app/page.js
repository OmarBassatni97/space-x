import Mission from './components/Mission/Mission'
import StarLinkMission from './components/Starlink Mission/StarLinkMission'

export default function Home() {
  return (
    <div className='bg-black overflow-x-auto'>
      <Mission />
      <StarLinkMission />
    </div>
  )
}
