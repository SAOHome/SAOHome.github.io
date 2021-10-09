import React from 'react'
import classNames from 'classnames'

import Banner from '@components/Banner'
import ItemListContainer from '@components/ItemListContainer'
import Footer from '@components/Footer'
import ModelItem from '@components/ModelItem'

import type {
  TitleSubTitleImagesType,
  TitleSubTitleImagesListType,
} from '@other-support/Types'

import { getPublicRealTimeData } from '@firebase-folder/main'

const Home: React.FC = () => {
  const [items, setItems] =
    React.useState<TitleSubTitleImagesListType>(
      []
    )

  const [modelItem, setModelItem] =
    React.useState<
      TitleSubTitleImagesType | undefined
    >(undefined)

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
    return (
      <ItemListContainer
        items={items}
        showItem={item => {
          setModelItem(item)
        }}
      />
    )
  }, [items])

  return (
    <div
      className={classNames(
        'relative min-w-20 flex flex-col items-center h-full h-screen p-4 bg-green-700',

        modelItem
          ? 'overflow-y-hidden'
          : 'overflow-y-scroll'
      )}
    >
      <div className="flex flex-col h-full w-full lg:max-w-4xl h-64 p-4">
        <div className="flex flex-col justify-between min-h-60">
          <Banner />
          {itemListContainer}
          <Footer />
        </div>
      </div>
      <ModelItem
        item={modelItem}
        buttonPress={() =>
          setModelItem(undefined)
        }
      />
    </div>
  )
}

export default Home
