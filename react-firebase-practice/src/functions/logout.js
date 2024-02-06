import { auth } from "../firebase/credenciales";
import { signOut } from "firebase/auth";

export async function logOut() {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
    return false;
  }
}
