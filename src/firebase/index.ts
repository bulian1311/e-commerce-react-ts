import firebase, { provider } from './firebase';
import { Auth, Firestore } from './types';

export const auth: Auth = firebase.auth();

export const firestore: Firestore = firebase.firestore();

export const signInWithGoogle = (): any => auth.signInWithPopup(provider);

export default firebase;