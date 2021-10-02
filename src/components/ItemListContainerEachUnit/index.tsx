import React from 'react'
import Image from 'next/image'

import type {
  TitleSubTitleImagesType,
  // ImageNameObjectListType,
} from '@other-support/Types'

import { getStorageImageURL } from '@firebase-folder/main'

interface ItemListContainerEachUnitProps {
  item: TitleSubTitleImagesType | undefined
}

const ItemListContainerEachUnit: React.FC<ItemListContainerEachUnitProps> =
  ({ item }) => {
    const [imageUrl, setImageUrl] =
      React.useState<string | undefined>(
        undefined
      )

    const firstImageName = React.useMemo(() => {
      if (!item) {
        return
      }

      if (!item.images) {
        return
      }

      if (!item.images[0]) {
        return
      }

      return item.images[0].imageName
    }, [item])

    React.useEffect(() => {
      const getPublicData = async () => {
        if (!firstImageName) {
          return
        }

        const imageUrl = await getStorageImageURL(
          {
            imageName: firstImageName,
          }
        )

        setImageUrl(imageUrl)
      }

      getPublicData()
    }, [firstImageName])

    const itemTitle = React.useMemo(() => {
      if (!item) {
        return ''
      }

      if (!item.title) {
        return ''
      }

      return item.title
    }, [item])

    const itemSubTitle = React.useMemo(() => {
      if (!item) {
        return ''
      }

      if (!item.subTitle) {
        return ''
      }

      return item.subTitle
    }, [item])

    return (
      <div className="flex flex-col md:flex-row lg:flex-row mb-8 items-center">
        <div className="flex w-full md:flex-2 lg:flex-2 lg:justify-center mr-4">
          <div className="w-full aspect-w-16 aspect-h-9 bg-gray-200 mb-2 md:mb-0">
            {imageUrl && (
              <Image
                alt="item-list-unit-image"
                className="w-full h-full object-cover"
                src={imageUrl}
                layout="fill"
              />
            )}
          </div>
        </div>
        <div className="flex w-full md:flex-3 lg:flex-7 flex-col">
          <div className="whitespace-pre-wrap overflow-wrap-anywhere mb-2 text-2xl text-pink-300">
            {itemTitle}
          </div>
          <div className="whitespace-pre-wrap overflow-wrap-anywhere text-white">
            {itemSubTitle}
          </div>
          <div className="flex justify-end mt-2">
            <button
              className="text-yellow-300 hover:opacity-50"
              onClick={() =>
                console.log('show more')
              }
            >
              More
            </button>
          </div>
        </div>
      </div>
    )
  }

export default ItemListContainerEachUnit
