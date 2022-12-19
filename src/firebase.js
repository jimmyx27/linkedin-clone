// import firebase from "firebase/app";
// import "firebase/firestore";
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD_rcgOWSlzykda5YjaZi1kkB8XgZsHhAI",
  authDomain: "linkedin-clone-6085f.firebaseapp.com",
  projectId: "linkedin-clone-6085f",
  storageBucket: "linkedin-clone-6085f.appspot.com",
  messagingSenderId: "198549889862",
  appId: "1:198549889862:web:81a5c798fef204266ffb47",
  measurementId: "G-H3299HWR0G",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
