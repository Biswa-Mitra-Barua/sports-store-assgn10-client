// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};
// const firebaseConfig = {
//   apiKey: "AIzaSyAAqQEiBrQ6_SbN_1am_P6FCqSKwPg7XKA",
//   authDomain: "sports-pro-c7097.firebaseapp.com",
//   projectId: "sports-pro-c7097",
//   storageBucket: "sports-pro-c7097.firebasestorage.app",
//   messagingSenderId: "299386134623",
//   appId: "1:299386134623:web:c50e483ec3b299bd5bfbea"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
