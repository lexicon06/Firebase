import {auth} from "../Firebase/Credentials";

const logoutUser = async() => {
    await signOut(auth).then(()=>{
        console.log("Successfully log out");
    }).catch((e)=>{
        console.log("Something went wrong when log out");
    }); // set react state 'user' to null // add alert for successful logout
}

export default logoutUser;