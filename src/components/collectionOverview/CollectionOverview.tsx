import React, { FC, ReactElement } from 'react';
import { connect } from 'react-redux';
import { selectShopCollections } from '../../redux/shop/shopSelectors';
import CollectionPreview from '../collectionPreview';
import { CollectionItemType, RootState } from '../../utils/types';
import './CollectionOverview.scss';

type PropsType = {
  collections: CollectionItemType[]
}

const CollectionOverview: FC<PropsType> = ({ collections }): ReactElement => {
  return (
    <div className="collections-overview">
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

export default connect(mapStateToProps)(CollectionOverview);
