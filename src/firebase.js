// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';   //추가한다
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAduPGwgxkmXCxtx7z2eYYzFEdC6Enl_o0",
  authDomain: "mobile-project-c357e.firebaseapp.com",
  projectId: "mobile-project-c357e",
  storageBucket: "mobile-project-c357e.firebasestorage.app",
  messagingSenderId: "379092405479",
  appId: "1:379092405479:web:52dc3e64bb835b749c6642",
  measurementId: "G-K157ZFJP9H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app);   //추가한다