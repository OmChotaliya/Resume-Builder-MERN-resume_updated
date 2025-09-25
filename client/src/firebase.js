// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiXnHpBPzbl3Bibg1NbgfMuhiVYQRC59E",
  authDomain: "pro1-f9142.firebaseapp.com",
  projectId: "pro1-f9142",
  storageBucket: "pro1-f9142.firebasestorage.app",
  messagingSenderId: "721677215568",
  appId: "1:721677215568:web:6a816b20fa0da660436e55",
  measurementId: "G-SH8S1PNM39"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);