import React from 'react'

import {
  getPublicRealTimeData,
  // getStorageImageURL,
} from '@firebase-folder/main'

import type {
  TitleImageNameType,
  TitleImageNameListType,
} from '@other-support/Types'

import Banner from '@components/Banner'
import ItemListContainer from '@components/ItemListContainer'

const Home: React.FC = () => {
  const [banner, setBanner] = React.useState<
    TitleImageNameType | undefined
  >(undefined)

  const [items, setItems] =
    React.useState<TitleImageNameListType>(
      Array<TitleImageNameType>()
    )

  React.useEffect(() => {
    const getPublicData = async () => {
      const publicData =
        await getPublicRealTimeData()

      console.log('publicData: ', publicData)

      if (publicData.banner) {
        setBanner(publicData.banner)
      }

      if (publicData.items) {
        setItems(publicData.items)
      }

      // const imageUrl = await getStorageImageURL({
      //   imageName: 'image.jpg',
      // })

      // console.log('imageUrl: ', imageUrl)
    }

    getPublicData()
  }, [])

  const bannerContent = React.useMemo(() => {
    return <Banner banner={banner} />
  }, [banner])

  const itemListContainer = React.useMemo(() => {
    return <ItemListContainer items={items} />
  }, [items])

  return (
    <div className="flex justify-center h-full h-screen p-4 bg-green-700">
      <div className="flex flex-col h-full w-full lg:max-w-4xl h-64 p-4 overflow-y-scroll overflow-x-hidden">
        {bannerContent}
        {itemListContainer}
      </div>
    </div>
  )
}

export default Home
