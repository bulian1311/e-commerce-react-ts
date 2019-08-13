import { takeLatest, call, put, all } from 'redux-saga/effects';
import shopActionTypes from './shopActionTypes';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase';
import { fetchCollectionsSuccess, fetchCollectionFailure } from './shopActions';
import { CollectionReference, QuerySnapshot } from '../../firebase/types';

export function* fetchCollectionsAsync(): IterableIterator<any> {
  try {
    const collectionRef: CollectionReference = firestore.collection('collections');
    const snapshot: QuerySnapshot = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionMap));
  } catch (err) {
    yield put(fetchCollectionFailure(err.message));
  }
}

export function* onFetchCollectionsStart(): IterableIterator<any> {
  yield takeLatest(shopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export function* shopSagas(): IterableIterator<any> {
  yield all([
    call(onFetchCollectionsStart)
  ]);
}