// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCF14w02ct0T6h4F5z4kmM3hhN6dWl7vGo",
  authDomain: "cs-todo-9d6d6.firebaseapp.com",
  projectId: "cs-todo-9d6d6",
  storageBucket: "cs-todo-9d6d6.appspot.com",
  messagingSenderId: "427645745993",
  appId: "1:427645745993:web:846404f1c66a973b363898",
  measurementId: "G-CMS5BGJHDS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db };