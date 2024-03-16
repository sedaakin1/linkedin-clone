import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPfWsrwTpQ6W8jHgoeHxP9Vukj8z2g2ak",
  authDomain: "linkedin-clone-c70c3.firebaseapp.com",
  projectId: "linkedin-clone-c70c3",
  storageBucket: "linkedin-clone-c70c3.appspot.com",
  messagingSenderId: "1064023894029",
  appId: "1:1064023894029:web:d0d0663d89d693baa00d44"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(app);
export const database = getFirestore(app);