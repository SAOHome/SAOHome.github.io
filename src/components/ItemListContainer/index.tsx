import React from 'react'

import type {
  TitleSubTitleImagesType,
  TitleSubTitleImagesListType,
} from '@other-support/Types'

import ItemListContainerEachUnit from '@components/ItemListContainerEachUnit'

interface ItemListContainerProps {
  items: TitleSubTitleImagesListType | undefined
}

const ItemListContainer: React.FC<ItemListContainerProps> =
  ({ items }) => {
    const itemsContainer = React.useMemo(() => {
      if (!items) {
        return
      }

      return (
        <div>
          {items.map(
            (
              item: TitleSubTitleImagesType,
              index: number
            ) => (
              <ItemListContainerEachUnit
                key={`item-list-unit-${index}`}
                item={item}
              />
            )
          )}
        </div>
      )
    }, [items])

    return (
      <div className="flex flex-col">
        {itemsContainer}
      </div>
    )
  }

export default ItemListContainer