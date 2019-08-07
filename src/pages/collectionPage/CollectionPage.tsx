import React, { FC, ReactElement } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import CollectionItem from '../../components/collectionItem';
import { selectCollection } from '../../redux/shop/shopSelectors';
import { RootState, CollectionItemType, ShopItemType } from '../../utils/types';
import './CollectionPage.scss';

type MatchParams = {
  collectionId: 'hats' | 'sneakers' | 'jackets' | 'womens' | 'mens'
}

type PropsType = RouteComponentProps<MatchParams> & {
  collection: CollectionItemType
}

const CollectionPage: FC<PropsType> = ({ collection }): ReactElement => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {
          items.map(
            (item: ShopItemType) => <CollectionItem key={item.id} item={item} />
          )
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state: RootState, ownProps: PropsType) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);
