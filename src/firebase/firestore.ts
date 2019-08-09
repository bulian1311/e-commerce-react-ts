import firebase from './firebase';
import { Firestore, QuerySnapshot, QueryDocumentSnapshot } from './types';
import { ShopItemType } from '../utils/types';

export const firestore: Firestore = firebase.firestore();

type ObjType = {
  title: string,
  items: ShopItemType[]
}

export const addCollectionAndDocuments = async (collectionKey: string, objectsToAdd: ObjType[]) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(
    (item: ObjType) => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, item);
    }
  );
  return await batch.commit();
}

export const convertCollectionsSnapshotToMap = (collections: QuerySnapshot) => {
  const transformCollection = collections.docs.map(
    (doc: QueryDocumentSnapshot) => {
      const { title, items } = doc.data();
      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      }
    }
  );

  return transformCollection.reduce(
    (acc: any, collection: any) => {
      acc[collection.title.toLocaleLowerCase()] = collection;
      return acc;
    },
    {}
  );
}