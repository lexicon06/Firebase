import {auth} from "../Firebase/Credentials";
import { signInWithEmailAndPassword } from "firebase/auth";


const loginUserWithEmailAndPassword = async (username, password) => {
    // basic client side auth // firebase login functionality
    try {
        const res = await signInWithEmailAndPassword(auth, username, password);
        console.log(res); // add alert for success // add ui functionalities on successful login
    } catch (error) {
        console.log(error); // add alert for error
    }
};

export default loginUserWithEmailAndPassword;