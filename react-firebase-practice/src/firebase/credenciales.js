import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'; //servicio de autenticación
import { getFirestore } from 'firebase/firestore'; //servicio base de datos
import { getStorage } from 'firebase/storage'; //servericio almacenamiento


const firebaseConfig = {
  apiKey: "AIzaSyCT_kIvhVuv3NSvFq4ooiQk7NUDFU1ZpLw",
  authDomain: "codigo-facilito-react-firebase.firebaseapp.com",
  projectId: "codigo-facilito-react-firebase",
  storageBucket: "codigo-facilito-react-firebase.appspot.com",
  messagingSenderId: "800352007082",
  appId: "1:800352007082:web:7961063cd25afa668171d3"
};


const firebaseApp = initializeApp(firebaseConfig);//initialize the app
export const auth = getAuth(firebaseApp); //we call the method to use fireauth

export default firebaseApp;