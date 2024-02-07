import { initializeApp } from "firebase/app";
import firebaseConfig from "./config";
import { getAuth } from "firebase/auth";

export const auth = getAuth(firebaseConfig);

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;