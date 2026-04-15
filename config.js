// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDv6Dy824X2Lf4bM-EX16Xd2wja3gfohE4",
  authDomain: "expenseflow-ca6f6.firebaseapp.com",
  projectId: "expenseflow-ca6f6",
  storageBucket: "expenseflow-ca6f6.firebasestorage.app",
  messagingSenderId: "689636608454",
  appId: "1:689636608454:web:2dc401f1030e1080e30ac7",
  measurementId: "G-K2L8W5Y8GN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
