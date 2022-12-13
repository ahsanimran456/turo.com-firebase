import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider,signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAtIAT6KTBR3doVH11waQHb3H22yeUgcsE",
  authDomain: "react-turo.firebaseapp.com",
  projectId: "react-turo",
  storageBucket: "react-turo.appspot.com",
  messagingSenderId: "23732388323",
  appId: "1:23732388323:web:24c180610b074b099520d6",
  measurementId: "G-Y6JEQK58VG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();

export {provider,GoogleAuthProvider,signInWithPopup,getAuth}