import React, { FC, ReactElement, useEffect } from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import CollectionPage from '../collectionPage';
import CollectionOverview from '../../components/collectionOverview';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { fetchCollestionsStartAsync } from '../../redux/shop/shopActions';
import { selectIsCollectionFetching, selectCollectionsLoaded } from '../../redux/shop/shopSelectors';
import { RootState } from '../../utils/types';
import WithSpinner from '../../components/withSpinner';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

type PropsType = RouteComponentProps & {
  fetchCollestionsStartAsync: () => void,
  isCollectionFething: boolean,
  isCollectionLoaded: boolean
};

const ShopPage: FC<PropsType> = ({ match, fetchCollestionsStartAsync, isCollectionLoaded }): ReactElement => {

  useEffect(() => {
    fetchCollestionsStartAsync();
  }, [fetchCollestionsStartAsync]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={
          (props: any) => (
            <CollectionsOverviewWithSpinner
              isLoading={!isCollectionLoaded}
              {...props}
            />
          )
        }
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={
          (props: any) => (
            <CollectionPageWithSpinner
              isLoading={!isCollectionLoaded}
              {...props}
            />
          )
        }
      />
    </div>
  )
}

const mapStateToProps = (state: RootState) => ({
  isCollectionFetching: selectIsCollectionFetching(state),
  isCollectionLoaded: selectCollectionsLoaded(state)
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchCollestionsStartAsync: () => dispatch<any>(fetchCollestionsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);

