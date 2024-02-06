import { auth } from "../firebase/credenciales";
import { signInWithEmailAndPassword } from "firebase/auth";

export default async function loginWithEmailPassword(user, password) {
  await signInWithEmailAndPassword(auth, user, password)
    .then((result) => {
      const usr = result.user;
      console.log(`Login Success using email,password`);
      console.log(usr);
    })
    .catch((e) => {
      if(e.code == "auth/invalid-credential"){
        console.log("Invalid Credentials, wrong email/password");
      }else console.log(`Something went wrong fix: ${e}`);
    })
    .finally(() => {
      console.log(`Promise done`);
    });
}
