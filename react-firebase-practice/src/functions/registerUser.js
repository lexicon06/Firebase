import { auth } from "../firebase/credenciales";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default async function registerUser(email, password) {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const usr = userCredential.user;
      console.log(`Account created Successfully using email,password`);
      console.log(usr);
    })
    .catch((e) => {
      console.log(`Something went wrong fix: ${e}`);
    })
    .finally(() => {
      console.log(`Promise done`);
    });
}
