import { takeLatest, put, all, call } from 'redux-saga/effects';
import userActionTypes from './userActionTypes';
import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../firebase';
import { DocumentReference, DocumentSnapshot } from '../../firebase/types';
import { AnyAction } from 'redux';
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure
} from './userActions';

export function* getSnapshotFromUserAuth(userAuth: any, additionalData?: any): IterableIterator<any> {
  try {
    const userRef: DocumentReference = yield call(createUserProfileDocument, userAuth, additionalData);
    const userSnap: DocumentSnapshot = yield userRef.get();
    const data: any = userSnap.data();
    yield put(signInSuccess({
      id: userSnap.id,
      displayName: data.displayName,
      email: data.email,
      createdAt: data.createdAt
    }));
  }
  catch (err) {
    yield put(signInFailure(err.message));
  }
}

export function* signInWithGoogle(): IterableIterator<any> {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  }
  catch (err) {
    yield put(signInFailure(err.message));
  }
}

export function* signInWithEmail({ payload: { email, password } }: AnyAction): IterableIterator<any> {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  }
  catch (err) {
    yield put(signInFailure(err.message));
  }
}

export function* isUserAuth(): IterableIterator<any> {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  }
  catch (err) {
    yield put(signInFailure(err.message));
  }
}

export function* signOut(): IterableIterator<any> {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  }
  catch (err) {
    yield put(signOutFailure(err.message));
  }
}

export function* signUp({ payload: { email, password, displayName } }: any): IterableIterator<any> {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({ user, additionalData: { displayName } }));
  }
  catch (err) {
    yield put(signUpFailure(err.message));
  }
}

export function* signInAfterSignUp({ payload: { user, additionalData } }: any): IterableIterator<any> {
  yield getSnapshotFromUserAuth(user, additionalData);
}

export function* onGoogleSignInStart(): IterableIterator<any> {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart(): IterableIterator<any> {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignOutStart(): IterableIterator<any> {
  yield takeLatest(userActionTypes.SIGN_OUT_START, signOut);
}

export function* onCheckUserSession(): IterableIterator<any> {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuth);
}

export function* onSignUpStart(): IterableIterator<any> {
  yield takeLatest(userActionTypes.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess(): IterableIterator<any> {
  yield takeLatest(userActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* userSagas(): IterableIterator<any> {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess)
  ]);
}