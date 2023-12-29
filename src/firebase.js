import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyD1VVoOx9Qa3rzwHuFweIfe-0usp3YUun0",
  authDomain: "sachin-portfolio-f5887.firebaseapp.com",
  projectId: "sachin-portfolio-f5887",
  storageBucket: "sachin-portfolio-f5887.appspot.com",
  messagingSenderId: "656278329625",
  appId: "1:656278329625:web:ca9284631271870fe2cd88"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();