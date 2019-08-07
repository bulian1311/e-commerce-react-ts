import React, { FC, ReactElement } from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import CollectionPage from '../collectionPage';
import CollectionOverview from '../../components/collectionOverview';

type PropsType = RouteComponentProps;

const ShopPage: FC<PropsType> = ({ match }): ReactElement => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  )
}

export default ShopPage;

