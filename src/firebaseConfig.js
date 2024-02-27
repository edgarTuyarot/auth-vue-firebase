// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBni8mWx3REBHbO3jKM3dkPOypuWw4YUoI",
  authDomain: "testeo-ac559.firebaseapp.com",
  projectId: "testeo-ac559",
  storageBucket: "testeo-ac559.appspot.com",
  messagingSenderId: "585657994321",
  appId: "1:585657994321:web:c1b4b710978579b6d2bc70",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth,db };
