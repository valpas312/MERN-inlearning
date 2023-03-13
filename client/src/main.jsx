import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp7xi6foPr9jRqOweAwfBI2Kabo7zl2SQ",
  authDomain: "inspired-gift-361317.firebaseapp.com",
  projectId: "inspired-gift-361317",
  storageBucket: "inspired-gift-361317.appspot.com",
  messagingSenderId: "569112279056",
  appId: "1:569112279056:web:9af26b935d2c963b4fb295"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)