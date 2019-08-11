import { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { selectCollectionsLoaded, selectCollection } from '../../redux/shop/shopSelectors';
import WithSpinner from '../../components/withSpinner';
import { RootState } from '../../utils/types';
import CollectionPage, { PropsType } from './CollectionPage';

const mapStateToProps = (state: RootState, ownProps: PropsType) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
  isLoading: !selectCollectionsLoaded(state)
});

const CollectionPageContainer: FunctionComponent = compose<FunctionComponent>(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;

