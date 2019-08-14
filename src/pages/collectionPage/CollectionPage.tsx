import React, { FC, ReactElement } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import CollectionItem from '../../components/collectionItem';
import { CollectionItemType, ShopItemType } from '../../utils/types';
import './CollectionPage.scss';

type MatchParams = {
  collectionId: 'hats' | 'sneakers' | 'jackets' | 'womens' | 'mens'
}

export type PropsType = RouteComponentProps<MatchParams> & {
  collection: CollectionItemType | null
}

const CollectionPage: FC<PropsType> = ({ collection }): ReactElement => {
  return (
    <div className="collection-page">
      {
        collection && (
          <div>
            <h2 className="title">{collection.title}</h2>
            <div className="items">
              {
                collection.items.map(
                  (item: ShopItemType) => <CollectionItem key={item.id} item={item} />
                )
              }
            </div>
          </div>
        )
      }
    </div>)
}

export default CollectionPage;
