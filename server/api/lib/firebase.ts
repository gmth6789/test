import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAKpe9M-QP6wD0OFmHEkQo5oE8fnvIVVNI",
  authDomain: "app-1-45f78.firebaseapp.com",
  projectId: "app-1-45f78",
  storageBucket: "app-1-45f78.appspot.com",
  messagingSenderId: "167089103997",
  appId: "1:167089103997:web:fed8dd46d61c41a7da7d14",
  measurementId: "G-KHG10CEL2W"
};


export const firebaseApp = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(firebaseApp);