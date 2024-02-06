import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'; //servicio de autenticación
import { getFirestore } from 'firebase/firestore'; //servicio base de datos
import { getStorage } from 'firebase/storage'; //servericio almacenamiento
import firebaseConfig from './config';


const firebaseApp = initializeApp(firebaseConfig);//initialize the app
export const auth = getAuth(firebaseApp); //we call the method to use fireauth
export const db = getFirestore(firebaseApp); //we call firestore for later usage
export default firebaseApp;