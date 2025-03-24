// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp55nOUyLh1ODxhMoZCvPexOh0GUcxrT0",
  authDomain: "menu-escolar-1ee62.firebaseapp.com",
  projectId: "menu-escolar-1ee62",
  storageBucket: "menu-escolar-1ee62.firebasestorage.app",
  messagingSenderId: "253359266064",
  appId: "1:253359266064:web:9a8a553b6db9542bbded95"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);