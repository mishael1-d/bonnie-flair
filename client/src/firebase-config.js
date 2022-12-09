// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getAuth} from "firebase/auth"
// import { getFirestore } from "firebase/firestore";


// // Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_ID,
//   appId: process.env.REACT_APP_FIREBASE_USER_ID,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Firebase Authentication
// export const auth = getAuth(app)

// // Initialize Firestore
// export const db = getFirestore(app)

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