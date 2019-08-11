import { FunctionComponent } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import CollectionOverview from './CollectionOverview';
import { selectIsCollectionFetching, selectCollectionForPreview } from '../../redux/shop/shopSelectors';
import WithSpinner from '../withSpinner';
import { RootState } from '../../utils/types';

const mapStateToProps = (state: RootState) => ({
  collections: selectCollectionForPreview(state),
  isLoading: selectIsCollectionFetching(state)
});

const CollectionOverviewContainer: FunctionComponent = compose<FunctionComponent>(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;