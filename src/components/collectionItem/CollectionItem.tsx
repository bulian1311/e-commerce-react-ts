import React, { FC, ReactElement } from 'react';
import './CollectionItem.scss';
import { ShopItemType } from '../../utils/types';

type PropsType = ShopItemType & {}

const CollectionItem: FC<PropsType> = ({ id, name, price, imageUrl }): ReactElement => {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  )
}

export default CollectionItem;
