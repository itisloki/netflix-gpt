// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAiEwWo-YG4lw3aFA6uvsDsRpzkZLAXnw",
  authDomain: "netflixgpt-beec4.firebaseapp.com",
  projectId: "netflixgpt-beec4",
  storageBucket: "netflixgpt-beec4.appspot.com",
  messagingSenderId: "738272858111",
  appId: "1:738272858111:web:a789441a4cc6b86b3ba1ca",
  measurementId: "G-P33LLVT13D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();