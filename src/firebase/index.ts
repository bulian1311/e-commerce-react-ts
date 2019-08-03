import firebase from './firebase';
import { auth, signInWithGoogle, createUserProfileDocument } from './auth';
import { firestore } from './firestore';

export {
  firebase,
  firestore,
  auth,
  signInWithGoogle,
  createUserProfileDocument
};