import firebase from './firebase';
import { auth, signInWithGoogle, createUserProfileDocument } from './auth';
import { firestore, addCollectionAndDocuments, convertCollectionsSnapshotToMap } from './firestore';

export {
  firebase,
  firestore,
  auth,
  signInWithGoogle,
  createUserProfileDocument,
  addCollectionAndDocuments,
  convertCollectionsSnapshotToMap
};