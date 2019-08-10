import { AnyAction, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import shopActionType from './shopActionTypes';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase';
import { QuerySnapshot } from '../../firebase/types';
import { RootState } from '../../utils/types'

export const fetchCollectionsStart: ActionCreator<AnyAction> = (): AnyAction => {
  return {
    type: shopActionType.FETCH_COLLECTIONS_START
  }
}

export const fetchCollectionsSuccess: ActionCreator<AnyAction> = (
  collectionMap: any
): AnyAction => {
  return {
    type: shopActionType.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionMap
  }
}

export const fetchCollectionFailure: ActionCreator<AnyAction> = (errMessage: string): AnyAction => {
  return {
    type: shopActionType.FETCH_COLLECTIONS_FAILURE,
    payload: errMessage
  }
}

type ThunkResult<R> = ThunkAction<R, RootState, null, AnyAction>;

export const fetchCollestionsStartAsync: ActionCreator<ThunkResult<void>> = () => {
  return (dispatch: Dispatch): void => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    collectionRef.get().then(
      (snap: QuerySnapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snap);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      }
    ).catch(err => dispatch(fetchCollectionFailure(err.message)));
  }
}