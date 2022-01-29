//import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5ABeyeE4-kzfO9VeF40gRzpRpSlPlJQU",
  authDomain: "challenge-cd494.firebaseapp.com",
  projectId: "challenge-cd494",
  storageBucket: "challenge-cd494.appspot.com",
  messagingSenderId: "817168787903",
  appId: "1:817168787903:web:91d8bee67f6006a401590a",
  measurementId: "G-8B5DVV4KN6",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { db, auth, createUserWithEmailAndPassword };
