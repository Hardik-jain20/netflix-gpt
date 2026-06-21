// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbZxNb7RmOqy02TXK144ie9GAUDXdMPv0",
  authDomain: "netflix-gpt-c4fa7.firebaseapp.com",
  projectId: "netflix-gpt-c4fa7",
  storageBucket: "netflix-gpt-c4fa7.firebasestorage.app",
  messagingSenderId: "482761213083",
  appId: "1:482761213083:web:85820471fa8f9ab33b723e",
  measurementId: "G-86YMXBPSKH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// As we need auth repeatatively so exporting from here.
export const auth = getAuth();
