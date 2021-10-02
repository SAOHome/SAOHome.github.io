import React from 'react'

import Banner from '@components/Banner'
import ItemListContainer from '@components/ItemListContainer'
import Footer from '@components/Footer'
// import ModelItem from '@components/ModelItem'

import type {
  // TitleSubTitleImagesType,
  TitleSubTitleImagesListType,
} from '@other-support/Types'

import { getPublicRealTimeData } from '@firebase-folder/main'

const Home: React.FC = () => {
  const [items, setItems] =
    React.useState<TitleSubTitleImagesListType>(
      []
    )

  // const [modelItem] = React.useState<
  //   TitleSubTitleImagesType | undefined
  // >(undefined) // mark: temp hidden setModelItem

  React.useEffect(() => {
    const getPublicData = async () => {
      const publicData =
        await getPublicRealTimeData()

      if (publicData.products) {
        setItems(publicData.products)
      }
    }

    getPublicData()
  }, [])

  const itemListContainer = React.useMemo(() => {
    return <ItemListContainer items={items} />
  }, [items])

  return (
    <div className="flex flex-col items-center h-full h-screen p-4 bg-green-700 overflow-y-scroll ">
      <div className="flex flex-col h-full w-full lg:max-w-4xl h-64 p-4">
        <div className="flex flex-col justify-between min-h-60">
          <Banner />
          {/* <ModelItem item={modelItem} /> */}
          {itemListContainer}
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home
