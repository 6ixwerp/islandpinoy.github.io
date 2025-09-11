// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvN2aG7HOu5vp8TQ2Kta2LZTHoqhHsLAw",
  authDomain: "islandpinoy-3ac05.firebaseapp.com",
  projectId: "islandpinoy-3ac05",
  storageBucket: "islandpinoy-3ac05.firebasestorage.app",
  messagingSenderId: "927898743748",
  appId: "1:927898743748:web:3b668caf9d3e556ddeaa91",
  measurementId: "G-17CMTYBEP1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
