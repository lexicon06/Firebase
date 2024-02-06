import { auth } from "../firebase/credenciales";
import { signOut } from "firebase/auth";

export default async function logOut() {
  await signOut(auth)
    .then(() => {
      console.log(`Successfully signed out`);
    })
    .catch((e) => {
      console.log(`Something went wrong, please fix ${e}`);
    })
    .finally(() => {
      console.log(`The process has been completed`);
    });
}
