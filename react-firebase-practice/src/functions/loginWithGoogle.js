import { auth } from '../firebase/credenciales';
import { GoogleAuthProvider, 
    signInWithPopup, 
    signInWithRedirect } from 'firebase/auth';


export default async function loginWithGoggle(){
    try{

        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);

    }catch(error){
        console.log(error);
    }

}




