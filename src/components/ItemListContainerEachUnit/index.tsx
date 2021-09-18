import React from 'react'

import type { TitleSubTitleImageNameType } from '@other-support/Types'

import { getStorageImageURL } from '@firebase-folder/main'

interface ItemListContainerEachUnitProps {
  item: TitleSubTitleImageNameType | undefined
}

const ItemListContainerEachUnit: React.FC<ItemListContainerEachUnitProps> =
  ({ item }) => {
    const [imageUrl, setImageUrl] =
      React.useState<string | undefined>(
        undefined
      )

    React.useEffect(() => {
      const getPublicData = async () => {
        if (!item) {
          return
        }

        if (!item.imageName) {
          return
        }

        const imageUrl = await getStorageImageURL(
          {
            imageName: item.imageName,
          }
        )

        console.log('imageUrl: ', imageUrl)

        setImageUrl(imageUrl)
      }

      getPublicData()
    }, [item])

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
          <div className="w-full aspect-w-16 aspect-h-9 bg-gray-200">
            {imageUrl && (
              <img
                className="w-full h-full object-cover"
                src={imageUrl}
              />
            )}
          </div>
        </div>
        <div className="flex w-full md:flex-3 lg:flex-7 flex-col">
          <div className="overflow-wrap-anywhere mb-1 text-white">
            {itemTitle}
          </div>
          <div className="overflow-wrap-anywhere text-white">
            {itemSubTitle}
          </div>
        </div>
      </div>
    )
  }

export default ItemListContainerEachUnit
