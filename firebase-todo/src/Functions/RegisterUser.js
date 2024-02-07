import { auth } from "../Firebase/Credentials";
import { createUserWithEmailAndPassword } from "firebase/auth";

const registerUserWithEmailAndPassword = async (username, password) => {
    // basic client side auth // firebase sign up functionality
    try {
        const res = await createUserWithEmailAndPassword(auth, username, password);
        console.log(res); // add alert for success // add ui functionalities on successful sign up
    } catch (error) {
        console.log(error); // add alert for error
    }
};


export default registerUserWithEmailAndPassword;