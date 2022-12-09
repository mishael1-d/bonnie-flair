// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8FsgTCNHDGWLxw1-33CspaTdZskIwRR4",
  authDomain: "bonnie-flair.firebaseapp.com",
  projectId: "bonnie-flair",
  storageBucket: "bonnie-flair.appspot.com",
  messagingSenderId: "311850321339",
  appId: "1:311850321339:web:264af3309334c36579b09e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication
 export const auth = getAuth(app)

// Initialize Firestore
 export const db = getFirestore(app)