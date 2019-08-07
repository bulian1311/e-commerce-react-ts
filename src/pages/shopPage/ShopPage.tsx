import React, { FC, ReactElement } from 'react';
import CollectionOverview from '../../components/collectionOverview';

const ShopPage: FC = (): ReactElement => {
  return (
    <div className="shop-page">
      <CollectionOverview />
    </div>
  )
}

export default ShopPage;

