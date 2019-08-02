import React, { FC, ReactElement } from 'react';
import './CollectionPreview.scss';
import CollectionItem from '../collectionItem';
import { ShopItemType, CollectionItemType } from '../../utils/types';


type PropsType = CollectionItemType & {}

const CollectionPreview: FC<PropsType> = ({ title, items }): ReactElement => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {
          items
            .filter((item: ShopItemType, i: number) => i < 4)
            .map(({ ...props }: ShopItemType) => (
              <CollectionItem key={props.id} {...props} />
            ))
        }
      </div>
    </div>
  )
}

export default CollectionPreview;
