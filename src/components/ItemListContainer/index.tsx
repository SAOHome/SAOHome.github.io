import React from 'react'

import type {
  TitleSubTitleImagesType,
  TitleSubTitleImagesListType,
} from '@other-support/Types'

import ItemListContainerEachUnit from '@components/ItemListContainerEachUnit'

interface ItemListContainerProps {
  items: TitleSubTitleImagesListType | undefined
  showItem: (
    item: TitleSubTitleImagesType | undefined
  ) => void
}

const ItemListContainer: React.FC<ItemListContainerProps> =
  ({ items, showItem }) => {
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
                showItem={showItem}
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
