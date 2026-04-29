// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDB12xP9ruuLJtKD_Wk4K5Xs1wMQThI-tE",
  authDomain: "belles-c6ba4.firebaseapp.com",
  databaseURL: "https://belles-c6ba4-default-rtdb.firebaseio.com",
  projectId: "belles-c6ba4",
  storageBucket: "belles-c6ba4.firebasestorage.app",
  messagingSenderId: "688636205022",
  appId: "1:688636205022:web:2540cc0e28254416bb2f4f",
//   measurementId: "G-E7K4X5FGFX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);