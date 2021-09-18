import React from 'react'

import {
  getPublicRealTimeData,
  // getStorageImageURL,
} from '@firebase-folder/main'

import type {
  TitleImageNameType,
  TitleSubTitleImageNameType,
  TitleSubTitleImageNameListType,
} from '@other-support/Types'

import Banner from '@components/Banner'
import ItemListContainer from '@components/ItemListContainer'
import Footer from '@components/Footer'

const Home: React.FC = () => {
  const [banner, setBanner] = React.useState<
    TitleImageNameType | undefined
  >(undefined)

  const [items, setItems] =
    React.useState<TitleSubTitleImageNameListType>(
      Array<TitleSubTitleImageNameType>()
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
    <div className="flex flex-col items-center h-full h-screen p-4 bg-green-700 overflow-y-scroll ">
      <div className="flex flex-col h-full w-full lg:max-w-4xl h-64 p-4">
        <div className="min-height-600 ">
          {bannerContent}
          {itemListContainer}
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home
