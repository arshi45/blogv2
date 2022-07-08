// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMK50VqOXe8ku9txqYlcFB3evcKXLBofY",
  authDomain: "blog-project-7a30f.firebaseapp.com",
  projectId: "blog-project-7a30f",
  storageBucket: "blog-project-7a30f.appspot.com",
  messagingSenderId: "708810878918",
  appId: "1:708810878918:web:ce117bdcea70c021d10cc7",
  measurementId: "G-MMN8MRMM4P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();