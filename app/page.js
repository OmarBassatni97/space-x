import FalconHeavy from './components/Falcon Heavy/FalconHeavy'
import FalconHeavyData from './components/Falcon Heavy/FalconHeavyData'
import Mission from './components/Mission/Mission'
import StarLinkMission from './components/Starlink Mission/StarLinkMission'

export default function Home() {

  return (
    <div className=' overflow-x-hidden'>
      <Mission />
      <StarLinkMission />
      <FalconHeavy />
      <FalconHeavyData />
    </div>
  )
}
