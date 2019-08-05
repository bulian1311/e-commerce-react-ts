import React, { Component } from 'react';
import { CollectionItemType } from '../../utils/types';
import CollectionPreview from '../../components/collectionPreview';
import SHOP_DATA from './shopData';

type StateType = {
  collections: CollectionItemType[]
}

export class ShopPage extends Component<{}, StateType> {
  state = { collections: SHOP_DATA };

  render() {
    return (
      <div className="shop-page">
        {
          this.state.collections.map(
            ({ ...props }: CollectionItemType) => (
              <CollectionPreview
                key={props.id}
                {...props}
              />
            )
          )
        }
      </div>
    )
  }
}

export default ShopPage;

