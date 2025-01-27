// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6Qi7X4Ls5dJ5u-1BS_E_uherx45kMyto",
  authDomain: "chatgpt-72c36.firebaseapp.com",
  projectId: "chatgpt-72c36",
  storageBucket: "chatgpt-72c36.firebasestorage.app",
  messagingSenderId: "517865661882",
  appId: "1:517865661882:web:b1093cc2c6517faeb5e983",
  measurementId: "G-NQDZ3XB5YJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);