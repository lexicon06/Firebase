# Firebase Auth React

Auth using **email and password**
Make sure you have installed Firebase.
run **npm install firebase**

# File + Folder Structure 

Let's create folder a named **Firebase** inside **src** directory
We create these two files inside **Firebase** folder:
> Credentials.js
> Config.js

### Content of Config.js Example

```js
const  firebaseConfig  = {

apiKey:  "xxxxxxxxxxxxxxxxxxxxxxxxxxxx",
authDomain:  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.com",
projectId:  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
storageBucket:  "xxxxxxxxxxxxxx-firebase.appspot.com",
messagingSenderId:  "xxxxxxxxxxxxxxxxxxxx",
appId:  "x:xxxxxxxxxxxxxxxxxx"

}

export  default  firebaseConfig;
```
### Content of Credentials.js Example

```js
import { initializeApp } from  "firebase/app";
import { getAuth } from  'firebase/auth'; //servicio de autenticación
import  firebaseConfig  from  './config';


const  firebaseApp  =  initializeApp(firebaseConfig);//initialize the app
export  const  auth  =  getAuth(firebaseApp); //we call the method to use fireauth
export  default  firebaseApp;
```

Now let's Create **Functions** folder in **src**

> registerUser.js
> logout.js
> loginWithEmailPassword.js


### Content of registerUser.js Example
```js
import { auth } from  "../firebase/credenciales";
import { createUserWithEmailAndPassword } from  "firebase/auth";
  
export  default  async  function  registerUser(email, password) {

await  createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
const  usr  =  userCredential.user;
console.log(`Account created Successfully using email,password`);
console.log(usr);
})
.catch((e) => {
console.log(`Something went wrong fix: ${e}`);
});
}
```
### Content of logout.js Example

```js
import { auth } from  "../firebase/credenciales";
import { signOut } from  "firebase/auth";

export  default  async  function  logOut() {
await  signOut(auth)
.then(() => {
console.log(`Successfully signed out`);
})
.catch((e) => {
console.log(`Something went wrong, please fix ${e}`);
});

}
```

### loginWithEmailPassword.js
```js
import { auth } from  "../firebase/credenciales";
import { signInWithEmailAndPassword } from  "firebase/auth";

export  default  async  function  loginWithEmailPassword(user, password) {

await  signInWithEmailAndPassword(auth, user, password)
.then((result) => {
const  usr  =  result.user;
console.log(`Login Success using email,password`);
console.log(usr);
})
.catch((e) => {
if(e.code  ==  "auth/invalid-credential"){
console.log("Invalid Credentials, wrong email/password");
}else  console.log(`Something went wrong fix: ${e}`);
});
}
```
***OPTIONAL LOGIN WITH GOOGLE***

```js
import { auth } from  "../firebase/credenciales";

import {

GoogleAuthProvider,

signInWithPopup,

signInWithRedirect,

} from  "firebase/auth";

  

export  default  async  function  loginWithGoogle() {

const  provider  =  new  GoogleAuthProvider();

signInWithRedirect(auth, provider)

.then(() => {

getRedirectResult(auth)

.then((result) => {

const  user  =  result.user;

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
```



Now let's Create **views** folder in **src**

> Login.jsx

### Login.jsx

```js
import React from "react";
import logOut from "../functions/logout";
import loginWithEmailPassword from "../functions/loginWithEmailPassword";
import registerUser from "../functions/registerUser";
import loginWithGoogle from "../functions/loginWithGoogle";

function Login() {
  const [isLogginIn, setIsLoggingIn] = React.useState(false);

  async function submitHandler(e) {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(`used email ${email}`);
    console.log(`used password ${password}`);

    // TODO: check password length before using auth shouldn't be less than 6 characters

    if (isLogginIn) {
      await loginWithEmailPassword(email, password);
    } else {
      await registerUser(email, password);
    }
  }

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="border border-slate-700 p-10 border rounded-xl">
          <h1 className="text-3xl font-bold mb-4">
            {isLogginIn ? "Inicia sesión" : "Regístrate"}
          </h1>

          <form className="flex flex-col" onSubmit={submitHandler}>
            <label htmlFor="email">Email</label>
            <input className="border border-slate-700" type="email" id="email" />
            <label htmlFor="password">Password</label>
            <input className="border border-slate-700" type="password" id="password" />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outine my-4" type="submit">
              {isLogginIn ? "Acceder" : "Regístrate"}
            </button>
          </form>

          <div className="flex flex-col">
            <button className="bg-green-500 text-white p-4 rounded font-semibold" onClick={loginWithGoogle}>Accede con Google</button>
            <button className="underline mt-4" onClick={() => setIsLoggingIn(!isLogginIn)}>
              {isLogginIn ? "¿No tienes cuenta? Crea una" : "¿Ya tienes cuenta? Accede"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

```

and finally in the main App.jsx of react

### App.jsx 

```js
import { useState } from  'react'
import  './styles/tailwind.css'
import  Home  from  './views/Home'
import  Login  from  './views/Login'
import { auth } from  './firebase/credenciales';
import { onAuthStateChanged } from  'firebase/auth';


function  App() {

const [user, setUser] =  useState(null);

onAuthStateChanged(auth, firebaseUser  =>{

if(firebaseUser){
setUser(firebaseUser);
}else{
setUser(null);
}

})

return user? <Home user={user}/>:<Login/>;

}

export default App
```