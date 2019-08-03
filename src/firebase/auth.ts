import firebase from './firebase';
import { Auth, GoogleAuthProvider } from './types';
import { firestore } from './firestore';
import { DocumentReference, DocumentSnapshot } from './types';
import { User } from 'firebase';

export const auth: Auth = firebase.auth();

const provider: GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = (): any => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (
  userAuth: User, addittionalData?: any
): Promise<DocumentReference> => {
  //if (!userAuth) return;

  const userRef: DocumentReference = firestore.doc(`users/${userAuth.uid}`);

  const snapShot: DocumentSnapshot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...addittionalData
      });
    } catch (err) {
      console.error(err.message);
    }
  }

  return userRef;
}