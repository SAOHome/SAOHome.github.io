import React from 'react'
import classNames from 'classnames'

import Banner from '@components/Banner'
import ItemListContainer from '@components/ItemListContainer'
import Footer from '@components/Footer'
// import ModelItem from '@components/ModelItem'

import type {
  TitleSubTitleImagesType,
  TitleSubTitleImagesListType,
} from '@other-support/Types'

import { getPublicRealTimeData } from '@firebase-folder/main'

const tempTitleSubTitleImages: TitleSubTitleImagesType =
  {
    title: 'tempTitle',
    subTitle: 'tempSubTitle',
    text: 'tempText',
    images: [],
  }

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
    if (modelItem) {
      return
    }

    setTimeout(() => {
      setModelItem(tempTitleSubTitleImages)
    }, 3000)
  }, [modelItem])

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
    <div
      className={classNames(
        'flex flex-col items-center h-full h-screen p-4 bg-green-700',

        modelItem
          ? 'overflow-y-hidden'
          : 'overflow-y-scroll'
      )}
    >
      <div className="flex flex-col h-full w-full lg:max-w-4xl h-64 p-4">
        <div className="flex flex-col justify-between min-h-60">
          <Banner />
          {/* <ModelItem item={modelItem} /> */}
          {itemListContainer}
          <Footer />
        </div>
      </div>
      <div
        className={classNames(
          'absolute inset-0',
          modelItem ? 'flex' : 'hidden'
        )}
      >
        <div
          className={classNames(
            'relative flex w-11/12 h-5/6 m-auto lg:max-h-96 lg:max-w-3xl bg-white rounded-2xl overflow-y-scroll'
          )}
        >
          <button
            className="absolute top-4 right-4 w-7 h-7 text-yellow-300 bg-black hover:opacity-50"
            onClick={() =>
              setModelItem(undefined)
            }
          >
            X
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
