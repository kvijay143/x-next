// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "x-next-52819.firebaseapp.com",
  projectId: "x-next-52819",
  storageBucket: "x-next-52819.appspot.com",
  messagingSenderId: "183528602981",
  appId: "1:183528602981:web:1160d7b397196e6a3ab58c",
  measurementId: "G-9QX60TECRD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
 