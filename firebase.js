// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT-PUBLIC-FIREBASE-API-KEY,
  authDomain: process.env.NEXT-PUBLIC-FIREBASE-AUTH-DOMAIN,
  projectId: process.env.NEXT-PUBLIC-FIREBASE-PROJECT-ID,
  storageBucket: process.env.NEXT-PUBLIC-FIREBASE-STORAGE-BUCKET,
  messagingSenderId: process.env.NEXT-PUBLIC-FIREBASE-MESSAGE-SENDER_ID,
  appId: process.env.NEXT-PUBLIC-FIREBASE-APP-ID,
};

// Initialize Firebase

// prevents us from doing more than one application at a time
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
