import React, { FC, ReactElement } from 'react';
import { connect } from 'react-redux';
import { selectShopCollections } from '../../redux/shop/shopSelectors';
import CollectionPreview from '../../components/collectionPreview';
import { CollectionItemType, RootState } from '../../utils/types';

type PropsType = {
  collections: CollectionItemType[]
}

const ShopPage: FC<PropsType> = ({ collections }): ReactElement => {
  return (
    <div className="shop-page">
      {
        collections.map(
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

const mapStateToProps = (state: RootState) => ({
  collections: selectShopCollections(state)
})

export default connect(mapStateToProps)(ShopPage);

