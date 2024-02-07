import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import firebaseApp from '../firebase/credentials'; // replace with the path to your app file

const auth = getAuth(firebaseApp);

export const FirebaseLogin = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error("Error signing in with password and email", error);
  }
};

export const FirebaseLogout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error signing out", error);
  }
};

export const FirebaseRegister = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error("Error signing up with password and email", error);
  }
};

export const FirebaseGoogleLogin = async () => {
  try {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error("Error signing in with Google", error);
  }
};

export default { FirebaseLogin, FirebaseLogout, FirebaseRegister, FirebaseGoogleLogin };
