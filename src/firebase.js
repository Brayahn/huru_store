import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkPh-J1ET-UnKuhQoEWjtyrzb9i2gSp7w",
  authDomain: "huru-72f8b.firebaseapp.com",
  projectId: "huru-72f8b",
  storageBucket: "huru-72f8b.appspot.com",
  messagingSenderId: "931178801763",
  appId: "1:931178801763:web:9f25e89f4ff1087d52a656",
  measurementId: "G-Q4RNC5G6M4",
};

const firebase = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
