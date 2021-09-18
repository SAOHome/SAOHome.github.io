import React from 'react'

import type {
  // TitleImageNameType,
  TitleSubTitleImageNameListType,
} from '@other-support/Types'

import ItemListContainerEachUnit from '@components/ItemListContainerEachUnit'

interface ItemListContainerProps {
  items:
    | TitleSubTitleImageNameListType
    | undefined
}

const ItemListContainer: React.FC<ItemListContainerProps> =
  ({ items }) => {
    const itemsContainer = React.useMemo(() => {
      if (!items) {
        return
      }

      return (
        <div>
          {items.map(item => (
            <ItemListContainerEachUnit
              item={item}
            />
          ))}
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
