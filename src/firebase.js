// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = ;

// import firebase from "firebase";
// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAptFc2cotGwm-B8o27_wwN2LAulfrKAh4",
  authDomain: "instagram-clone-react1005.firebaseapp.com",
  projectId: "instagram-clone-react1005",
  storageBucket: "instagram-clone-react1005.appspot.com",
  messagingSenderId: "177692866169",
  appId: "1:177692866169:web:421ad5fb3163b2fd8d46a8",
  measurementId: "G-EBB232L949",
});

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
