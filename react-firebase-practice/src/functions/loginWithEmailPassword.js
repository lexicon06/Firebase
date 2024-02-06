import { auth } from "../firebase/credenciales";
import { signInWithEmailAndPassword } from "firebase/auth";

export default async function loginWithEmailPassword(user, password) {
    try {
        const user = await signInWithEmailAndPassword(auth, user, password);
        console.log(user);
    } catch (error) {
        console.log(error);
        return false;
    }
}
