// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfGBuJBcOD_tqEhgEihSVgslrXoB7I9A0",
  authDomain: "billel-khanfri.firebaseapp.com",
  projectId: "billel-khanfri",
  storageBucket: "billel-khanfri.appspot.com",
  messagingSenderId: "904885973248",
  appId: "1:904885973248:web:ed56f20d904822099783e5",
  measurementId: "G-461VNFNCJW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
