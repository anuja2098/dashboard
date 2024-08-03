// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALhRdoMMYh1N73UI-9LVWZrYFFVq2kSR4",
  authDomain: "dashboard-753f7.firebaseapp.com",
  projectId: "dashboard-753f7",
  storageBucket: "dashboard-753f7.appspot.com",
  messagingSenderId: "695842082068",
  appId: "1:695842082068:web:f7553207cd11b12b334601",
  measurementId: "G-W0EGBC2XQ9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
