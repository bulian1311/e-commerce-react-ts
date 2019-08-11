import React, { FC, ReactElement, useEffect } from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import { CollectionPageContainer } from '../collectionPage';
import { CollectionOverviewContainer } from '../../components/collectionOverview';

type PropsType = RouteComponentProps & {
  fetchCollestionsStartAsync: () => void
};

const ShopPage: FC<PropsType> = ({ match, fetchCollestionsStartAsync }): ReactElement => {

  useEffect(() => {
    fetchCollestionsStartAsync();
  }, [fetchCollestionsStartAsync]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  )
}

export default ShopPage;

