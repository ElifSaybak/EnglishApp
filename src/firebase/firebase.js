import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from 'firebase/auth';
  import {getFirestore} from "firebase/firestore";
  import {getDatabase} from "firebase/database";



const firebaseConfig = {
  apiKey: "AIzaSyBbI6SObsnnlveE0-EPNQ7jD7iouavxa1g",
  authDomain: "english-app-7626f.firebaseapp.com",
  projectId: "english-app-7626f",
  storageBucket: "english-app-7626f.appspot.com",
  messagingSenderId: "876787978250",
  appId: "1:876787978250:web:788b4bbd1f17addb9dcff3"
};

initializeApp(firebaseConfig);

const auth = getAuth();
const firestore = getFirestore();
const database = getDatabase();

const createUserEmailPass = (email,password) => {
  return (
    createUserWithEmailAndPassword(auth,email,password)
    
  );
}

const signinUserEmailPass = (email,password) => {
  return (
    signInWithEmailAndPassword(auth,email,password)
    
  );
}


export {auth, firestore, database, createUserEmailPass,signinUserEmailPass} ;