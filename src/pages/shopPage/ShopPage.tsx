import React, { FC, ReactElement, useEffect } from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import { CollectionPageContainer } from '../collectionPage';
import { CollectionOverviewContainer } from '../../components/collectionOverview';

type PropsType = RouteComponentProps & {
  fetchCollectionsStart: () => void
};

const ShopPage: FC<PropsType> = ({ match, fetchCollectionsStart }): ReactElement => {

  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

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

