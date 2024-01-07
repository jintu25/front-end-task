// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDePKUYBGkDAM4qevgTpT8kosfLCjQxwKk",
  authDomain: "front-end-task-8c9f9.firebaseapp.com",
  projectId: "front-end-task-8c9f9",
  storageBucket: "front-end-task-8c9f9.appspot.com",
  messagingSenderId: "225482220183",
  appId: "1:225482220183:web:0251b380e3e14e60bbffd2",
  //   apiKey: import.meta.env.VITE_apiKey,
  //   authDomain: import.meta.env.VITE_authDomain,
  //   projectId: import.meta.env.VITE_projectId,
  //   storageBucket: import.meta.env.VITE_storageBucket,
  //   messagingSenderId: import.meta.env.VITE_messagingSenderId,
  //   appId: import.meta.env.VITE_appId,
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
