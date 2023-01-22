// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "@firebase/firestore"
const firebaseConfig = {
      apiKey: "AIzaSyBXUg6YOxi8RIsUfFBP3QrI2LNqSf5DOLM",
    authDomain: "menu-1df76.firebaseapp.com",
    projectId: "menu-1df76",
    storageBucket: "menu-1df76.appspot.com",
    messagingSenderId: "193602192390",
    appId: "1:193602192390:web:f81f3afdb95648a7d8af87",
    measurementId: "G-PGDC3T22GQ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
