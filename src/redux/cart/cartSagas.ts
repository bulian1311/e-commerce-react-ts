import { all, call, takeLatest, put } from 'redux-saga/effects';

import userActionTypes from '../user/userActionTypes';
import { clearCart } from './cartActions';

export function* clearCartOnSignOut(): IterableIterator<any> {
  yield put(clearCart());
}

export function* onSignOutSuccess(): IterableIterator<any> {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas(): IterableIterator<any> {
  yield all([
    call(onSignOutSuccess)
  ]);
}