import { auth } from "../firebase/credenciales";
import {
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
} from "firebase/auth";

export default async function loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider)
      .then(() => {
        getRedirectResult(auth)
          .then((result) => {
            const user = result.user;
            console.log('Login Success using Google');
            console.log(user);
          })
          .catch((e) => {
            console.log(`Something went wrong: ${e}`);
          });
      })
      .catch((e) => {
        console.log(`Something went wrong during sign-in: ${e}`);
      })
      .finally(() => {
        console.log('Promise done');
      });
  }
