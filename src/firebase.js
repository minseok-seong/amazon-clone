import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqnGWJmSmrg0Y5B5DdWOcXPQ7NJZIHekM",
  authDomain: "clone-7b7c6.firebaseapp.com",
  projectId: "clone-7b7c6",
  storageBucket: "clone-7b7c6.appspot.com",
  messagingSenderId: "582615511318",
  appId: "1:582615511318:web:1fd3542ee851a06302e037",
  measurementId: "G-KL1FG8DM1C",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
