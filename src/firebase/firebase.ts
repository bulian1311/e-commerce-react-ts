import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAdO4QFPwlLPGV1RTyOsiU0vEdLJyPHotA",
  authDomain: "e-commerce-react-ts.firebaseapp.com",
  databaseURL: "https://e-commerce-react-ts.firebaseio.com",
  projectId: "e-commerce-react-ts",
  storageBucket: "",
  messagingSenderId: "650312139843",
  appId: "1:650312139843:web:3c1dd641b952005d"
};

firebase.initializeApp(firebaseConfig);

export const provider: firebase.auth.GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export default firebase;