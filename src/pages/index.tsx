import React from 'react'

import { getPublicRealTimeData } from '@firebase-folder/main'

const Home: React.FC = () => {
  React.useEffect(() => {
    const getPublicData = async () => {
      const publicData =
        await getPublicRealTimeData()

      console.log('publicData: ', publicData)
    }

    getPublicData()
  }, [])

  return (
    <div className="h-full h-screen p-4 bg-green-700 overflow-y-scroll">
      <div className="h-64 bg-red-300">
        SAOHome
      </div>
    </div>
  )
}

export default Home
