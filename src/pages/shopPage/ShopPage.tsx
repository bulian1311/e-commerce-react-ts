import React, { FC, ReactElement, useEffect } from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import CollectionPage from '../collectionPage';
import CollectionOverview from '../../components/collectionOverview';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shopActions';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase';
import { QuerySnapshot } from '../../firebase/types';

type PropsType = RouteComponentProps & {
  updateCollections: (map: any) => void
};

const ShopPage: FC<PropsType> = ({ match, updateCollections }): ReactElement => {

  useEffect(() => {
    const collectionRef = firestore.collection('collections');

    const unsubscribeFormSnapshot = collectionRef.onSnapshot(
      async (snap: QuerySnapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snap);
        updateCollections(collectionsMap);
      }
    );
    return unsubscribeFormSnapshot;
  });

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  )
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateCollections: (collectionsMap: any) => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);

