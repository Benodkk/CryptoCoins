import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhS7KVs9vbQ4WoG-eJbMgwu7kP_hPAzW4",
  authDomain: "cryptocoins-823ba.firebaseapp.com",
  projectId: "cryptocoins-823ba",
  storageBucket: "cryptocoins-823ba.appspot.com",
  messagingSenderId: "886301284158",
  appId: "1:886301284158:web:b0e69f92fe03396881fe6f",
  measurementId: "G-7VG9DE3DFH",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
