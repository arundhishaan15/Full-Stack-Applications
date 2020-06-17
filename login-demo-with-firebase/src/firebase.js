import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAYA_HbUAoSnfVik1jboOqsDeIOqfbHJ_I",
  authDomain: "the-todo-app-01.firebaseapp.com",
  databaseURL: "https://the-todo-app-01.firebaseio.com",
  projectId: "the-todo-app-01",
  storageBucket: "the-todo-app-01.appspot.com",
  messagingSenderId: "1034993488643",
  appId: "1:1034993488643:web:76c7ee031f2ba230300f36",
  measurementId: "G-LQZ0PMRCV5",
});

const db = firebaseApp.firestore();

export default db;
