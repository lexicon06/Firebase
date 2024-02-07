import firebase from 'firebase/app';
import 'firebase/auth';

const auth = firebase.auth();

export const FirebaseLogin = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (error) {
    console.error("Error signing in with password and email", error);
  }
};

export const FirebaseLogout = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    console.error("Error signing out", error);
  }
};

export const FirebaseRegister = async (email, password) => {
  try {
    await auth.createUserWithEmailAndPassword(email, password);
  } catch (error) {
    console.error("Error signing up with password and email", error);
  }
};

export const FirebaseGoogleLogin = async () => {
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(provider);
  } catch (error) {
    console.error("Error signing in with Google", error);
  }
};

export default { FirebaseLogin, FirebaseLogout, FirebaseRegister, FirebaseGoogleLogin };