import React from 'react'

import type {
  // TitleImageNameType,
  TitleImageNameListType,
} from '@other-support/Types'

interface ItemListContainerProps {
  items: TitleImageNameListType | undefined
}

const ItemListContainer: React.FC<ItemListContainerProps> =
  ({ items }) => {
    return (
      <div className="flex flex-col">
        <div className="flex overflow-wrap-anywhere">
          items:
        </div>
        <div className="flex overflow-wrap-anywhere">
          {JSON.stringify(items)}
        </div>
      </div>
    )
  }

export default ItemListContainer
