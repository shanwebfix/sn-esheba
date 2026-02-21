import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDaNxOkcDfOfSdHMvj_m4idsO5UthMZiU",
  authDomain: "myshamshernagar.firebaseapp.com",
  projectId: "myshamshernagar",
  storageBucket: "myshamshernagar.firebasestorage.app",
  messagingSenderId: "183463072535",
  appId: "1:183463072535:web:0afec05cfba00fa9e41d52",
  measurementId: "G-3DCP5BWYKX"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// সেশন স্থায়ী করার জন্য এটি যোগ করুন
setPersistence(auth, browserLocalPersistence);