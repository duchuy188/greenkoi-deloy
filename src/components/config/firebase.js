// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_viK0xqj5r1Y0MoDlNmm1OalaW7VvZOQ",
  authDomain: "greenkoi-a4f2a.firebaseapp.com",
  projectId: "greenkoi-a4f2a",
  storageBucket: "greenkoi-a4f2a.firebasestorage.app",
  messagingSenderId: "215681930360",
  appId: "1:215681930360:web:1ab2ff0fa6ff0fc206c98d",
  measurementId: "G-MYHQE85714"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider();

export { storage, googleProvider };