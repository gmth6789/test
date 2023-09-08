import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";










export const firebaseApp = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(firebaseApp);